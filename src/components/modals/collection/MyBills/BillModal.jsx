import { useState, useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { SuccessAlert, ErrorAlert } from "@components/Alerts"
import BillCard from "./BillCard"
import { CONFIG } from "@config/app"
import "cally";
import { CalendarContainer } from "./Calendar"
const BillModal = ({ onClose }) => {
    const [bills, setBills_local] = useState([])
    const [filteredBills, setFilter_filtered] = useState([])
    const [loadAgain, setLoadAgain] = useState(false)
    const [wasFiltered, setWasFiltered] = useState(false)
    const user = useSelector(state => state.user.globalData)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(CONFIG.API.URL.endpoints.bills.get(), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Mercasena-Token': user.sessionToken,
                'X-CSRF-token': user.token
            },
        })
            .then(res => res.json())
            .then((data) => {
                // console.log(data.filter(bill => bill.fecha.split(" ") == "2025-07-25"))
                const newTransformedData = data.map(bill => ({
                    ...bill,
                    fechaBusqueda: bill.fecha.split(" ")[0]
                })
                    // data.fechaBusqueda = bill.fecha.split(" ")
                    // data.fechaBusqueda = "2022-07-25"
                )
                console.log(newTransformedData )
                setBills_local(newTransformedData)
                // dispatch(setBills(newTransformedData))
                // console.log()
            })
    }, [loadAgain])

    // us effect de la renderizacion de los bill ya filtrados

    const filterByDate = (billsCollection) => {
        // setFilter_filtered(bills.filter(bill => bill.fechaBusqueda == "2022-07-25"))
        // setWasFiltered(true)
        console.log(billsCollection.filter(bill => bill.fechaBusqueda == "2025-07-25"))
    }

    return (
        <>
            <dialog open id="BillModal" className="modal">
                <div className="modal-box  bg-white  w-11/12 max-w-5xl  ">
                    <form method="dialog">
                        <button
                            className="btn btn-sm bg-white-400 ml-2  text-black hover:bg-red-400 btn-circle btn-ghost absolute right-3 top-8 lg:top-2 ">
                            ✕</button>
                    </form>
                    <div className="mt-5">
                        {/* <!-- menu de filtros --> */}
                        <div className="navbar  bg-slate-100 shadow-sm">
                            {/* <!-- primera parte --> */}
                            <div className="flex-none">
                                <button className="btn btn-square btn-ghost">

                                </button>
                            </div>
                            {/* <!-- segunda parte --> */}
                            <div className="flex-1 hover:bg-slate-200">
                                {/* <!-- filtros --> */}

                                <a className="btn btn-ghost hover:bg-slate-200  text-green-600  text-sm md:text-xl">Mis Comprobantes de ventas</a>
                            </div>
                            <div className="flex-2 hover:bg-slate-200">
                                {/* <!-- filtros --> */}

                                <a className="btn btn-ghost hover:bg-slate-200  text-green-600  text-sm md:text-xl">Filtros</a>
                                <CalendarContainer bills={bills} onSearch={()=>filterByDate()} />
                            </div>

                        </div>
                        {/* conentedo de las facturas */}
                        <div id="BillCardContainers" className="flex mt-3 flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">

                            {
                                bills.map((bill, index) => {
                                    return <BillCard key={index + "BillCard_shop"} factura={bill} />
                                })
                            }

                        </div>
                        {/* aca esta el contenedor de los comprobantes */}
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default BillModal;