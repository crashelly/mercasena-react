import Logo from "@components/assets/Logo";
import { SearchBar } from "./components/SearchBar";
import { UserSection } from "./components/UserSection";


export const Navbar = () => {
    return (
        <>
            <nav id="header" className="w-full z-30 top-0 py-5 bg-white ">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-4 md:px-6 py-0">
                    <Logo />

                    <SearchBar />
                    <UserSection />
                    


                </div>
            </nav>

        </>
    )
}

