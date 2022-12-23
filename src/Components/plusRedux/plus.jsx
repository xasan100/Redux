import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Plus = () => {

    const dispatch=useDispatch()
    const { counter } = useSelector((state)=> state)

    console.log(counter,'ali');
    const toggeleCounter = () => {
        
    }

    const incrementHandle = () => dispatch({ type: 'increment' });
    const decrementHandle = () => dispatch({ type: 'decrement' });
    return (
        <div>
            <h1>Redux Counter</h1>
            <h1>Counter {counter}</h1>
            <button onClick={toggeleCounter}>counter</button>
            <div>
                <button onClick={incrementHandle}>increment</button> 
                <button onClick={decrementHandle}>decremnt</button>
            </div>
        </div>

  )
}

export default Plus