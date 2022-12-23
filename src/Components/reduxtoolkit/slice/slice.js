import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    overelPrice: 7300
}

const counterSlice = createSlice({
    name: 'Counter',
    initialState,

    reducers: {
        increment: (state) => {
            state.count -= 1
            state.overelPrice = 7300 * state.count
        },
        decrement: (state) => {
            state.count += 1
            state.overelPrice = 7300 * state.count
        },
        price: (state) => {
            state.count += 7300
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }

    }

})

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

export const { increment, decrement, price, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer