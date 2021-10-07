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

    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

    const [conversationIdsIndex, setConversationIdsIndex] = useState(0);

    // Set Test State
    const [test, setTest] = useState(false);
    const [testTwo, setTestTwo] = useState(false);

    const sendMessage = text => {
        const currentConversation = conversations.filter(conversation => conversation.selected)[0];
        currentConversation.messages.push(text);
    }

    const selectConversationIndex = (index) => {
        setSelectedConversationIndex(index);
        return setConversations(conversations.map((el, ind) => ind === index ? { ...el, selected: true } : { ...el, selected: false }));
    }

    // const removeConvDuplicates = ids => {
    //     let madeChange = false;
    //     // const newMessage = {sender, text};
    //     const check = conversations.map(conversation =>
    //     if(arraysAreEqual(conversationRecipients, recipients)) {
    //     madeChange = true;
    //     return {
    //     [...conversation, ]
    //     }
    //     })

    //     if (madeChange) {
    //         console.log('fdsfds');
    //     } else {
    //         setConversations([...conversations, { newConversation: ids.map(id => { return { recipientID: id, contactName: contacts.filter(contact => contact.id === id)[0].name } }), selected: false, messages: [], sender: userID }])
    //     }
    // }



    const createConversation = (ids) => {

        const conversationIds = conversations.map(conversation => conversation.newConversation.map(conversation => conversation.recipientID));
        const newConv = { newConversation: ids.map(id => { return { recipientID: id, contactName: contacts.filter(contact => contact.id === id)[0].name } }), selected: false, messages: [], sender: userID };

        setTest(conversationIds.map(conversation => conversation.every(conv => ids.includes(conv))[0])[0]);
        // setTestTwo(conversationIds.map(conversation => conversation.every(conv => ids.includes(conv))));
        
        let check = conversations.map(conversation => JSON.stringify(conversation) === JSON.stringify(newConv));
        let check2 = conversationIds.map(conversation => conversation.every(conv => ids.includes(conv)));
    
        if (ids.length) {
            if (!check.some(Boolean)) { //false
                setConversations([...conversations, newConv]);
                setTest(true);
                console.log(check);
                check=[];
            } else {
                alert('You already have this conversation');
                setTest(false);
            }
        } else {
            alert('Please choose at least one recipient');
        }

        // return ids.length && !singleMatch ?
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
