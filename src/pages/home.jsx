import { Navbar } from "@components/shop/navbar"
import { ComercialBanner, ProductCategories, Products } from "@features/shop/products/"
import { setUserInfo, setLoggedUser } from "@slices/auth/userSlice"
import { useEffect, useState } from "react"
import { InfoModal, MyAccountModal,UserOrdersModal } from "@components/modals"
import { setShowMyAccount, setShowMyOrders, setShowMyBills, setShowLogout } from "@slices/shop/appSlice"
import { useDispatch,useSelector } from "react-redux"
import Footer from "@components/footer"
import "./shop.css"



const Home = () => {
    // setea la informacion 
    setGlobalUserInfo();
    const showMyAccountGlobal = useSelector((state) => state.app.modals.showMyAccount)
    const showMyOrdersGlobal = useSelector((state) => state.app.modals.showMyOrders)
    const showMyBillsGlobal = useSelector((state) => state.app.modals.showMyBills)
    const showLogoutGlobal = useSelector((state) => state.app.modals.showLogout)

    const [showMyAccount, setShowMyAccount_local] = useState(false)
    const [showMyOrders, setShowMyOrders_local] = useState(false)
    const [showMyBills, setShowMyBills_local] = useState(false)
    const [showLogout, setShowLogout_local] = useState(false)
 
    console.log(`Estado global de showMyAccount: ${showMyAccountGlobal}`)
    console.log(`Estado global de showMyOrders: ${showMyOrdersGlobal}`)
    console.log(`Estado global de showMyBills: ${showMyBillsGlobal}`)
    console.log(`Estado global de showLogout: ${showLogoutGlobal}`)
    const  dispatch =  useDispatch();
    useEffect(() => {
        setShowMyAccount_local(showMyAccountGlobal)
        console.log("cambioando estado alvg")
    }, [showMyAccountGlobal])

    useEffect(() => {
        setShowMyOrders_local(showMyOrdersGlobal)
    }, [showMyOrdersGlobal])

    useEffect(() => {
        setShowMyBills_local(showMyBillsGlobal)
    }, [showMyBillsGlobal])

    useEffect(() => {
        setShowLogout_local(showLogoutGlobal)
    }, [showLogoutGlobal])

    // setea la informacion del cliente
    return (
        <div className="mainContent">
            <Navbar />


            {/* Contenido de la aplicacion  banner, categorias  y productos*/}
            <ComercialBanner />
            {/* <Spline
        scene="https://prod.spline.design/vkrLkXhonY39l8kR/scene.splinecode" 
        /> */}


            {/* categorias de los productos */}
            <ProductCategories />

            <Products />
            <Footer />
            {/* todos los productos por cartas  */}
            {/* <Body/> */}
            {/* seccion de todo los modales */}
            <InfoModal />
            {/*  MODALES DEL MENU DE OPCIONES */}
            {
                showMyAccount && (
                    <MyAccountModal onCloseModal={() => dispatch(setShowMyAccount(false))} />
                )
            }
            <UserOrdersModal />

        </div>
    )
}

const setGlobalUserInfo = (user) => {
    const dispatch = useDispatch();
    const data = {
        isLoggedIn: true,
        token: window.localStorage.getItem("token"),
        name: window.localStorage.getItem("userName"),
        sessionToken: window.localStorage.getItem("sessionToken"),
        email: window.localStorage.getItem("email")
    }
    console.log(data)
    dispatch(setLoggedUser());
    dispatch(setUserInfo(data));

}
export default Home