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

    const sendMessage = text => {
        const currentConversation = conversations.filter(conversation => conversation.selected)[0];
        currentConversation.messages.push(text);
    }

    const selectConversationIndex = (index) => {
        setSelectedConversationIndex(index);
        return setConversations(conversations.map((el, ind) => ind === index ? { ...el, selected: true } : { ...el, selected: false }));
    }

    const checkEquality = (arr1, arr2) => {
        //If elements' lengths differ we immediately return false
        // if (arr1.length !== arr2.length) return false;

        // If first condition failed we sort both arrays
        // arr1.sort();
        // arr2.sort();

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].length !== arr2.length) return false;
            arr1[i].sort();
            arr2.sort();
            return arr1[i].every((el, index) => el === arr2[index]);
        }


        // And make sure that each element of one array equals the element of the second
        // return arr1.filter(elem => elem.every((el, index) => el === arr2[index]));
    }

    const removeConvDuplicates = ids => {
        //const newConv = { newConversation: ids.map(id => { return { recipientID: id, contactName: contacts.filter(contact => contact.id === id)[0].name } }), selected: false, messages: [], sender: userID };
        //let madeChange = false;

        // if(a.length !== b.length) - сравниваем массивы по длине

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
            if (!checkEquality(conversationIds, ids)) { //false
                setConversations([...conversations, newConv]);
                console.log(ids);
                console.log(conversationIds);
                // console.log(checkEquality(ids, conversationIds));
                // console.log(conversationIds[1]);
                //console.log(check3);
                unique = [];
            } else {
                alert('You already have this conversation');
            }
        } else {
            alert('Please choose at least one recipient');
        }

    }

    return (
        <ConversationContext.Provider
            value={{ conversations, createConversation, selectConversationIndex, selectedConversationIndex, sendMessage }}>
            {children}
        </ConversationContext.Provider>
    )
}
