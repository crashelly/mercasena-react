<div className="absolute inset-0 m-4 bg-gray-200 rounded-lg flex items-center justify-center">
                        {/* <!-- Product Image (centered within the gray square) --> */}
                        <img id={`img${id}`}
                            className={
                                stateID == 5
                                    ? "w-full h-full z-10  hover:hidden mask-b-from-30% mask-b-to-95% object-contain p-2 opacity-50 hover:animate-pulse hover:animate-duration-[1400ms] hover:animate-ease-linear"
                                    : "w-full h-full z-10 hover:hidden  object-contain p-2"
                            } src={imageUrl} alt={name} />
                    </div>
                    <h1 class=" absolute  font-bold text-black  text-3xl ">hola como estas analizando la vuelta a francia jajajaj</h1>
