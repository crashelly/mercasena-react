
export const Header = () => {
    return ( 
        <>
        <Logo/>
        </>
    )
}


const Logo = () => {
    return ( 
        <>
        <img className="md:hidden" width="50px" height="50px" src="assets/logos/logoSena_2.png" alt=""/>
                    <span className="hidden md:block">

                        MERCASENA
                    </span>
        </>
    )
}