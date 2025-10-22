import { useState, useEffect } from "react"
import { CONFIG } from "@config/app"

const Products = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    // consultando a la API
    useEffect(() => {
        fetch(CONFIG.API.URL.endpoints.products.getAll())
            .then(res => res.json())
            .then(res => {
                setProducts(res)
                setLoading(false)
            })
    }, [])

    if (isLoading || products.length == 0) {
        return (
            <div className="w-full h-80">

                <div className=" align-middle mx-auto mt-10 w-20 h-20 border-4 border-t-green-500 border-gray-300 rounded-full animate-spin"></div>
            </div>
        )

    }
    return (
        <>
            <section className="bg-transparent py-12">
                <div className="container mx-auto px-4">
                    {/* <!-- grid  de productos--> */}
                    <div id="products-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                        {
                            products.map((product, index) => (
                                <ProductCard
                                    key={"prod" + product.id + "Card"}
                                    id={product.id ?? 0}
                                    subCategory={product.subCategoria ?? "Sin categoria"}
                                    price={product.precio ?? 0}
                                    name={product.nombre ?? "Sin nombre"}
                                    quantity={product.cantidad ?? 0}
                                    stock={product.existencias ?? 0}
                                    state={product.estado ?? "Sin stock"}
                                    stateID={product.estadoID ?? 1}
                                    imageUrl={product.rutaImagen ?? ""}
                                />
                            ))
                            // products.map((product) => {
                            //     console.log(product.nombre)
                            // })
                        }
                    </div>
                </div>
            </section >
        </>
    )
}

const ProductCard = ({ imageUrl, id, price, name, subCategory, state, stateID, quantity, stock, measurement }) => {
    console.log("renderizando " + name);
    // condfiguracion de los estaods de los proiductos
    let productState = '';
    if (stateID == 6) {
        productState = <div className="badge badge-warning text-white hover:text-red-400">{state} </div>;
    } else if(stateID == 5){ 
        productState = <div class="badge badge-error text-white hover:text-yellow-800 hover:animate-bounce hover:animate-duration-[1400ms] hover:animate-ease-out">{state} </div>;
    }

    return (
        <>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-110  transform  duration-300 flex flex-col w-full max-w-xs">
                {/* <!-- Product Image Container --> */}
                <div className="relative w-full h-48 bg-gray-100 rounded-t-2xl overflow-hidden">
                    {/* <!-- Gray rounded square --> */}
                    <div className="absolute inset-0 m-4 bg-gray-200 rounded-lg flex items-center justify-center">
                        {/* <!-- Product Image (centered within the gray square) --> */}
                        <img id={`img${id}`}
                            className={
                                stateID == 5 
                                    ? "w-full h-full object-contain p-2 opacity-50 hover:animate-pulse hover:animate-duration-[1400ms] hover:animate-ease-linear"
                                    : "w-full h-full object-contain p-2"
                            }   src={imageUrl} alt={name} />
                    </div>
                </div>

                {/* <!-- Product Info --> */}
                <div className="p-4 flex-grow">
                    <div className="flex justify-between items-start">
                        {/* <!-- Price -->  ${web.addPuntuaction(producto.precio)}   */}
                        <span className="text-lg font-bold text-red-500">$ {price} </span>


                    </div>
                    {/* <!-- Red horizontal line --> */}
                    <div className="border-t border-red-500 my-2"></div>

                    {/* <!-- Product Name --> !acuerde de poner la medida singular de cada producto pendejo searchSingularMeasurement(producto.medidaVenta) */}
                    <h3 className="text-lg font-medium mt-1 text-gray-800">{name} {subCategory} x ${quantity} {measurement}</h3>

                    {/* <!-- Unit --> */}
                    <p className="text-gray-500 text-sm" id="unit${producto.id}" >{measurement} </p>


                    {/* renderizado condicional del estado del producto */}
                    {/* <!--product state --> */}
                    <div id="productStateContainer">
                        {productState}
                    </div>

                    {/*  FIN DEL RENDERIZADO  */}
                </div>

                {/* <!-- Action Buttons --> */}
                <div className="  mx-auto pb-4 w-8/10 flex ">
                    <button id="botonSD" onClick={() => console.log("user.requestLogin();")} value="(${producto.id})"
                        className={
                            stateID == 5
                                ? " flex-1   bg-gray-600 hover:bg-gray-700  text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                : " flex-1 hover:scale-105  transition-colors  hover:bg-green-900 color-sena  text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                        }>
                        Agregar
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className="" fill="#ffffff">
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                        </svg>
                    </button>
                </div>
            </div >
        </>

    )
}

const searchSingularMeasurement = () => {
    let measurement = this.measurementsData.filter(object => object.plural.toLowerCase() == measurementName.toLowerCase());

    // console.log(measurement+'tamaño de el buffer d emedidas'+this.measurementsData.length); 
    //   console.error(`${measurement}`);
    if (measurement.length > 0) {
        // console.log(measurement[0].singular);
        return measurement[0].singular;
    } else {

        // console.log("No se encontró coincidencia");
        return null;
    }
}


export default Products