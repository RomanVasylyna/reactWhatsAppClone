import React, { useState, useEffect } from 'react';
import { useConversation } from '../contexts/ConversationProvider';
import { Form, InputGroup, Button, Card } from 'react-bootstrap';

const OpenConversation = () => {

    const { conversations, sendMessage } = useConversation();
    const [currentConversation, setCurrentConversation] = useState([]);
    const [text, setText] = useState('');

    // On form submit event
    const handleSubmit = e => {
        e.preventDefault();
        
        sendMessage(text);
        setText('');
    }

    useEffect(() => {
        setCurrentConversation(conversations.filter(conversation => conversation.selected));
    }, [conversations]);

    console.log(conversations);



    return (
        <div className="w-75 d-flex flex-column ps-4 pt-3">
            <h1>Current Conversation</h1>

            {/* Conversation Participants */}
            <p>Participants: {currentConversation.length ? currentConversation[0].newConversation.map((conv, index) => {
                if (index !== currentConversation[0].newConversation.length - 1) {
                    return <span>{conv.contactName}, </span>
                } else {
                    return <span>{conv.contactName}</span>
                }
            }) : ''}</p>

            {/* Messages */}
            <div className="flex-grow-1 overflow-auto">
               { currentConversation[0] ? 
               currentConversation[0].messages.map(message => <Card className="p-3">{ message }</Card>) 
               : ''}
            </div>

            {/* Sending Messages */}
            <Form className="m-3" onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup className="flex-wrap">

                        <Form.Control
                            as="textarea"
                            required
                            value={text}
                            style={{ height: '75px', resize: 'none' }}
                            onChange={e => setText(e.target.value)}
                        />

                        <Button type="submit">Send</Button>

                    </InputGroup>
                </Form.Group>
            </Form>

        </div>
    )
}

export default OpenConversation
