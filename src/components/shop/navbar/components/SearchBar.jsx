export const SearchBar = () => {
    return (
        <>
            {/* <!-- Search - Ocultar en móviles --> */}
            <div className="order-2 mr-28 md:order-3 hidden md:block w-full md:w-auto mt-0 md:mt-3">
                <div className="w-full max-w-sm min-w-[200px]">
                    <div className="relative mt-2">
                        <input id="productSearchBar"
                            className="w-90 color-sena  hover:boder-4 hover:border-amber-400  placeholder:text-white text-white text-sm border border-slate-200 rounded-full pl-4 pr-10 py-3 px-40transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Busca tus productos..." />
                        <button
                            className=" hover:animate-wiggle hover:animate-ease-in-out absolute align-self-end align-end mx-0 ml-30 top-1 left-30 flex items-end rounded-full bg-slate-800 py-1 mt-1 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFFFF" className="w-4 h-4 mr-2">
                                <path fillRule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                    clipRule="evenodd" />
                            </svg>
                            Buscar
                        </button>
                       
                    </div>
                </div>
            </div>
        </>
    )
}