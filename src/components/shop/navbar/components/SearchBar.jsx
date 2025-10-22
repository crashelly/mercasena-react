export const SearchBar = () => {
    return (
        <>
            {/* <!-- Search - Ocultar en móviles --> */}
            <div className="order-2 md:order-3 hidden md:block w-full md:w-auto mt-0 md:mt-0">
                <div className="w-full max-w-sm min-w-[200px]">
                    <div className="relative mt-2">
                        <input id="productSearchBar"
                            className="w-full color-sena   placeholder:text-white text-white text-sm border border-slate-200 rounded-full pl-4 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Busca tus productos..." />
                        <button
                            className=" absolute top-1 right-1 flex items-center rounded-full bg-slate-800 py-1 px-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFFFF" className="w-4 h-4 mr-2">
                                <path fillRule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                    clipRule="evenodd" />
                            </svg>
                            Buscar
                        </button>
                        {/* <button className="btn mt-2 h-1 w-1" id="btnOpenPopover" popoverTarget="productsResult" >

                        </button> */}
                        {/* <div className="dropdown    w-full h-full rounded-box bg-base-100 shadow-sm"  id="productsResult"
                        >
                            <div className=" px-1 grid grid-cols-4 gap-4  bg-slate-100 " id="resultsforProducxts">

                            </div>
                            <div className=" px-1  " id="errorBannerContainer">

                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}