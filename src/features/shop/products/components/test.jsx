

const ProductCard = ({ imageUrl, id, price, name, subCategory, state, stateID, quantity, stock, measurement }) => {
    console.log("renderizando " + name)
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col w-full max-w-xs">
            {/* <!-- Product Image Container --> */}
            <div className="relative w-full h-48 bg-gray-100 rounded-t-2xl overflow-hidden">
                {/* <!-- Gray rounded square --> */}
                <div className="absolute inset-0 m-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* <!-- Product Image (centered within the gray square) --> */}
                    <img className="w-full h-full object-contain p-2" src={imageUrl} alt={`${name} ${subCategory}`} />
                </div>
            </div>

            {/* <!-- Product Info --> */}
            <div className="p-4 flex-grow">
                <div className="flex justify-between items-start">
                    {/* <!-- Price -->  web.addPuntuaction(producto.precio) */}
                    <span className="text-lg font-bold text-red-500"> ${price} </span>


                </div>
                {/* <!-- Red horizontal line --> */}
                <div className="border-t border-red-500 my-2"></div>

                {/* <!-- Product Name --> */}
                <h3 className="text-lg font-medium mt-1 text-gray-800">${name} ${subCategory} x ${quantity}</h3>

                {/* <!-- Unit --> */}
                <p className="text-gray-500 text-sm">${measurement}</p>
            </div>

            {/* <!-- Action Buttons --> */}
            <div className="px-4 pb-4 flex space-x-2">
                <button onclick="user.requestLogin();" value={id} Name="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    Agregar
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                    </svg>
                </button>
                <button onclick={() => console.log(siu)} Name="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Comprar
                </button>
            </div>
        </div>
    )
}
