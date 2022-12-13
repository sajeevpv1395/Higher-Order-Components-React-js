import React from 'react'


const ClickCounter = (props) => {
   

    return (
        <>
        <button onClick={props.increment}>{props.name} Clicked {props.count} times</button>
        </>
    )
}

export default ClickCounter