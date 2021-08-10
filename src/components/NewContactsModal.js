import React, { useRef, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactProvider';

const NewContactsModal = ({ onClose, modalStatus }) => {

    const idRef = useRef('');
    const nameRef = useRef('');
    const { contacts } = useContacts();
    const { createContacts } = useContacts();


    // Remove duplicates from objects of contacts
    const removeDuplicates = () => {
        const contactExists = contacts.some(el => el.id === idRef.current.value || el.name === nameRef.current.value);

        if (!contactExists) {
            createContacts(idRef.current.value, nameRef.current.value);
        } else {
            alert('This person is already in your contact list!');
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        removeDuplicates();
        onClose();
    }

    return (
        <>
            <Modal show={modalStatus} onHide={onClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Create Contact</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form className="mx-auto" onSubmit={handleSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" ref={idRef} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" ref={nameRef} />
                        </Form.Group>


                        <Form.Group>
                            <Button variant="primary" type="submit" className="me-2">
                                Create
                            </Button>
                        </Form.Group>

                    </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default NewContactsModal
