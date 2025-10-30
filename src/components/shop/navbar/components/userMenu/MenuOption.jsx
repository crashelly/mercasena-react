export const MenuOption = ({ icon, description, onClick }) => {


    return (

        <li className="hover:bg-slate-200 animate-shake animate-once animate-duration-[1300ms] animate-ease-in animate-normal">
            <div class="flex flex-inline ">
                {icon()}
                <a onClick={onClick} className="text-md ml-2 font-bold color-sena-texto">
                    {description}
                </a>
            </div>

        </li>

    )
}

