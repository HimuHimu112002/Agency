import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllHeading from './AllHeading'
import AllSubHeading from './AllSubHeading';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const PaymentsForm = () => {
    let style ={
        fontStyle: "normal",
        marginTop: "50px",
        
    }
    let bg ={ 
        backgroundColor: "#F3F7FA",
        padding: "20px 50px",
        marginBottom: "20px",
    }
    let heading = "Receive payments quickly from anywhere";
    let subHeading = "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. ";

    

  return (
    <Container className='mt-5' style={bg}>
        <Row>
            <Col md="8">
                <AllHeading style={style} title={heading}></AllHeading>
                <AllSubHeading sub={subHeading}></AllSubHeading>
            </Col>
            <Col style={style} md="4">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button className='w-100' variant="success">Success</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default PaymentsForm