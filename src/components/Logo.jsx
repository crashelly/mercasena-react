import logoIcon from "@assets/logos/Logo_mercaseine_pr.png"
const Logo = ({ width, height }) => {
    return (
        <img src={logoIcon} className={`w-${width} h-${height}`} alt="" />
    )
}

export default Logo