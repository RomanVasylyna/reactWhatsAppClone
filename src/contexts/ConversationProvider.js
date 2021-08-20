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

    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

    const selectConversationIndex = (index) => {
        setSelectedConversationIndex(index);
        // console.log(conversations.filter(conversation => conversation.selected));
        return setConversations(conversations.map((el, ind) => ind === index ? {...el, selected: true} : {...el, selected: false}));
    }

    const createConversation = (ids) => {
        return ids.length ? 
            setConversations([...conversations, { newConversation: ids.map(id => { return { recipientID: id, contactName: contacts.filter(contact => contact.id === id)[0].name, messages: [] } }), selected: false }])
            :
            alert('Please choose at least one recipient');
    }

    return (
        <ConversationContext.Provider value={{ conversations, createConversation, selectConversationIndex }}>
            {children}
        </ConversationContext.Provider>
    )
}
