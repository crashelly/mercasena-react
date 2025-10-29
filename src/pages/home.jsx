import { Navbar } from "@components/shop/navbar"
import { ComercialBanner, ProductCategories, Products } from "@features/shop/products/"
import Footer from "@components/footer"
import { useEffect, useState } from "react"
import "./shop.css"
import {
  InfoModal
} from "@components/modals"
// import Spline from '@splinetool/react-spline';


const Home = () => {

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

export default Home