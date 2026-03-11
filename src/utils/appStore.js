import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

const appStore = configureStore({
    //appstore has its big reducer which is called root reducer and it has many small reducers of other slices
    reducer:{
        cart: cartReducer

    }
    

})
export default appStore