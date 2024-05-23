import { useState } from "react";
import { Menu, X } from 'lucide-react'
import logo from "../assets/img/logo.png";
import { navItems } from './../constants/index';

const Header = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    return (
        <>
            <header>
                <nav className="sticky top-0 z-50 backdrop-blur-lg border-b py-3 border-neutral-700/80">
                    <div className="container relative text-sm">
                        <div className="flex justify-between items-center">
                            <a className="flex flex-shrink-0 items-center gap-x-2" href="">
                                <img className="w-10 h-10" src={logo} alt="Logo" />
                                <span className="text-xl">VReality</span>
                            </a>
                            {/* Desktop Menu */}
                            <ul className="hidden lg:flex gap-x-12">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className='hidden lg:flex justify-center items-start gap-x-12'>
                                <a className="px-3 py-2 border rounded-md" href="#">
                                    Sign In
                                </a>
                                <a className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md" href="#">
                                    Create An Account
                                </a>
                            </div>
                            <div className="lg:hidden">
                                <button onClick={toggleNavbar}>
                                    {mobileDrawerOpen ? <X /> : <Menu />}
                                </button>
                            </div>
                            {mobileDrawerOpen && (
                                <div className="fixed top-16 right-0 z-20 w-full flex flex-col justify-center items-center bg-neutral-900 p-12 lg:hidden transition">
                                    <ul>
                                        {navItems.map((item, index) => (
                                            <li className="py-4" key={index}>
                                                <a href={item.href}>{item.label}</a>
                                            </li>
                                        ))}
                                        
                                    </ul>
                                    <div className="flex gap-x-6 mt-6">
                                        <a className="px-3 py-2 border rounded-md" href="#">
                                            Sign In
                                        </a>
                                        <a className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md" href="#">
                                            Create An Account
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;