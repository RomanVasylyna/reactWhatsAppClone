import React from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { useConversation } from '../contexts/ConversationProvider';

const Conversations = () => {

    const { conversations } = useConversation();

    console.log(conversations.map(conversation => conversation.recipients.map(recipient => recipient.contactName)));

    return (
        <ListGroup variant="flush">
            {conversations.length ?
                conversations.map(conversation =>
                    conversation.recipients.map(recipient =>
                        <ListGroup.Item key={recipient.recipientID}>
                            {recipient.contactName}
                        </ListGroup.Item>))
                : <p>You have no conversations yet...</p>}
        </ListGroup>

        // <ListGroup.Item key={conversation.recipients.recipientID}>
        //     <span>{conversation.recipients.contactName}</span>
        // </ListGroup.Item>) :<p>You have no conversations yet...</p> }


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
