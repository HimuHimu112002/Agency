import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllHeading from './AllHeading'
import AllSubHeading from './AllSubHeading'
import GetStartedButton from './GetStartedButton'

const HeroSection = () => {
    let style ={
        fontSize: "60px",
        fontWeight: "700",
        lineHeight: "80px",
        fontStyle: "normal",
        marginTop: "90px",
        
    }
    let heading = "Managing business payments has never been easier";
    let subHeading = "End-to-end payments and financial management in a single solution. Meet the right platform to help realize."
    
  return (
    <section className='hero-bg_img'>

        <Container>
            <Row>
                <Col md="6">
                    <AllHeading style={style} title={heading}></AllHeading>
                    <AllSubHeading sub={subHeading}></AllSubHeading>
                    <GetStartedButton></GetStartedButton>
                </Col>
                <Col md="6">
                    <img className='mt-5 w-100' src='image/heroRightImg.png'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection