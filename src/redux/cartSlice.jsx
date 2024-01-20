import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: [],
        totalQuantity : 0,
        totalAmount : 0
    },
    reducers:{
        addItem : (state, action) => {
            const { id, title, price } = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            if(existingItem){
                existingItem.quantity += 1;
            } else{
                state.items.push({id, thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg', title, price, quantity: 1})
            }
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0)
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
            console.log(state.items)
        },
        removeItem : (state, action) => {
            const { id } = action.payload
            state.items = state.items.filter(item => item.id !== id)
        },
        increaseQuantity: (state, action) => {
            const { id } = action.payload
            const item = state.items.find(item => item.id === id)
            if(item){
                item.quantity += 1
            }
        },
        decreaseQuantity: (state, action) => {
            const {id} = action.payload
            const item = state.items.find(item => item.id === id)
            if(item && item.quantity > 1){
                item.quantity -= 1
            }
        },
    }
});

export const selectCart = state => state.cart
export const selectTotalQuantity = state => selectCart(state).totalQuantity
export const selectTotalAmount = state => selectCart(state).totalAmount
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer