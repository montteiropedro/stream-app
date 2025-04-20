function Navbar() {
    return (
        <nav className="bg-black-main text-white h-24 flex items-center justify-between">
            <div>
                STREAM APP
            </div>

            <ul>
                <li>Following</li>
                <li><i className="fa-solid fa-magnifying-glass"></i></li>
            </ul>
        </nav>
    )
}

export default Navbar
