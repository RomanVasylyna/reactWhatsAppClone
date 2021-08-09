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
        return conversations.map(conversation => conversation.personID != personID ? setConversations([...conversations, { personID, messages:[] }]) : null);
        // return setConversations([...conversations, { personID, messages:[] }]);
    }

    return (
        <ConversationContext.Provider value={{ conversations, createConversation }}>
            {children}
        </ConversationContext.Provider>
    )
}
