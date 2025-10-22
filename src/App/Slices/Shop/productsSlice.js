import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    cachedProducts: [],
    allProducts: [],
    measurements: []
};

const ProductsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        /**
         * Reducer para agregar todos los productos
         
         */
        addAllProducts: (state, action) => {
            state.allProducts = action.payload
        },

        addProductsToCache: (state, action) => {
            state.cachedProducts = action.payload
        },
        /**
        * Reducer para agregar un producto al cachedProducts
        */
        addProduct: (state, action) => {
            state.cachedProducts.push(action.payload)
        },

        /**
         * agrega las categorias al sistema
         */
        addCategories: (state, action) => {
            state.categories = action.payload
        }
    }
})
// exportacion de todas las funcionalidades
export const {
    addAllProducts,
    addCategories,
    addProductsToCache
} = ProductsSlice.actions

export default ProductsSlice.reducer
