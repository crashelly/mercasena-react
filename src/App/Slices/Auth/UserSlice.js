import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    globalData: {
        isLoggedIn: false,
        name : "",
        email : "",
        token : "",
        sessionToken : "",
        
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
            state.globalData.isLoggedIn = true
        },
        setUserInfo : (state, action) => {
            state.globalData.token = action.payload.token
            state.globalData.email = action.payload.email
            state.globalData.name = action.payload.name
            state.globalData.sessionToken = action.payload.sessionToken
        }
    }

})
// exportacion de todas las funcionalidades
export const {
    setLoggedUser,
    setUserInfo
} = UserSlice.actions

export default UserSlice.reducer
