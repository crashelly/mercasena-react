/**
 * componete para las categorias de los productos
 */

import { useEffect, useState } from "react";
import { CONFIG } from "@config/app"
const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(CONFIG.API.URL.endpoints.categories.get())
            .then(res => res.json())
            .then(res => setCategories(res))
    }, [])

    return (
        <>
            <div id="carousele-categories"
                className=" color-sena  mt-3 p-3 rounded-lg overflow-y-hidden    flex flex-nowrap justify-center  ml-0 mr-2  carousel h-12 carousel-horizontal  mx-o w-full rounded-box  bg-green-500 p-0 border-box rounded-lg  justify-center ">
                {/* <!-- <div id="carousele-categories" className="carousel h-7  carousel-horizontal items-align-center   mx-auto w-full rounded-box"> --> */}
                    <Category name={"Todos"} key={"000"} />
                { 
                    
                    categories.map(category =>{
                        category.name = category.nombre
                        return (
                            <Category name={category.name} key={category.id} />
                        )
                    })
                }

            </div>
        </>
    )
}

const Category = ({ name}) => {
    return (
        <>
            <div className="carousel-item mr-4 ml-4">
                {/* onclikc => web.fetchProductsByCategory(${categoria.id},false)  */}
                <button onClick={()=>console.log("hola")} className="bg-white text-green-600 font-bold px-3 py-1 text-sm rounded-full shadow-md border border-green-400 hover:bg-green-100 badge badge-success"> {name}</button>
            </div>
        </>
    )
}
export default ProductCategories;