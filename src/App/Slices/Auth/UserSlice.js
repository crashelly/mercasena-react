import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    globalData: {
        isLoggedIn: false,
        name: "",
        email: "",
        token: "",
        sessionToken: "",
        orderDetails: {}

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
        setUserInfo: (state, action) => {
            state.globalData.token = action.payload.token
            state.globalData.email = action.payload.email
            state.globalData.name = action.payload.name
            state.globalData.sessionToken = action.payload.sessionToken
        },
        setOrderDetails: (state, action) => {
            state.globalData.orderDetails = action.payload

            console.log("guardando la informacion del pedido")
            // console.log(state.globalData.orderDetails)
        }

    }

})
// exportacion de todas las funcionalidades
export const {
    setLoggedUser,
    setUserInfo,
    setOrderDetails
} = UserSlice.actions

export default UserSlice.reducer
