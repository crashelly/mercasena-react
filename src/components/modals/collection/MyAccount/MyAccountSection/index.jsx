
import { CONFIG } from "@config/app"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { ErrorAlert } from "@components/Alerts"
import { isEmptyObject } from "jquery"

const MyAccountSection = () => {
    const userState = useSelector((state) => state.user.globalData)

    const [phoneNumber, setphoneNumber] = useState("")
    const [adress, setAdress] = useState("")
    const [name, setName] = useState("")
    const [NIT, setNIT] = useState("")

    useEffect(() => {
        console.log(userState)
        try {
            fetch(CONFIG.API.URL.endpoints.user.getInfo(), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Mercasena-Token': userState.sessionToken
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .then((data) => {
                    if (isEmptyObject(data)) {
                        throw new Error("No se encontraron datos")
                    }
                    // seteamos la informacion
                    setName(data[0].nombre)
                    setphoneNumber(data[0].telefono)
                    setAdress(data[0].direccion)
                    setNIT(data[0].nit)
                })
        } catch (error) {
            ErrorAlert(error)
        }

    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("name: ", name)
        console.log("phoneNumber: ", phoneNumber)
        console.log("adress: ", adress)
        console.log("NIT: ", NIT)
    }
    return (
        <>
            <div className="w-full max-w-lg mx-auto border-gray-300  p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl color-sena-texto   underline self-start  text-center font-medium mb-6">Mi cuenta
                    </h2>
                    {/* FORMULARIO DE REGISTRO */}
                    <form onSubmit={(form) => handleFormSubmit(form)} id="set_formUpdateData">
                        <div className="grid grid-cols-2 gap-6">
                            {/* <!-- nombre del usuario --> */}
                            <div className="col-span-2 sm:col-span-1">

                                <div className="flex flex-inline justify-between">
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">Mi nombre</label>
                                    <div className="tooltip  tooltip-success "
                                        data-tip="este sera el nombre que aparecera en los pedidos y en las facturas">

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
                                <input
                                    onChange={(event) => setName(event.target.value)}
                                    type="text"
                                    name="username"
                                    id="set_username"
                                    placeholder="Juan Perez Torres"
                                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none text-black focus:border-blue-500" />
                            </div>
                            {/* <!-- telefono delk usuario --> */}
                            <div className="col-span-2 sm:col-span-1">
                                <div className="flex flex-inline justify-between">
                                    <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-2">Mi Numero de telefono</label>
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
                                <input
                                    onChange={(e) => setphoneNumber(e.target.value)}
                                    type="text"
                                    name="set_phoneNumber"
                                    id="set_phoneNumber"
                                    placeholder="3147773423 "
                                    className="w-full py-3  text-black px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            {/* <!-- NIT --> */}
                            <div className="col-span-2 sm:col-span-1">
                                <div className="flex flex-inline justify-between">
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">NIT</label>
                                    <div className="tooltip  tooltip-success " data-tip="Numero de cedula ,opcional">

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
                                <input type="number" name="set_nit" id="set_nit" placeholder="105467034" disabled
                                    className="w-full text-black py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />

                            </div>
                            {/* <!-- direccion --> */}
                            <div className="col-span-2 sm:col-span-1">

                                <div className="flex flex-inline justify-between">
                                    <label for="card-number" className="block text-sm font-medium text-gray-700 mb-2">Mi Direccion</label>
                                    <div className="tooltip  tooltip-success "
                                        data-tip="este sera la direccion de envio que aparecera en la factura">

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
                                <textarea onChange={(e) => setAdress(e.target.value)} type="" name="set_adress" id="set_adress" placeholder="calle 39b #14 b3 edificio 4"
                                    className="w-full text-black py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"></textarea>

                            </div>
                        </div>
                        <div className="mt-8">
                            <button type="submit"
                                className="w-full color-sena hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Guardar
                                Cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MyAccountSection