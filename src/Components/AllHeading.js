import React from 'react'

const AllHeading = (props) => {

  let style ={
    fontSize: "60px",
    fontWeight: "700",
    lineHeight: "80px",
    fontStyle: "normal",
    marginTop: "80px",
    //width: "700px"
  }
  return (
    <div>
        <h1 style={props.style}>{props.title}</h1>
    </div>
  )
}

export default AllHeading