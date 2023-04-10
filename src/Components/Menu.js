import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Container, Row,Button,Nav,Navbar,NavDropdown } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

const Menu = () => {
    const [show, setShow] = useState(false);
    const [Registrationshow, setRegistrationshow] = useState(false);

    const handleClose = () => setShow(false);
    let handleShow=()=>{
        setShow(true)
        setRegistrationshow(false)
    }

    const ReghandleClose = () => setRegistrationshow(false);
    let ReghandleShow=()=>{
        setShow(false)
        setRegistrationshow(true)
    }

  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <Navbar expand="lg">
                        <Container fluid className='mt-4'>
                            <img src='image/BWFC.png'/>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="m-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <NavDropdown className='menu-product text-white' title="Product" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Samsung</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">
                                    Nokia
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Realme
                                </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown className='text-white' title="Template" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Samsung</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">
                                    Nokia
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Realme
                                </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="#action2">Blog</Nav.Link>
                                <Nav.Link href="#action2">Pricing</Nav.Link>
                                

                            </Nav>
                            
                            <Button onClick={handleShow} className='shadow menu-button_left' variant="primary">Sign In</Button>
                            <Button className='shadow' variant="primary">Start Free</Button>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>

            {/* Sign in modal ========================*/}
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >

            <Modal.Header className='text-center' closeButton>
                <Modal.Title >Sign In</Modal.Title>
            </Modal.Header>

                <Modal.Body>
                    <Form className='py-5'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            Don't share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button className='w-100 mb-2' variant="primary">Sign-In</Button>
                        <Button onClick={handleClose} className='w-100' variant="danger">Cancel</Button>
                        <p onClick={ReghandleShow} className='text-center mt-3 cursorClick'>You don't have an account</p>
                    </Form>
                </Modal.Body>

            </Modal>

            {/* Sign up modal ========================*/}
            <Modal
            show={Registrationshow}
            onHide={ReghandleClose}
            backdrop="static"
            keyboard={false}
            >

            <Modal.Header className='text-center' closeButton>
                <Modal.Title >Sign-Up</Modal.Title>
            </Modal.Header>

                <Modal.Body>
                    <Form className='py-5'>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name Here</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name here" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            Don't share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button className='w-100 mb-2' variant="primary">Sign-Up</Button>
                        <Button onClick={ReghandleClose} className='w-100' variant="danger">Cancel</Button>
                        <p onClick={handleShow} className='text-center mt-3 cursorClick'>You have an account</p>
                    </Form>
                </Modal.Body>

            </Modal>

        </Container>
    </div>
  )
}

export default Menu