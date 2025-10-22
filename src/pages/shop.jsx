import { Navbar } from "@components/shop/navbar"
import { ComercialBanner, ProductCategories, Products } from "@features/shop/products/"
import "./shop.css"

const Shop = () => {
    return (
        <div>
            <Navbar />


            {/* Contenido de la aplicacion  banner, categorias  y productos*/}
            <ComercialBanner />

            {/* categorias de los productos */}
            <ProductCategories />

            <Products />
            {/* todos los productos por cartas  */}
            {/* <Body/> */}
        </div>
    )
}

export default Shop