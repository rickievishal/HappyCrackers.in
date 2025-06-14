import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "CartDetails",
    initialState: {
        cartItems: [],
        totalItems: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const product = { ...action.payload };
            console.log(product, "hello");
            const existingItem = state.cartItems.find((p) => p.productId === product.productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                product.quantity = 1;
                state.cartItems.push(product);
                state.totalItems += 1;
            }

            
        },

       decrementQuantity: (state, action) => {
            const item = state.cartItems.find(p => p.productId === action.payload.productId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalItems = Math.max(state.totalItems - 1, 1);
            }
            },


        removeFromCart: (state, action) => {
            // Find the product to remove
            const item = state.cartItems.find(p => p.productId === action.payload.productId);

            if (item) {
                // Remove the product completely from cartItems
                state.cartItems = state.cartItems.filter(p => p.productId !== action.payload.productId);

                // Subtract the removed quantity from totalItems but not below 0
                state.totalItems = Math.max(state.totalItems - item.quantity, 0);
            }
            },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find(p => p.productId === action.payload.productId);
            if (item) {
                item.quantity += 1;
                state.totalItems += 1;
            }
            }
    }
});


export const { addToCart, decrementQuantity, removeFromCart,incrementQuantity } = cartSlice.actions;//export actions


export default cartSlice.reducer;
