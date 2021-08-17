import React, { useState } from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { useConversation } from '../contexts/ConversationProvider';

const Conversations = () => {

    const { conversations } = useConversation();

    return (

        <ListGroup variant="flush">
            {conversations.length ?
                conversations.map(conversation => conversation.newConversation.map(conversation => conversation.contactName).join(',')).map((el, index) =>
                    <ListGroup.Item key={index}>
                        {el}
                    </ListGroup.Item>
                ) : <p>You have no conversations yet...</p>}
        </ListGroup>

    )
}

export default Conversations
