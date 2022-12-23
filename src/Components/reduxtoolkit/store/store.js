import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../slice/slice.js"

export default configureStore({
    reducer: {
        counter:counterSlice
    }
})