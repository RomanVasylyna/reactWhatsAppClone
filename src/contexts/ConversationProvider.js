import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Initializing context
const ConversationContext = React.createContext();

// Creating a wrapper that allows to use context outside
export const useConversation = () => {
    return useContext(ConversationContext);
}

export const ConversationProvider = ({ children }) => {

    const [conversations, setConversations] = useLocalStorage('conversations', []);

    const createConversation = (personID) => {
        return setConversations(conversations.map(conversation => conversation.personID != personID) ? [...conversations, { personID, messages:[] }] : '');
    }

    return (
        <ConversationContext.Provider value={{ conversations, createConversation }}>
            {children}
        </ConversationContext.Provider>
    )
}
