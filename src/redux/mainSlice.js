import { createSlice } from "@reduxjs/toolkit"; 


export const slice = createSlice({
    name:'main',
    initialState:{
        produto: '',

    },
    reducers:{
        addProduct(state, { payload }){
            return {...state, produto: payload}
        }
    }
})

export const { addProduct } = slice.actions;

export default slice.reducer;