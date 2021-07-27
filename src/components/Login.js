import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    
    // React Hook for getting the input's value
    const idRef = useRef('');

    const enterId = () => {
        console.log(idRef.current.value);
    }

    return (
        <Form className="mx-auto w-50 mt-5">

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your ID</Form.Label>
                <Form.Control type="text" ref={idRef} required onKeyUp={enterId}/>
            </Form.Group>


            <Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Button variant="secondary" type="submit" className="mx-2">
                    Create a New ID
                </Button>
            </Form.Group>


        </Form>
    )
}

export default Login
