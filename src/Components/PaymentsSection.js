import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllHeading from './AllHeading'
import AllSubHeading from './AllSubHeading'
import GetStartedButton from './GetStartedButton'

const PaymentsSection = () => {
    let style ={
        fontSize: "60px",
        fontWeight: "700",
        lineHeight: "80px",
        fontStyle: "normal",
        marginTop: "50px",
        
    }
    let heading = "Receive paymentsquickly from anywhere"
    let subHeading = "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    
  return (

    <Container className='py-5'>
        <Row>
            
            <Col md="6">
                <AllHeading style={style} title={heading}></AllHeading>
                <AllSubHeading sub={subHeading}></AllSubHeading>
                <GetStartedButton></GetStartedButton>
            </Col>
            <Col className='ff' md="6">
                <img className='mt-5 w-100 ' src='image/payments.png'/>
            </Col>
        </Row>
    </Container>
   

  )
}

export default PaymentsSection