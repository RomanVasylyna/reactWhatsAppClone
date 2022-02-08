import React, { useState, useEffect } from 'react';
import { useConversation } from '../contexts/ConversationProvider';
import { Form, InputGroup, Button, Card } from 'react-bootstrap';
import useMediaQuery from 'react-use-media-query-hook';

const OpenConversation = () => {
    
    // Styling
    const mobileStyles = {
        position: 'absolute',
        left: '5vw',
        width: '60vw'
    }

    const tabletStyles = {
        position: 'absolute',
        left: '25vw',
        width: '60vw'
    }

    // Media Queries
    const isMobile = useMediaQuery('(max-width: 400px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 991.98px)');
    const isDesktop = useMediaQuery('(min-width: 992px) and (max-width: 1199.98px)');
    const isLargeDesktop = useMediaQuery('(min-width: 1200px)');

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

    // conversations.filter(conversation => console.log(conversation.newConversation[0]));


    return (
        <>

            {/* Mobile Styling */}
            {isMobile &&
                
                <div className="d-flex flex-column ps-4 pt-3" style={mobileStyles}>

                    <h1>Current Conversation</h1>

                    <p> <span>Participants:</span> {currentConversation.length ? currentConversation[0].recipients.map((conv, index) => {
                        if (index !== currentConversation[0].recipients.length - 1) {
                            return <span>{conv.name}, </span>
                        } else {
                            return <span>{conv.name}</span>
                        }
                    }) : ''}</p>


                    <div className="flex-grow-1 overflow-auto">
                        {currentConversation[0] ?
                            currentConversation[0].messages.map(message => <Card className="p-3 w-25 my-1 bg-primary text-white">{`Me: ${message}`}</Card>)
                            : ''}
                    </div>

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
            }

            {/* Table Styling */}
            {isTablet &&

                <div className="d-flex flex-column ps-5 pt-4 ms-5" style={tabletStyles}>
                    <h1>Current Conversation</h1>

                    <p> <span>Participants:</span> {currentConversation.length ? currentConversation[0].recipients.map((conv, index) => {
                        if (index !== currentConversation[0].recipients.length - 1) {
                            return <span>{conv.name}, </span>
                        } else {
                            return <span>{conv.name}</span>
                        }
                    }) : ''}</p>


                    <div className="flex-grow-1 overflow-auto">
                        {currentConversation[0] ?
                            currentConversation[0].messages.map(message => <Card className="p-3 w-75 my-1 bg-primary text-white">{`Me: ${message}`}</Card>)
                            : ''}
                    </div>

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
            }







        </>


    )
}

export default OpenConversation
