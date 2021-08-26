import React, { useState, useEffect } from 'react';
import { useConversation } from '../contexts/ConversationProvider';

const OpenConversation = () => {

    const { conversations } = useConversation();
    const [currentConversation, setCurrentConversation] = useState([]);

    useEffect(() => {
        setCurrentConversation(conversations.filter(conversation => conversation.selected));
    }, [conversations]);

    console.log(currentConversation[0].newConversation);


    return (
        <div style={{ marginLeft: '30px', paddingTop: '20px' }}>
            <h1>Current Conversation</h1>
            <p>Participants: {currentConversation[0].newConversation.map((conv, index) => {
                if (index !== currentConversation[0].newConversation.length - 1) {
                    return <span>{conv.contactName}, </span>
                } else {
                    return <span>{conv.contactName}</span>
                }
            })}</p>
        </div>
    )
}

export default OpenConversation
