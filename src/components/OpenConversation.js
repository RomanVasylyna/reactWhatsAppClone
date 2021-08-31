import React, { useState, useEffect } from 'react';
import { useConversation } from '../contexts/ConversationProvider';
import { Form, InputGroup, Button, Card } from 'react-bootstrap';
import useMediaQuery from 'react-use-media-query-hook';

const OpenConversation = () => {

    // Media Queries
    const isMobile = useMediaQuery('(max-width: 400px)');
    const isTablet = useMediaQuery('(min-width: 401px) and (max-width: 640px)');
    const isDesktop = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
    const isLargeDesktop = useMediaQuery('(min-width: 1025px)');

    const { conversations, sendMessage } = useConversation();
    const [currentConversation, setCurrentConversation] = useState([]);
    const [text, setText] = useState('');

    // On form submit event
    const handleSubmit = e => {
        e.preventDefault();

        if (text != '') {
            sendMessage(text);
            setText('');
        } else {
            alert('Message can\'t be empty!');
        }
    }

    // Send Form by pressing enter key
    const handleKeyPress = e => {
        if (e.key == 'Enter') {
            handleSubmit(e);
        }
    }

    useEffect(() => {
        setCurrentConversation(conversations.filter(conversation => conversation.selected));
    }, [conversations]);

    console.log(conversations);


    return (
        <div className="w-75 d-flex flex-column ps-4 pt-3" style={{ position: 'absolute', left: '17vw' }}>
             {isMobile && <h1>Mobile</h1>}
             {isTablet && <h1>Tablet</h1>}


             <h1>Open Conversation</h1>

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
                {currentConversation[0] ?
                    currentConversation[0].messages.map(message => <Card className="p-3">{message}</Card>)
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
                            onKeyPress={handleKeyPress}
                        />

                        <Button type="submit">Send</Button>

                    </InputGroup>
                </Form.Group>
            </Form>

        </div>


    )
}

export default OpenConversation
