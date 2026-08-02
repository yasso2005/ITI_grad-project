
import { Link, NavLink } from "react-router-dom";
export default function Footer() {

    return (
        <>
            <footer className="bg-neutral-primary-soft rounded-base shadow-xs mt-auto">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        <span className="text-heading text-2xl font-semibold whitespace-nowrap">
                            Bookverse
                        </span>

                        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-medium text-body">
                            <li>
                                <NavLink to="/" className="hover:text-[#C77D3D] transition-colors">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="hover:text-[#C77D3D] transition-colors">
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="hover:text-[#C77D3D] transition-colors">
                                    Licensing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="hover:text-[#C77D3D] transition-colors">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <hr className="my-6 border-default sm:mx-auto lg:my-8" />

                    <span className="block text-sm text-body text-center">
                        © 2026 Bookverse. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </>
    
        
    );
}
