<div
                        className="rounded-xl overflow-hidden mt-1 md:mt-2  flex shadow hover:shadow-lg hover:scale-105   md:hover:scale-110 transform  max-w-sm bg-white cursor-pointer h-30  md:h-40">
                        <div className="w-7/12 h-200  pl-3 p- pb-5 text-text1 flex flex-col justify-center">
                            <p className="text-base mb-2 font-bold truncate">
                            </p>
                            <div id="orderStatus${counter}"  className="badge  mt-2 md:mt-1  text-white">${pedido.estado}</div>
                            <div className="text-xs pt-1 pb-0 mt-2 md:mt-0  text-primary mb-2">
                                <a   className="flex items-center">

                                    <div id="productsInOrder${counter}"  className="flex  justify-end -space-x-3 space-x-reverse">
                                       
                                       
                                    </div>
                                </a>
                                <span className="font-bold tracking-wide mt-2 text-lg text-green-400">${pedido.productos.length} productos</span>
                            </div>
                            <div className="text-sm text-text2 tracking-wider mt-5 md:mt-0">${pedido.fecha}</div>
                        </div>
                        <div className="lg:flex flex w-5/12 flex-col mt-3 pt-2 flex-1    p-2">
                       
                        <div>
                            
                            </div>
                             <div>
                             <span className="font-bold tracking-wide mt-7 text-x4l text-green-400">Total <span
                                    className="font-bold tracking-wide mt-2 text-x2l text-gray-600">$</span> <span
                                    className="font-bold tracking-wide mt-2 text-x2l text-gray-600"> ${web.addPuntuaction( pedido.precioTotal) }</span></span>
                            </div>
                           
                            <div className="text-sm text-text2 self-center mt-5 justify-end tracking-wider">
                                <butto onClick="user.seeOrderDetails('${pedido.pedidoId}')"
                                    className="btn btn-md rounded-lg  md:btn-sm  mr-6 md:mr-0  bg-blue-300 p-4 md:p-4    hover:bg-blue-600 hover:text-white  transition duration-200 ease-in-out justify-end">
                                    
                                    Mas Informacion</butto>
                            </div>

                        </div>
                    </div>