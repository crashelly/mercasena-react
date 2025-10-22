

const RequestLoginModal = () => {
    return (
        <>
            <div id="registerModal" className="fixed inset-0 z-50 hidden   overflow-y-auto transition-opacity duration-300">
                <div className="flex items-center justify-center min-h-screen px-4">
                    <div className="fixed inset-0 bg-gray-500 opacity-75" id="modalBackdrop"></div>

                    <div
                        className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-md w-full relative">
                        {/* <!-- BOTÓN CERRAR --> */}
                        <button id="btnCerrarLogin" onclick=' document.getElementById("registerModal").classNameList.add("hidden");
    document.body.style.overflow = "";' className="absolute top-4 right-4 text-gray-400 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="bg-white px-8 py-10">
                            <div className="w-full h-48 flex items-center justify-center bg-cover bg-center rounded-3xl overflow-hidden"
                                style="background-image: url('assets/images/imglogin.png');">
                                <div className="text-center text-white">
                                    <h2 className="text-2xl font-extrabold" style="text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6);">
                                    </h2>
                                    <h2 className="text-2xl font-extrabold" style="text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6);"> Registrate
                                    </h2>
                                </div>
                            </div>

                            <form id="registerForm" method="POST">
                                {/* <!-- CORREO --> */}
                                <div className="mb-5 mt-3 relative">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
                                        viewBox="0 -960 960 960" fill="white">
                                        <path
                                            d="M480-40q-23 0-46-3t-46-8Q300 14 194.5-4.5T33-117q-45-74-29-159t77-143v-3Q19-479 4-562.5T32-720q37-63 102-95.5T271-838q32-57 87.5-89.5T480-960q66 0 121.5 32.5T689-838q72-10 137 22.5T928-720q43 74 28 157.5T879-422v3q61 58 77 143t-29 159Q871-23 765.5-4.5T572-51q-23 5-46 8t-46 3ZM288-90q-32-18-61-41.5T174-183q-24-28-42.5-60.5T101-311q-20 36-20 76.5t21 75.5q29 48 81.5 68.5T288-90Zm384 0q52 20 104.5-.5T858-159q21-35 21-75.5T859-311q-12 35-30.5 67.5T786-183q-24 28-52.5 51.5T672-90Zm-192-30q134 0 227-93t93-227q0-29-4.5-55.5T782-547q-29 20-64 31t-73 11q-102 0-173.5-71.5T400-750q-104 26-172 112t-68 198q0 134 93 227t227 93ZM360-350q-21 0-35.5-14.5T310-400q0-21 14.5-35.5T360-450q21 0 35.5 14.5T410-400q0 21-14.5 35.5T360-350Zm240 0q-21 0-35.5-14.5T550-400q0-21 14.5-35.5T600-450q21 0 35.5 14.5T650-400q0 21-14.5 35.5T600-350Z" />
                                    </svg>
                                    <input type="email" id="emailForRegister"
                                        className="w-full pl-10 pr-3 py-1.5 border border-green-500 color-sena  text-white rounded-full focus:ring-2 focus:ring-green-400 focus:border-green-400 placeholder-white text-sm"
                                        placeholder="Ingresa tu correo"/>
                                </div>
                                {/* <!-- nombre --> */}
                                <div className="mb-5 mt-3 relative">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
                                        viewBox="0 -960 960 960" fill="white">
                                        <path
                                            d="M480-40q-23 0-46-3t-46-8Q300 14 194.5-4.5T33-117q-45-74-29-159t77-143v-3Q19-479 4-562.5T32-720q37-63 102-95.5T271-838q32-57 87.5-89.5T480-960q66 0 121.5 32.5T689-838q72-10 137 22.5T928-720q43 74 28 157.5T879-422v3q61 58 77 143t-29 159Q871-23 765.5-4.5T572-51q-23 5-46 8t-46 3ZM288-90q-32-18-61-41.5T174-183q-24-28-42.5-60.5T101-311q-20 36-20 76.5t21 75.5q29 48 81.5 68.5T288-90Zm384 0q52 20 104.5-.5T858-159q21-35 21-75.5T859-311q-12 35-30.5 67.5T786-183q-24 28-52.5 51.5T672-90Zm-192-30q134 0 227-93t93-227q0-29-4.5-55.5T782-547q-29 20-64 31t-73 11q-102 0-173.5-71.5T400-750q-104 26-172 112t-68 198q0 134 93 227t227 93ZM360-350q-21 0-35.5-14.5T310-400q0-21 14.5-35.5T360-450q21 0 35.5 14.5T410-400q0 21-14.5 35.5T360-350Zm240 0q-21 0-35.5-14.5T550-400q0-21 14.5-35.5T600-450q21 0 35.5 14.5T650-400q0 21-14.5 35.5T600-350Z" />
                                    </svg>
                                    <input type="text" id="nameForRegister"
                                        className="w-full pl-10 pr-3 py-1.5 border border-green-500 color-sena text-white rounded-full focus:ring-2 focus:ring-green-400 focus:border-green-400 placeholder-white text-sm"
                                        placeholder="Escribe tu nombre real"/>
                                </div>

                                {/* <!-- contraseña --> */}
                                <div className="mb-5 mt-3 relative">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
                                        viewBox="0 -960 960 960" fill="white">
                                        <path
                                            d="M720-240q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T621-173q17 25 43 39t56 14ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM490-80H240q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v52q-18-6-37.5-9t-42.5-3v-40H240v400h212q8 24 16 41.5T490-80Zm230 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z" />
                                    </svg>
                                    <input type="password" id="passwordForRegister"
                                        className="w-full px-10 py-2 border border-green-500 color-sena  text-white rounded-full focus:ring-2 focus:ring-green-400 focus:border-green-400 placeholder-white text-sm"
                                        placeholder="Ingresa tu contraseña"/>
                                </div>





                                {/* <!-- se te olvido la contraseña --> */}
                                <div className="mb-5 mt-3 relative">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
                                        viewBox="0 -960 960 960" fill="white">
                                        <path
                                            d="M720-240q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T621-173q17 25 43 39t56 14ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM490-80H240q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v52q-18-6-37.5-9t-42.5-3v-40H240v400h212q8 24 16 41.5T490-80Zm230 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z" />
                                    </svg>
                                    <input type="password" id="repeatedPassword"
                                        className="w-full px-10 py-2 border border-green-500 color-sena  text-white rounded-full focus:ring-2 focus:ring-green-400 focus:border-green-400 placeholder-white text-sm"
                                        placeholder="Repite tu contraseña"/>
                                </div>

                                <div className="flex justify-between items-center mb-8">¿Ya tienes cuenta?
                                    <a href="#" className="text-sm color-sena-texto hover:underline"
                                        onclick="$('#registerModal').addclassName('hidden')">Iniciar sesion</a>

                                </div>

                                <button type="submit"
                                    className="w-full color-sena text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition duration-300">
                                    Registrar
                                </button>






                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RequestLoginModal