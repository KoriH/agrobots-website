import React from "react";
import { useState } from "react";

// import icons
import { HiOutlineMenu } from "react-icons/hi";


import { navLinks } from "../../constant";
import { agrobot } from "../../assets";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="h-[10vh] bg-[#F8F7F1] w-full sticky top-0 left-0 right-0 border-b-2 z-[100]">
            <nav className="h-full py-4 md:px-8 px-4">
                <div className="h-full flex items-center justify-between">
                    <div className="h-full font-bold cursor-pointer text-black ">
                        <img className="h-full" src={agrobot} alt="UBC Agrobot" />
                    </div>

                <ul className="list-none lg:flex items-center gap-3 hidden">
                    {navLinks.map((nav) => (
                        <li className="block text-[#8cbc24] py-2 px-4">
                             <a href={`${nav.link}`}>{nav.id}</a>
                        </li>
                    ))}
                  
                </ul>

                {/* contact me button */}
        
            
    

                {/* menu button for small devices */}
                    <button onClick={toggleMenu} className="lg:hidden text-[#8cbc24] text-3xl ">
                        <HiOutlineMenu />
                    </button>

                </div>

                {/* nav items for small devices */}
                {
                    isMenuOpen && (
                        <div className="mt-4 bg-[#8cbc24] text-white rounded py-4">
                            <a href="/" className="block hover:text-grey-400 py-2 px-4">Home</a>
                            <a href="/" className="block hover:text-grey-400 py-2 px-4">Portfolio</a>
                            <a href="/" className="block hover:text-grey-400 py-2 px-4">Sponsorship</a>
                            <a href="/" className="block hover:text-grey-400 py-2 px-4">Recruitment</a>
                            <a href="/" className="block hover:text-grey-400 py-2 px-4">About us</a>
                        </div>
                    )
                }

            </nav>

        </header>
    );
}

export default Navbar;