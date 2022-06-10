import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        products: [],
        quantity: 0,
        total:0
    },
    reducers:{
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) =>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }

})
const cartReducer =  cartSlice.reducer;
export const {addProduct, reset} = cartSlice.actions;
export default cartReducer