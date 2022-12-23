import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../reduxtoolkit/slice/slice.js'

export function Counters() {
    const { count, overelPrice } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                price:7.300
                <button onClick={() => dispatch(increment())} >
                    Increment
                </button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())} >
                    Decrement 
                </button>
                price: {overelPrice}
            </div>
        </div>
    )
}

export default Counters