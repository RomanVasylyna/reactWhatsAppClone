import React from 'react';
import { useConversation } from '../contexts/ConversationProvider';

const Conversations = () => {

    const { conversations } = useConversation();

    return (
        <div className="d-flex flex-column pe-2 pt-3">
            {conversations.length ?
                conversations.map(conversation => <div key={conversation.contactID} className="mb-1 border-bottom" style={{ cursor: 'pointer' }}>
                    <span>Chat with {conversation.contactName}</span>
                </div>)
                : <p>You have no conversations yet...</p>
            }
        </div>
    )
}

export default Conversations
