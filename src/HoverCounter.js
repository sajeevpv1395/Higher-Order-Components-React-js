import React,{useState} from 'react'


const HoverCounter = (props) => {
    

    return (
        <>
        <h2 onMouseOver={props.increment}>{props.name} Hoverd {props.count} times</h2>
        </>
    )
}

export default HoverCounter