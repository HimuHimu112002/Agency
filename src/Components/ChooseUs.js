import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ChooseUsCard from './ChooseUsCard'

const ChooseUs = () => {

    let style ={
        backgroundColor: "#F3F7FA",
       
    }
    let paddin ={
        paddingTop: "100px",
        paddingBottom: "100px"
    }
  return (
    <Container style={style} className='mb-5 px-5 chooseUs rounded'>
        <Row style={paddin} className='pb-3 '>
            <h4 className='text-center'>Why Financy</h4>
            <h1 className='text-center py-3'>Why Choose Us</h1>
            <Col md="6">
                <ChooseUsCard></ChooseUsCard>
            </Col>
            <Col md="6">
                <ChooseUsCard></ChooseUsCard>
            </Col>
        </Row>
        <Row style={paddin}>
            <Col md="6">
                <ChooseUsCard></ChooseUsCard>
            </Col>
            <Col md="6">
                <ChooseUsCard></ChooseUsCard>
            </Col>
        </Row>
    </Container>
  )
}

export default ChooseUs