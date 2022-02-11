import React, { useState } from 'react';
import { Nav, Tab, Button, Modal } from 'react-bootstrap';
import Conversations from '../components/Conversations';
import Contacts from '../components/Contacts';
import NewConversationsModal from '../components/NewConversationsModal';
import NewContactsModal from '../components/NewContactsModal';
import useMediaQuery from 'react-use-media-query-hook';

const SideBar = ({ userID, onLogout, chatModal }) => {

    // Main Modal (Add Contact/Conversation etc.)
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);


    // Media Queries
    const isMobile = useMediaQuery('(max-width: 700px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 991.98px)');
    const isDesktop = useMediaQuery('(min-width: 992px) and (max-width: 1199.98px)');
    const isLargeDesktop = useMediaQuery('(min-width: 1200px)');

    const endUserSession = () => {
        onLogout('');
        localStorage.removeItem('whatsapp-clone-contacts');
        localStorage.removeItem('whatsapp-clone-conversations');
    }

    const CONVERSATIONS_KEY = 'Conversations';
    const CONTACTS_KEY = 'Contacts';

    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);


    return (
        <>

            {/* Mobile Styles */}
            {isMobile &&
                <div style={{ width: '100vw', height: '100vh', position: 'fixed' }} className="d-flex flex-column">
                    <Tab.Container activeKey={activeKey}>
                        <Nav variant="tabs" className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link eventKey={CONVERSATIONS_KEY} onClick={() => setActiveKey(CONVERSATIONS_KEY)}>
                                    Conversations
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey={CONTACTS_KEY} onClick={() => setActiveKey(CONTACTS_KEY)}>
                                    Contacts
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>

                        {/* Content Inside Tabs*/}
                        <Tab.Content className="border-end overflow-auto flex-grow-1">

                            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                                <Conversations />
                            </Tab.Pane>

                            <Tab.Pane eventKey={CONTACTS_KEY}>
                                <Contacts />
                            </Tab.Pane>

                        </Tab.Content>

                        <div className="ps-1 border-top border-end">
                            <p><strong>My id : </strong><span className="text-muted">{userID}</span></p>
                        </div>

                        <Button className="mb-1 rounded-0" onClick={handleShow}>
                            New {activeKey == CONVERSATIONS_KEY ? 'Conversation' : 'Contact'}
                        </Button>

                        <Button variant="danger rounded-0" className="mb-3" onClick={() => endUserSession()}>Logout</Button>

                    </Tab.Container>


                    {/* Add New Conversations/Contact Modal */}
                    {activeKey == CONVERSATIONS_KEY ?
                        <NewConversationsModal
                            onClose={handleClose}
                            modalStatus={showModal} />
                        :
                        <NewContactsModal
                            onClose={handleClose}
                            modalStatus={showModal} />}

                </div>
            }



            {/* Mobile Styles */}
            {isTablet &&
                <div style={{ width: '250px', height: '100vh', position: 'fixed' }} className="d-flex flex-column">
                    <Tab.Container activeKey={activeKey}>
                        <Nav variant="tabs" className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link eventKey={CONVERSATIONS_KEY} onClick={() => setActiveKey(CONVERSATIONS_KEY)}>
                                    Conversations
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey={CONTACTS_KEY} onClick={() => setActiveKey(CONTACTS_KEY)}>
                                    Contacts
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>

                        {/* Content Inside Tabs*/}
                        <Tab.Content className="border-end overflow-auto flex-grow-1">

                            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                                <Conversations />
                            </Tab.Pane>

                            <Tab.Pane eventKey={CONTACTS_KEY}>
                                <Contacts />
                            </Tab.Pane>

                        </Tab.Content>

                        <div className="ps-3 border-top border-end">
                            <p><strong>My id : </strong><span className="text-muted">{userID}</span></p>
                        </div>

                        <Button className="mb-1 rounded-0" onClick={handleShow}>
                            New {activeKey == CONVERSATIONS_KEY ? 'Conversation' : 'Contact'}
                        </Button>

                        <Button variant="danger rounded-0" className="mb-3" onClick={() => endUserSession()}>Logout</Button>

                    </Tab.Container>


                    {/* Add New Conversations/Contact Modal */}
                    {activeKey == CONVERSATIONS_KEY ?
                        <NewConversationsModal
                            onClose={handleClose}
                            modalStatus={showModal} />
                        :
                        <NewContactsModal
                            onClose={handleClose}
                            modalStatus={showModal} />}

                </div>
            }


            {/* Medium Desktop Styles */}
            {isDesktop &&
                <div style={{ width: '250px', height: '100vh', position: 'fixed' }} className="d-flex flex-column">
                    <Tab.Container activeKey={activeKey}>
                        <Nav variant="tabs" className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link eventKey={CONVERSATIONS_KEY} onClick={() => setActiveKey(CONVERSATIONS_KEY)}>
                                    Conversations
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey={CONTACTS_KEY} onClick={() => setActiveKey(CONTACTS_KEY)}>
                                    Contacts
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>

                        {/* Content Inside Tabs*/}
                        <Tab.Content className="border-end overflow-auto flex-grow-1">

                            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                                <Conversations />
                            </Tab.Pane>

                            <Tab.Pane eventKey={CONTACTS_KEY}>
                                <Contacts />
                            </Tab.Pane>

                        </Tab.Content>

                        <div className="ps-3 border-top border-end">
                            <p><strong>My id : </strong><span className="text-muted">{userID}</span></p>
                        </div>

                        <Button className="mb-1 rounded-0" onClick={handleShow}>
                            New {activeKey == CONVERSATIONS_KEY ? 'Conversation' : 'Contact'}
                        </Button>

                        <Button variant="danger rounded-0" className="mb-3" onClick={() => endUserSession()}>Logout</Button>

                    </Tab.Container>


                    {/* Add New Conversations/Contact Modal */}
                    {activeKey == CONVERSATIONS_KEY ?
                        <NewConversationsModal
                            onClose={handleClose}
                            modalStatus={showModal} />
                        :
                        <NewContactsModal
                            onClose={handleClose}
                            modalStatus={showModal} />}

                </div>
            }


            {/* Big screens Styles */}
            {isLargeDesktop &&
                <div style={{ width: '250px', height: '100vh', position: 'fixed' }} className="d-flex flex-column">
                    <Tab.Container activeKey={activeKey}>
                        <Nav variant="tabs" className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link eventKey={CONVERSATIONS_KEY} onClick={() => setActiveKey(CONVERSATIONS_KEY)}>
                                    Conversations
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey={CONTACTS_KEY} onClick={() => setActiveKey(CONTACTS_KEY)}>
                                    Contacts
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>

                        {/* Content Inside Tabs*/}
                        <Tab.Content className="border-end overflow-auto flex-grow-1">

                            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                                <Conversations />
                            </Tab.Pane>

                            <Tab.Pane eventKey={CONTACTS_KEY}>
                                <Contacts />
                            </Tab.Pane>

                        </Tab.Content>

                        <div className="ps-3 border-top border-end">
                            <p><strong>My id : </strong><span className="text-muted">{userID}</span></p>
                        </div>

                        <Button className="mb-1 rounded-0" onClick={handleShow}>
                            New {activeKey == CONVERSATIONS_KEY ? 'Conversation' : 'Contact'}
                        </Button>

                        <Button variant="danger rounded-0" className="mb-3" onClick={() => endUserSession()}>Logout</Button>

                    </Tab.Container>


                    {/* Add New Conversations/Contact Modal */}
                    {activeKey == CONVERSATIONS_KEY ?
                        <NewConversationsModal
                            onClose={handleClose}
                            modalStatus={showModal} />
                        :
                        <NewContactsModal
                            onClose={handleClose}
                            modalStatus={showModal} />}

                </div>
            }


        </>
    )
}

export default SideBar
