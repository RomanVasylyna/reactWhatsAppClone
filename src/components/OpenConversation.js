import React, { useState } from 'react';
import { useConversation } from '../contexts/ConversationProvider';

const OpenConversation = () => {

    const { conversations } = useConversation();
    const [ currentCoversation, setCurrentConversation] = useState({});

    const getCurrentConversation = () => {
        setCurrentConversation({});
        setCurrentConversation(conversations.filter(conversation => conversation.selected));
    }

    return (
        <div style={{ marginLeft: '30px', paddingTop: '20px'}}>
            <h1 onClick={() => getCurrentConversation()}>Current Conversation</h1>
            <p></p>
        </div>
    )
}

export default OpenConversation
