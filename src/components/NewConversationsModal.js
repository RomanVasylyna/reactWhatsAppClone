import React, { useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const NewConversationsModal = ({ onClose, modalStatus }) => {



    return (
        <>
        <Modal show={modalStatus} onHide={onClose}>

            <Modal.Header closeButton>
                <Modal.Title>Add Conversation</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form className="mx-auto">

                    <Form.Group className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"/>
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

export default NewConversationsModal
