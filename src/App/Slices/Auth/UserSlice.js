import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: {
        name : "",
        email : "",
        token : "",
        
    },
};

const UserSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        /**
         * Reducer para agregar todos los productos
         
         */
        setLoggedUser: (state, action) => {
            state.isLoggedIn = true
        },
    }

})
// exportacion de todas las funcionalidades
export const {
    setLoggedUser
} = UserSlice.actions

export default UserSlice.reducer
