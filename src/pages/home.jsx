import { Navbar } from "@components/shop/navbar"
import { ComercialBanner, ProductCategories, Products } from "@features/shop/products/"
import Footer from "@components/footer"
import { setUserInfo,setLoggedUser } from "@slices/auth/userSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import "./shop.css"
import {
    InfoModal
} from "@components/modals"
// import Spline from '@splinetool/react-spline';


const Home = () => {
    setGlobalUserInfo();
    return (
        <div className="mainContent">
            <Navbar />


            {/* Contenido de la aplicacion  banner, categorias  y productos*/}
            <ComercialBanner />
            {/* <Spline
        scene="https://prod.spline.design/vkrLkXhonY39l8kR/scene.splinecode" 
      /> */}


            {/* categorias de los productos */}
            <ProductCategories />

            <Products />
            <Footer />
            {/* todos los productos por cartas  */}
            {/* <Body/> */}
            {/* seccion de todo los modales */}
            <InfoModal />

        </div>
    )
}

const setGlobalUserInfo = (user) => {
    const dispatch = useDispatch();
    const data = {
        isLoggedIn: true,
        token :window.localStorage.getItem("token"),
        name :window.localStorage.getItem("userName"),
        sessionToken :window.localStorage.getItem("sessionToken"),
        email: window.localStorage.getItem("email")
    }
    console.log(data)
    dispatch(setLoggedUser());
    dispatch(setUserInfo(data));

}
export default Home