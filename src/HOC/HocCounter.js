import React,{useState} from 'react'

const UpdatedComponent = OriginalComponent => {
    function NewComponent (props) {

        const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }
        return (

            <OriginalComponent count={count} increment={increment} {...props}/>

        )
    }
    return NewComponent
}

export default UpdatedComponent