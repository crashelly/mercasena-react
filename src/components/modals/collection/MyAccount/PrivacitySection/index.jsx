const PrivacitySection = () => {
    return (
        <>

            <div className="w-full hidden  max-w-lg mx-auto border-gray-300  p-1">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl color-sena-texto   underline self-start  text-center font-medium mb-6">
                        privacidad
                    </h2>
                    <form>
                        <div className="grid grid-cols-2 gap-6">
                            {/* <!-- contraseña --> */}
                            <div className="col-span-2 sm:col-span-1">

                                <div className="flex flex-inline justify-between">
                                    <label for="card-number" className="block text-sm font-medium text-gray-700 mb-2">antigua
                                        Contraseña</label>


                                </div>
                                <input type="text" name="username" id="set_username" placeholder="Juan Perez Torres"
                                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />

                            </div>
                            {/* <!-- confirmacion de lla contraseña --> */}
                            <div className="col-span-2 sm:col-span-1">

                                <div className="flex flex-inline justify-between">
                                    <label for="" className="block text-sm font-medium text-gray-700 mb-2">repite tu contraseña</label>
                                    <div className="tooltip  tooltip-success "
                                        data-tip="este el numero de telefono de confirmacion o envio de factura">

                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M12 11V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                    stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <circle cx="12" cy="7.5" r="1" fill="#000000"></circle>
                                            </g>
                                        </svg>
                                    </div>

                                </div>
                                <input type="text" name="set_phoneNumber" id="set_phoneNumber" placeholder="3147773423 "
                                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />

                            </div>

                        </div>
                        <div className="mt-8">
                            <button type="submit"
                                className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Guardar
                                contraseña</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PrivacitySection