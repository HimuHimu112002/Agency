import React from 'react'
const AllSubHeading = (props) => {
  let style ={
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "30px",
    fontStyle: "normal",

  }
  return (
    <>
      <p style={style}>{props.sub}</p>
      <p style={props.style}>{props.subHead}</p>
    </>
  )
}

export default AllSubHeading