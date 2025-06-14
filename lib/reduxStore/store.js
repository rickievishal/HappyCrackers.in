import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers";  // Import the default reducer

const store = configureStore({
    reducer: {
        cartAction: cartReducer  // Make sure to use the same key here
    }
});

const useCartDetails = () => {
    return store.getState().cartAction;
}

export { store, useCartDetails};