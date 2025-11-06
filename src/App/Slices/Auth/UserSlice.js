import { createSlice } from "@reduxjs/toolkit";
import BillCard from "../../../Components/modals/collection/MyBills/BillCard";

const initialState = {
    globalData: {
        isLoggedIn: false,
        name: "",
        email: "",
        token: "",
        sessionToken: "",
        orderDetails: {},
        BillS : [],
        filteredBills : []

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
        },
        setBills  : (state , action) => {
            state.globalData.BillS = action.payload
        },
        setFilteredBills  : (state , action) => {
            state.globalData.filteredBills= action.payload
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
