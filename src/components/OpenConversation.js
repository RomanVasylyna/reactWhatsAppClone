import React, { useState, useEffect } from 'react';
import { useConversation } from '../contexts/ConversationProvider';
import { Form, InputGroup, Button, Card, Modal } from 'react-bootstrap';
import useMediaQuery from 'react-use-media-query-hook';

const OpenConversation = () => {


    // Styling
    const mobileStyles = {
        position: 'absolute',
        left: '5vw',
        width: '200vw'
    }

    const tabletContainer = {
        position: 'absolute',
        left: '25vw',
        width: '60vw'
    }

    const desktopStyles = {
        position: 'absolute',
        left: '25vw',
        width: '60vw'
    }

    const largeDesktopStyles = {
        position: 'absolute',
        left: '25vw',
        width: '60vw'
    }

    // Media Queries
    const isMobile = useMediaQuery('(max-width: 700px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 991.98px)');
    const isDesktop = useMediaQuery('(min-width: 992px) and (max-width: 1199.98px)');
    const isLargeDesktop = useMediaQuery('(min-width: 1200px)');

    const { conversations, sendMessage, removeMessage, showModal, handleClose } = useConversation();
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

                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-6">
                            <p> <span className="fw-bold">Participants:</span> {currentConversation.length ? currentConversation[0].recipients.map((conv, index) => {
                                if (index !== currentConversation[0].recipients.length - 1) {
                                    return <span>{conv.name}, </span>
                                } else {
                                    return <span>{conv.name}</span>
                                }
                            }) : ''}</p>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="w-100">
                        <div>
                            {currentConversation[0] ?
                                currentConversation[0].messages.map(message => <Card className="p-3 my-1 bg-primary text-white">{`Me: ${message}`}</Card>)
                                : ''}
                        </div>
                    </Modal.Body>


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

                </Modal>

            }

            {/* Table Styling */}
            {isTablet &&

                <div className="d-flex flex-column ps-5 pt-4 ms-5" style={tabletContainer}>
                    <h1>Current Conversation</h1>

                    <p> <span>Participants:</span> {currentConversation.length ? currentConversation[0].recipients.map((conv, index) => {
                        if (index !== currentConversation[0].recipients.length - 1) {
                            return <span>{conv.name}, </span>
                        } else {
                            return <span>{conv.name}</span>
                        }
                    }) : ''}</p>

                    {/* Messages */}
                    <div className="flex-grow-1 overflow-auto">
                        {currentConversation[0] ?
                            currentConversation[0].messages.map(message =>
                                <Card className="p-3 w-75 my-1 bg-primary text-white d-flex flex-row justify-content-between">
                                    <span>{`Me: ${message}`}</span>
                                    <span className="fw-bold" style={{ cursor: 'pointer' }}>X</span>
                                </Card>)
                            : ''}
                    </div>

                    {/* Sending a message form */}

                    <Form className="mt-3" onSubmit={handleSubmit}>
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
            {isDesktop &&

                <div className="d-flex flex-column pt-4 ps-5 mb-3" style={desktopStyles}>
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

                    <Form className="mt-2" onSubmit={handleSubmit}>
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


            {/* Xl Desktops Styling */}
            {isLargeDesktop &&

                <div className="d-flex flex-column pt-4" style={largeDesktopStyles}>
                    <h1>Current Conversation</h1>

                    <p> <span>Participants:</span> {currentConversation.length ? currentConversation[0].recipients.map((conv, index) => {
                        if (index !== currentConversation[0].recipients.length - 1) {
                            return <span>{conv.name}, </span>
                        } else {
                            return <span>{conv.name}</span>
                        }
                    }) : ''}</p>


                    {/* Messages */}
                    <div className="flex-grow-1 overflow-auto">
                        {currentConversation[0] ?
                            currentConversation[0].messages.map(message =>
                                <Card className="p-3 w-100 my-1 bg-primary text-white d-flex flex-row justify-content-between">
                                    <span>{`Me: ${message}`}</span>
                                    <span className="fw-bold bg-danger" style={{ cursor: 'pointer' }} onClick={removeMessage}>X</span>
                                </Card>)
                            : ''}
                    </div>

                    <Form onSubmit={handleSubmit}>
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
