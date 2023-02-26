import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/favicon.png'

const Header = () => {
    return (
        <div className="relarive z-10 wrapper w-full bg-transparent">
            <div className="py-5 max-w-screen-xl mx-auto flex justify-between align- px-4">
                <Link to={ '/' } className="text-3xl text-hblue h-min my-auto">Stream <span className="text-hred">AheAD</span></Link>
                <Link to={ '/' } >
                    <img src={ logo } className="w-[90px] h-auto" alt="logo" />
                </Link>
            </div>
        </div>
    )
}

export default Header;