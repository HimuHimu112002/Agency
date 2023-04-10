import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllHeading from './AllHeading'
import AllSubHeading from './AllSubHeading'
const Testomonial = () => {
    let style ={
        fontSize: "60px",
        fontWeight: "700",
        lineHeight: "80px",
        fontStyle: "normal",
        marginTop: "20px",
        
    }

    let heading = "Save Time Managing Social Media For Your Business";
    let Subheading = "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.Believing neglected so so allowance existence departure in. In design active temper be uneasy. "
  return (
    <Container className='py-5'>
        <Row>
            <Col md="6">
                <AllHeading style={style} title={heading}></AllHeading>
                <AllSubHeading sub={Subheading}/>
            </Col>
            <Col md="6">
                <p className='text-center'>Testimonials</p>
                <h3 className='text-center pb-3'>Check what our clients are saying</h3>
                <img className='w-100' src='image/testomonial.png'/>
            </Col>

        </Row>
    </Container>
  )
}

export default Testomonial