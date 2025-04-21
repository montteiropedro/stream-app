import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faMessage, faBell } from '@fortawesome/free-solid-svg-icons'
import logo from "/logo.svg"
import userProfile from "/user-profile.png"

function Navbar() {
    return (
        <nav className="bg-black-main text-white h-24 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img src={logo} alt="logo" className="h-10" />
                <span className="text-3xl font-[Monoton]">STREAM APP</span>
            </div>

            <ul className="flex gap-2.5 text-xl font-bold">
                <li className="px-4 h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-red-main
                              hover:text-red-secondary transition duration-400 ease-in-out">
                    <a href="/">Following</a>
                </li>
                <li className="size-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-red-main
                              hover:text-red-secondary transition duration-400 ease-in-out">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </li>
                <li className="px-4 h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-red-main
                              hover:text-red-secondary transition duration-400 ease-in-out">
                    <a href="/">Browse</a>
                </li>
            </ul>

            <div id="user-section" className="flex gap-2">
                <div className="size-10.5 flex items-center justify-center rounded-2xl cursor-pointer hover:bg-black-secondary">
                    <div className="relative inline-block">
                        <FontAwesomeIcon icon={faMessage} />
                        <span className="bg-red-secondary absolute top-0 -right-0.5 h-2 w-2 rounded-full"></span>
                    </div>
                </div>
                <div className="size-10.5 flex items-center justify-center rounded-2xl cursor-pointer hover:bg-black-secondary">
                    <div className="relative">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="bg-red-secondary absolute top-0 -right-0.5 h-2 w-2 rounded-full"></span>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <img src={userProfile} alt="avatar" className="h-10 w-10 object-cover rounded-2xl" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
