import React from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { useConversation } from '../contexts/ConversationProvider';

const Conversations = () => {

    const { conversations } = useConversation();

    return (
        <ListGroup variant="flush">
        {conversations.length ? conversations.map(conversation =>
            <ListGroup.Item key={conversation.contactID}>
                <span>{conversation.contactName}</span>
            </ListGroup.Item>
        ) : <p>You have no conversations yet...</p>}
        </ListGroup>
    )
}

export default Conversations
