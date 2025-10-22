import Logo from "@components/Logo";
import { SearchBar } from "./components/SearchBar";
import { UserSection } from "./components/UserSection";


export const Navbar = () => {
    return (
        <>
            <nav id="header"  className="w-full sticky z-30 top-0 py-5 bg-white ">
                <div className="w-full container mx-auto flex flex-nowrap items-center  mt-0 px-4 md:px-14 py-0">
                    <div className="flex items-center pr-30">
                        {/*md:hidden  */}
                        <Logo width={50} height={2} />
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

