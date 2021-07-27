import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const Login = ({ onIdSubmit }) => {

    // React Hook for getting the input's value
    // Using useRef instead of useState is better because this way component won't
    // get re-rendered multiple times
    const idRef = useRef('');

    // useRef returns an object with a single value 'current'
    // We define what default current value is inside useRef()

    const enterId = () => {
        console.log(idRef.current.value);
    }

    // Event for submitting the form
    const formSubmit = e => {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    const createNewId = () => {
        const generatedId = uuidv4();
        idRef.current.value = generatedId;
        onIdSubmit(generatedId);
    }

    return (
        <Form className="mx-auto w-50 mt-5" onSubmit={formSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your ID</Form.Label>
                <Form.Control type="text" ref={idRef} required onKeyUp={enterId} />
            </Form.Group>


            <Form.Group>
                <Button variant="primary" type="submit" className="me-2">
                    Submit
                </Button>

                <Button variant="secondary" type="submit" onClick={createNewId}>
                    Create a New ID
                </Button>
            </Form.Group>


        </Form>
    )
}

export default Login
