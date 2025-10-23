import Logo from "@components/Logo";
import { SearchBar } from "./components/SearchBar";
import { UserSection } from "./components/UserSection";


export const Navbar = () => {
    let CustomLogo = {
        width:500,
        height:150
    }
    return (
        <>
            <nav id="header"  className="w-full sticky z-30 top-0 py-0 bg-white ">
                <div className="w-full container  flex flex-nowrap items-center  mt-0 px-2  py-0">
                    <div className="flex items-center pr-25">
                        {/*md:hidden  */}
                        <Logo width={70} height={30} auxiliar={true} QuantOfPixels={CustomLogo} />
                        <span className=" ml-0 pl-0 mr-0 hidden md:hidden  text-green-400 font-black text-xl">

                            MERCASENA
                        </span>
                    </div>


                    <SearchBar />
                    <UserSection />
                </div>

            </nav>

        </>
    )
}

