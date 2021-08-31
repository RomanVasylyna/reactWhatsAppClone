import React, { useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from '../contexts/ContactProvider';

// Make sure newConversation's recipients don't match already existing conversation
// recipients

// Initializing context
const ConversationContext = React.createContext();

// Creating a wrapper that allows to use context outside
export const useConversation = () => {
    return useContext(ConversationContext);
}

export const ConversationProvider = ({ children, userID }) => {

    const { contacts } = useContacts();
    const [conversations, setConversations] = useLocalStorage('conversations', []);

    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

    const sendMessage = text => {
        const currentConversation = conversations.filter(conversation => conversation.selected)[0];
        currentConversation.messages.push(text);
    }

    const selectConversationIndex = (index) => {
        setSelectedConversationIndex(index);
        return setConversations(conversations.map((el, ind) => ind === index ? { ...el, selected: true } : { ...el, selected: false }));
    }

    const removeConvDuplicates = ids => {
        const conversationIds =  conversations.map(conversation => conversation.newConversation.map(conversation => conversation.recipientID).join(' ')).map(id => id);
        const allValuesMatch = conversationIds.every(id => ids.indexOf(id) >= 0);
        const someValuesMatch = conversationIds.some(id => ids.indexOf(id) >= 0);
        // console.log(allValuesMatch);
        // console.log(someValuesMatch);
        // console.log(ids);
        // console.log(conversationIds);
        return someValuesMatch;
    }

    const createConversation = (ids) => {

        if(ids.length) {
            setConversations([...conversations, { newConversation: ids.map(id => { return { recipientID: id, contactName: contacts.filter(contact => contact.id === id)[0].name } }), selected: false, messages:[], sender: userID }])
        } else {
            alert('Please choose at least one recipient');
        }

        // return ids.length && !removeConvDuplicates(ids) ?
        //     setConversations([...conversations, { newConversation: ids.map(id => { return { recipientID: id, contactName: contacts.filter(contact => contact.id === id)[0].name } }), selected: false, messages:[], sender: userID }])
        //     :
        //     alert('Please choose at least one recipient');
    }

    return (
        <ConversationContext.Provider
            value={{ conversations, createConversation, selectConversationIndex, selectedConversationIndex, sendMessage }}>
            {children}
        </ConversationContext.Provider>
    )
}
