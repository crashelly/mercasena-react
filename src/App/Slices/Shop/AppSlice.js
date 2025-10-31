import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    isMobileDevice: false,
    modals: {
        showMyAccount: false,
        showMyOrders: false,
        showMyBills: false,
        showLogout: false,
    },

};

const AppSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        /**
         * Reducer para agregar todos los productos
         
         */
        setMobileDevice: (state, action) => {
            state.isMobileDevice = action.payload
        },
        setLoggedUser: (state, action) => {
            state.isLogged = action.payload
        },
        setShowMyAccount: (state, action) => {
            state.showMyAccount = action.payload
        },
        setShowMyOrders: (state, action) => {
            state.showMyOrders = action.payload
        },
        setShowMyBills: (state, action) => {
            state.showMyBills = action.payload
        },
        setShowLogout: (state, action) => {
            state.showLogout = action.payload
        },
    }

})
// exportacion de todas las funcionalidades
export const {
    setMobileDevice,
    setLoggedUser
} = AppSlice.actions

export default AppSlice.reducer
