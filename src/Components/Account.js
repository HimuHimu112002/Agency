import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllHeading from './AllHeading'
import AllSubHeading from './AllSubHeading'
import GetStartedButton from './GetStartedButton'

const Account = () => {
    let style ={
        fontSize: "60px",
        fontWeight: "700",
        lineHeight: "80px",
        fontStyle: "normal",
        marginTop: "20px",
        
    }
    let heading = "All payments are linked to your Financy account"
    let Subheading = "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
  return (
    <Container className='py-5'>
        <Row>
            <Col md="6">
                <AllHeading style={style} title={heading}></AllHeading>
                <AllSubHeading sub={Subheading}></AllSubHeading>
                <GetStartedButton></GetStartedButton>
            </Col>
            <Col md="6">
                <img className='w-100' src='image/AccountTwo.png'/>
            </Col>
        </Row>
    </Container>
  )
}

export default Account