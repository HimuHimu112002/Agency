import React from 'react'

const List = (props) => {

    let style ={
        color: "white"
    }
  return (
    <div>
        <h3 style={style}>{props.heading}</h3>
        <ul>
            <li>
                <a className='text-white' href='#'>{props.item.about}</a>
            </li>
            <li>
                <a className='text-white' href='#'>{props.item.careers}</a>
            </li>
            <li>
                <a className='text-white' href='#'>{props.item.blog}</a>
            </li>
            <li>
                <a className='text-white' href='#'>{props.item.prici}</a>
            </li>
        </ul>
    </div>
  )
}

export default List