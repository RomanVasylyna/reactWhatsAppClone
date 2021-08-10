import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactProvider';
import { useConversation } from '../contexts/ConversationProvider';

const NewConversationsModal = ({ onClose, modalStatus }) => {

    // State that defines whether the check
    const [selectedContactId, setSelectedContactId] = useState([]);

    // Checking if state includes id of the value in checkbox
    const checkSelectedId = id => {
        setSelectedContactId(contacts.filter(contact => contact.id == id)[0].id);
    }

    // Contacts array from contacts context
    const { contacts } = useContacts();
    const { createConversation } = useConversation();
    const { conversations } = useConversation();

    // Remove duplicates from objects of conversations
    const removeDuplicates = () => {
        const conversationExists = conversations.some(el => el.contactID === selectedContactId);

        if (!conversationExists) {
            createConversation(selectedContactId);
        } else {
            alert('You have already started conversation with this person');
        }
    }

    // Functions that fire when form/modal is submitted
    const handleSubmit = e => {
        e.preventDefault();

        removeDuplicates();
        onClose();
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
                                    value={selectedContactId ? selectedContactId.includes(contact.id) : ''}
                                    label={contact.name}
                                    key={contact.id}
                                    onChange={() => checkSelectedId(contact.id)} />
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
