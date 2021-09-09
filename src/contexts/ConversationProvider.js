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

    // const [conversationIds, setConversationIds] = useState();

    const sendMessage = text => {
        const currentConversation = conversations.filter(conversation => conversation.selected)[0];
        currentConversation.messages.push(text);
    }

    const selectConversationIndex = (index) => {
        setSelectedConversationIndex(index);
        return setConversations(conversations.map((el, ind) => ind === index ? { ...el, selected: true } : { ...el, selected: false }));
    }

    const removeConvDuplicates = ids => {
        const conversationIds = conversations.map(conversation => conversation.newConversation.map(conversation => conversation.recipientID));
        // const someValuesMatch = ids.some(id => conversationIds.includes(id));
        const allValuesMatch = ids.every(id => conversationIds.includes(id));

        return allValuesMatch;
    }

    const createConversation = (ids) => {

        // Если массив с айдишниками не равен предыдущему добавленному массиву добавляем новый
        // прогнать проверку по каждому вложенному массиву

        const conversationIds = conversations.map(conversation => conversation.newConversation.map(conversation => conversation.recipientID));
        // const someValuesMatch = conversationIds.some(id => ids.includes(id));
        // const allValuesMatch = ids.every((id, index) => conversationIds[index].includes(id));

        const allValuesMatch = ids.every((id, index) => id === conversationIds[index]);
        const test = conversationIds.map(conversation => conversation.every(id => ids.includes(id)));


        if (ids.length) {
            if (!allValuesMatch) {
                console.log(test);
                console.log(ids);
                console.log(conversationIds);
                console.log(allValuesMatch);
                setConversations([...conversations, { newConversation: ids.map(id => { return { recipientID: id, contactName: contacts.filter(contact => contact.id === id)[0].name } }), selected: false, messages: [], sender: userID }])
            } else {
                console.log(ids);
                console.log(conversationIds);
                console.log(allValuesMatch);
                alert('You already have this conversation');
            }
        } else {
            console.log(test);
            console.log(ids);
            console.log(conversationIds);
            console.log(allValuesMatch);
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
