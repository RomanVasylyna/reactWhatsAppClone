import React, { useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const NewContactsModal = ({ onClose, modalStatus }) => {

    const idRef = useRef('');
    const nameRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();

        // createContact(idRef.current.value, nameRef.current.value);
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
