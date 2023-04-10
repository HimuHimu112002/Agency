import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllSubHeading from './AllSubHeading'
import List from './List'
import itemThreeData from './FooterData'

const Footer = () => {
    let style={
        color: "white"
    }

    let item = itemThreeData.item
    let itemTwo = itemThreeData.itemTwoData
    let itemThree = itemThreeData;
    // footer er Footerdata guli FooterData Components theke astese

    let Subheading = "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
  return (
    <div className='bg-black'>
        <Container>
            <Row className='py-5'>
                <Col md="6">
                    <h1 className='text-white'>BWFC</h1>
                    <AllSubHeading style={style} subHead={Subheading}></AllSubHeading>
                </Col>
                <Col md="2">
                    <List heading="Company" item={{...item}}></List>
                </Col>
                <Col md="2">
                    <List heading="Product" item={{...itemTwo}}></List>
                </Col>
                <Col md="2">
                    <List heading="Resources" item={{...itemThree}}></List>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer