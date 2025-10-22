import logoIcon from "@assets/logos/mercasena_logo.png"
const Logo = () => {
    return (
        <div className="flex items-center">
        {/*md:hidden  */}
            <img className="w-25   h-25"  src={logoIcon} alt="" />
            <span className=" ml-0 pl-0 mr-5 hidden md:block  text-green-400 font-black text-xl">

                MERCASENA
            </span>
        </div>
    )
}

export default Logo