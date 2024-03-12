import { createSlice } from "@reduxjs/toolkit";

let myOrderSlice = createSlice({
    name:"myOrder",
    initialState : [],
    reducers : {
        add(state,action){
            state.push( action.payload )
        },
        removeItem(state,action){
           return state.filter( productFromStore => productFromStore.id !== action.payload    )
        }
    }
})

export const {add, removeItem} = myOrderSlice.actions ;

export default myOrderSlice.reducer ;