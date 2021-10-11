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

    const removeConvDuplicates = ids => {
        //const newConv = { newConversation: ids.map(id => { return { recipientID: id, contactName: contacts.filter(contact => contact.id === id)[0].name } }), selected: false, messages: [], sender: userID };
        //let madeChange = false;

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
        const conversationIds = conversations.map(conversation => conversation.recipients.map(conversation => conversation.id));
        //const conversationIds = conversations.map(conversation => conversation.newConversation.map(conversation => conversation.recipientID));

        const newConv = { recipients:ids.map(id => { return { id, name: contacts.filter(contact => contact.id === id)[0].name } }), messages:[], selected: false, sender: userID };

        //const newConvIds = newConv.newConversation.map(conv => conv.recipientID);

        //setTest(conversationIds.map(conversation => conversation.every(conv => ids.includes(conv))[0])[0]);
        // setTestTwo(conversationIds.map(conversation => conversation.every(conv => ids.includes(conv))));

        let check = conversations.map(conversation => JSON.stringify(conversation) === JSON.stringify(newConv));
        // let check2 = conversationIds.map(conversation => conversation.every(conv => ids.includes(conv)));


        // let check3 = conversationIds.map(conversationId => conversationId.every(id => newConvIds.includes(id)));

        // сравнить newConvIds и каждую из conversationIds при помощи every


        if(ids.length) {
            if (!check.some(Boolean)) { //false
                setConversations([...conversations, newConv]);
                // console.log(check);
                // console.log(check2);
                // console.log(newConvIds);
                // console.log(conversationIds);
                //console.log(check3);
                check=[];
            } else {
                alert('You already have this conversation');
                // console.log(testConv);
                // console.log(newConv);
                // console.log(newConvIds);
                // console.log(conversationIds);
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
