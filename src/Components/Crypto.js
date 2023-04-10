import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllHeading from './AllHeading'
import AllSubHeading from './AllSubHeading'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Crypto = () => {
    let style ={
        backgroundColor: "#3734A9",
        padding: "60px"
    }
    let Headingstyle ={
        color: "white"
    }
    let heading = "Track your crytpo portfolio on the best way possible"
    let Subheading = "End-to-end payments and financial management in a single solution. Meet the right platform to help realize."

  return (
    <section style={style} className='mt-5'>

        <Container>
        <Row>
            <Col md="6">
                <p className='text-white'>Why Choose Us</p>
                <AllHeading style={Headingstyle}  title={heading}></AllHeading>
                <AllSubHeading style={Headingstyle} subHead={Subheading}></AllSubHeading>
            </Col>
            <Col md="6">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-white'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-white">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button className='w-100' variant="success">Success</Button>
                </Form>
            </Col>
        </Row>
        </Container>

    </section>
  )
}

export default Crypto