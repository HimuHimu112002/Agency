import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllHeading from './AllHeading'
import GetStartedButton from './GetStartedButton'

const Residence = () => {

    let style = {
        fontSize: "20px",
        fontWeight: "500",
        fontStyle: "normal",
        padding:"30px"
    }

    let button = {
        marginTop: "30px"
    }

    let heading = "And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help."
  return (
    <Container className='py-5'>
        <Row className='border shadow rounded'>
            <Col md="9">
                <AllHeading style={style} title={heading}></AllHeading>
            </Col>
            <Col md="3">
                <GetStartedButton style={button}></GetStartedButton>
            </Col>
        </Row>
    </Container>
  )
}

export default Residence