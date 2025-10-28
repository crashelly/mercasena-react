import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    isMobileDevice: false,
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
        }
    }

})
// exportacion de todas las funcionalidades
export const {
    setMobileDevice,
    setLoggedUser
} = AppSlice.actions

export default AppSlice.reducer
