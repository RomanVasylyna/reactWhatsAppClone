import React, { useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from '../contexts/ContactProvider';

// Initializing context
const ConversationContext = React.createContext();

// Creating a wrapper that allows to use context outside
export const useConversation = () => {
    return useContext(ConversationContext);
}

export const ConversationProvider = ({ children }) => {

    const { contacts } = useContacts();
    const [conversations, setConversations] = useLocalStorage('conversations', []);

    const [selectedConversationIndex, setSelectedConversationIndex] = useLocalStorage('activeConversation', []);

    const selectConversationIndex = (index) => {
       return setSelectedConversationIndex(conversations.filter((el, ind) => ind === index));
    }

    const createConversation = (ids) => {
        return setConversations([...conversations, { newConversation: ids.map(id => { return { recipientID: id, contactName: contacts.filter(contact => contact.id === id)[0].name, messages: [] } }), selected: false}]);
    }

    return (
        <ConversationContext.Provider value={{ conversations, createConversation, selectConversationIndex }}>
            {children}
        </ConversationContext.Provider>
    )
}
