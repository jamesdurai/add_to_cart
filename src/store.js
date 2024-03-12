import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import enableSlice from './cartSlice'
import myOrderSlice from "../react-router/myOrderSlice";

export const store = configureStore({
    reducer:{
        cart : cartSlice,
        enable : enableSlice,
        myOrder : myOrderSlice
    }
})


// const store = configureStore({
//     reducer:{
//         cart : cartSlice,
//         enable : enableSlice
//     }
// })