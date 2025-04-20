import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo from "/logo.svg"

function Navbar() {
    return (
        <nav className="bg-black-main text-white h-24 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img src={logo} alt="Logo" className="h-12 ml-4" />
                <span className="text-3xl font-[Monoton]">STREAM APP</span>
            </div>

            <ul className="flex items-center gap-2.5 text-base font-bold">
                <li className="px-4 h-10 flex items-center justify-center rounded-lg hover:bg-red-main hover:text-red-500 transition duration-400 ease-in-out"><a href="/">Following</a></li>
                <li className="size-10 flex items-center justify-center rounded-lg hover:bg-red-main hover:text-red-500 transition duration-400 ease-in-out"><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                <li className="px-4 h-10 flex items-center justify-center rounded-lg hover:bg-red-main hover:text-red-500 transition duration-400 ease-in-out"><a href="/">Browse</a></li>
            </ul>

            <div className="user">

            </div>
        </nav>
    )
}

export default Navbar
