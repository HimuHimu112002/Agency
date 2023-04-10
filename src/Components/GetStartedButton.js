import React from 'react'
import Button from 'react-bootstrap/Button';
const GetStartedButton = (props) => {
  return (
    <Button style={props.style} className='get-started_button' variant="primary">Get Started</Button>
  )
}
export default GetStartedButton