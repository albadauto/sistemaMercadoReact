import { configureStore } from "@reduxjs/toolkit";
import { addProduct } from "./mainSlice";

export default configureStore({
    reducer:{
        addProduct: addProduct
    }
})