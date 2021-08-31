import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { isDOMComponent } from 'react-dom/test-utils';
import { useContacts } from '../contexts/ContactProvider';
import { useConversation } from '../contexts/ConversationProvider';

const NewConversationsModal = ({ onClose, modalStatus }) => {

    const [selectedContactIds, setSelectedContactIds] = useState([]);

    // Upon onchange event id from checkbox gets added to the state
    const checkSelectedIds = (id) => {
        if (!selectedContactIds.includes(id)) {
            setSelectedContactIds(ids => [...ids, id]);
        } else {
            setSelectedContactIds(selectedContactIds.filter(el => el != id));
        }
    }


    // Contacts array from contacts context
    const { contacts } = useContacts();
    const { createConversation } = useConversation();
    const { conversations } = useConversation();

    // Functions that fire when form/modal is submitted
    const handleSubmit = e => {
        e.preventDefault();

        createConversation(selectedContactIds);
        onClose();
        setSelectedContactIds([]); //Clear State
    }

    return (
        <>
            <Modal show={modalStatus} onHide={onClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Create Conversation</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form className="mx-auto" onSubmit={handleSubmit}>
                        {contacts.length ? contacts.map(contact =>
                            <Form.Group>
                                <Form.Check
                                    type="checkbox"
                                    value={selectedContactIds.includes(contact.id)}
                                    label={contact.name}
                                    key={contact.id}
                                    onChange={() => checkSelectedIds(contact.id)} />
                            </Form.Group>
                        ) :
                            <p>Currently you have no contacts. Please add someone to contact list first.</p>}

                        {contacts.length ? <Button type="submit" className="mt-2">Start Conversation</Button> : ''}
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default NewConversationsModal
