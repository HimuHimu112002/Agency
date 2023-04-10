import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllHeading from './AllHeading'
import AllSubHeading from './AllSubHeading'
import GetStartedButton from './GetStartedButton'

const Financy = () => {
    let style ={
        fontSize: "60px",
        fontWeight: "700",
        lineHeight: "80px",
        fontStyle: "normal",
        marginTop: "90px",
        
    }
    let heading = "All payments arelinked to your Financy account"
    let subHeading = "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."

  return (
    <Container>
        <Row>
            <Col className='ff' md="6">
                <img className='mt-5 w-100 ' src='image/account.png'/>
            </Col>
            <Col md="6">
                <AllHeading style={style} title={heading}></AllHeading>
                <AllSubHeading sub={subHeading}></AllSubHeading>
                <GetStartedButton></GetStartedButton>
            </Col>
        </Row>
    </Container>
  )
}

export default Financy