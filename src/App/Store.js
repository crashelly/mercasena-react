import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "@slices/Shop/productsSlice"
export const Store = configureStore({
    reducer: {
        products: ProductsSlice
    },
});