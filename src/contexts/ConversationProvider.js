import React, { useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from '../contexts/ContactProvider';


// Initializing context
const ConversationContext = React.createContext();

// Creating a wrapper that allows to use context outside
export const useConversation = () => {
    return useContext(ConversationContext);
}


export const ConversationProvider = ({ children, userID }) => {

    const { contacts } = useContacts();
    const [conversations, setConversations] = useLocalStorage('conversations', []);

    const [selectedConversationIndex, setSelectedConversationIndex] = useState("");
    
    // Handle Mobile Behaviour
    const [showModal, setShowModal] = useState(true);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const sendMessage = text => {
        const currentConversation = conversations.filter(conversation => conversation.selected)[0];
        currentConversation.messages.push(text);
    }

    const selectConversationIndex = (index) => {
        setSelectedConversationIndex(index);
        handleShow();
        return setConversations(conversations.map((el, ind) => ind === index ? { ...el, selected: true } : { ...el, selected: false }));
    }


    const createConversation = (ids) => {
        // Getting all recipients' ids from each individual conversation
        const conversationIds = conversations.map(conversation => conversation.recipients.map(conversation => conversation.id));

        // Newly created conversation object
        const newConv = { recipients: ids.map(id => { return { id, name: contacts.filter(contact => contact.id === id)[0].name } }), messages: [], selected: false, sender: userID };

        // Making sure conversations objects are unique
        let unique = conversations.map(conversation => JSON.stringify(conversation) === JSON.stringify(newConv));

        // сравнить newConvIds и каждую из conversationIds при помощи every
        // !unique.some(Boolean)
        // !checkEquality(ids, conversationIds);
        if (ids.length) {
            if (!unique.some(el => el)) { //false
                setConversations([...conversations, newConv]);
                console.log(unique);
            } else {
                alert('You already have this conversation');
            }
        } else {
            alert('Please choose at least one recipient');
        }

        unique = [];

    }

    return (
        <ConversationContext.Provider
            value={{ conversations, createConversation, selectConversationIndex, selectedConversationIndex, sendMessage, showModal, handleClose }}>
            {children}
        </ConversationContext.Provider>
    )
}
