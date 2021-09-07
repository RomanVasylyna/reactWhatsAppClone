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
        const conversationIds = conversations.map(conversation => conversation.newConversation.map(conversation => conversation.recipientID).join(' ')).map(id => id);
        const someValuesMatch = ids.some(id => conversationIds.includes(id));
        const allValuesMatch = ids.every(id => conversationIds.includes(id));

        // [123, 321, 5435, 555, 2342]
        // [123] - Kate (some of conversationIds include id)
        // [123, 321] - Jack, Kate (every element of ids include conversationIds)
        // [321, 123]
        //console.log(allValuesMatch);
        // console.log(someValuesMatch);
        // console.log(ids);
        // console.log(conversationIds);
        return [someValuesMatch, allValuesMatch];
    }

    const createConversation = (ids) => {

        const conversationIds = conversations.map(conversation => conversation.newConversation.map(conversation => conversation.recipientID)[0]).map(id => id);
        const someValuesMatch = conversationIds.some(id => ids.includes(id));
        const allValuesMatch = ids.every(id => conversationIds.includes(id));
        
        // const matches = removeConvDuplicates(ids);
        // const singleMatch = matches[0];
        // const multipleMatch = matches[1];
        
        let arr1 = [1, 2, 3, 4];
        let arr2 = [2, 3];
        let isFounded = arr1.some( ai => arr2.includes(ai) ); // некоторые из элементов [1, 2, 3] включают [2 и 3]
        let allFounded = arr2.every( ai => arr1.includes(ai) ); // все элементы находящиеся в [2, 3] уже есть в [1, 2, 3]

        // ["123"]
        // ["123", "321"]
        // Ids ["123", "321", "423432"]
        // coversationIds["123", "555", "321", "777", "423432"]

        if (ids.length && !someValuesMatch) {
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
