import { configureStore } from "@reduxjs/toolkit";
import thaliReducer from "./thaliSlice";

const store = configureStore({
    reducer:{
        thalislice:thaliReducer,
    },
})

export default store;