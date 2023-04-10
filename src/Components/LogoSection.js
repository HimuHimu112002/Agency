import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const LogoSection = () => {
  return (
    <div>
        <Container className='py-5'>
            <Row>
                <Col>
                    <h3 className='text-center py-5'>Over 32k+ software  businesses growing with AR Shakir</h3>
                </Col>
            </Row>
            <Row>
                <Col sm="6" md="6" lg="2">
                    <img className='w-100' src='image/Group.png'/>
                </Col>
                <Col sm="6" md="6" lg="2">
                    <img className='w-100' src='image/Group (1).png'/>
                </Col>
                <Col sm="6" md="6" lg="2">
                    <img className='w-100' src='image/Group (2).png'/>
                </Col>
                <Col sm="6" md="6" lg="2">
                    <img className='w-100' src='image/Group (3).png'/>
                </Col>
                <Col sm="6" md="6" lg="2">
                    <img className='w-100' src='image/Group (4).png'/>
                </Col>
                <Col sm="6" md="6" lg="2">
                    <img className='w-100' src='image/Group (5).png'/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default LogoSection