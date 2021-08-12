import React from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { useConversation } from '../contexts/ConversationProvider';

const Conversations = () => {

    const { conversations } = useConversation();

    return (
        <ListGroup variant="flush">
            {conversations.length ? conversations.map(recipient =>
                <ListGroup.Item key={recipient.recipientID}>
                    <span>{recipient.contactName}</span>
                </ListGroup.Item>) :<p>You have no conversations yet...</p> }
        </ListGroup>
        // <ListGroup variant="flush">
        // {conversations.length ? conversations.recipients.map(recipient =>
        //     <ListGroup.Item key={recipient.recipientID}>
        //         <span>{recipient.contactName}</span>
        //     </ListGroup.Item>
        // ) : <p>You have no conversations yet...</p>}
        // </ListGroup>
    )
}

export default Conversations
