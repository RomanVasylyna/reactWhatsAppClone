import React, { useRef, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactProvider';

const NewConversationsModal = ({ onClose, modalStatus }) => {

    const idRef = useRef('');
    const nameRef = useRef('');
    
    // State that defines whether the check
    // const [selectedContactId, setSelectedContactId] = useState(false);

    const { contacts } = useContacts();

    const handleSubmit = e => {
        e.preventDefault();

        // createConversation(idRef.current.value, nameRef.current.value);
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
                                <Form.Check type="checkbox" value={contact.id} label={contact.name} key={contact.id}></Form.Check>
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
