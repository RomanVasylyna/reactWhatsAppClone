import React, { useState } from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { useConversation } from '../contexts/ConversationProvider';

const Conversations = () => {
    
    const [chatModal, setChatModal] = useState(false);
    const closeModal = () => setChatModal(useLocalStorage.setItem(false));
    const openModal = () => setChatModal(useLocalStorage.setItem(true));

    const { conversations, selectConversationIndex, selectedConversationIndex } = useConversation();

    return (

        <ListGroup variant="flush">
            {conversations.length ?
                conversations.map(conversation => conversation.recipients.map(conversation => conversation.name).join(',')).map((name, index) =>
                    <ListGroup.Item
                        key={index}
                        action
                        onClick={() => selectConversationIndex(index)}
                        active={index === selectedConversationIndex}>
                        {name}
                    </ListGroup.Item>
                ) : <p>You have no conversations yet...</p>}
        </ListGroup>

    )
}

export default Conversations
