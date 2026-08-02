import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-[#F7F5EE] fixed w-full z-20 top-0 start-0 border-b border-[#DEDACB]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <span className="self-center text-xl text-[#2A2620] font-semibold whitespace-nowrap">Bookverse</span>
                    <div className="flex items-center md:order-2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            data-collapse-toggle="navbar-search"
                            aria-controls="navbar-search"
                            aria-expanded={isOpen}
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#5E5A4E] rounded-lg md:hidden hover:bg-[#EFEBDD] hover:text-[#2A2620] focus:outline-none focus:ring-2 focus:ring-[#D8D3C0]">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
                                ) : (
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 md:ml-auto ${isOpen ? "flex" : "hidden"}`} >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#DEDACB] rounded-lg bg-[#EFEBDD] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#F7F5EE]">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/home'} onClick={() => setIsOpen(false)}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/'} onClick={() => setIsOpen(false)}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/favourites'} onClick={() => setIsOpen(false)}>Favourites</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}