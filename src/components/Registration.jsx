import React from 'react'
import { Form, Button, Col, FormText} from "react-bootstrap";
import './Registration.css'

const Registration = () => {

    return(
            <Form className= 'registraion-form'>
                
                <Form.Group controlId="formBasicName" className='form-group'>
                    <Form.Label><h3>NAME</h3></Form.Label>
                    <Form.Control className='text-field'  type="text" placeholder="Enter first Name" />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label><h3>SURNAME</h3></Form.Label>
                    <Form.Control className='text-field'  type="text" placeholder="Enter last name" />
                </Form.Group>
            
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><h3>Email address</h3></Form.Label>
                    <Form.Control className='text-field'  type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label><h3>Password</h3></Form.Label>
                    <Form.Control type="password" placeholder="Password" className='text-field' />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label><h3>Confirm Password</h3></Form.Label>
                    <Form.Control type="password" placeholder="Re-enter Password" className='text-field' />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
 

    )

}

export default Registration
