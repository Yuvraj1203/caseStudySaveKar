import React from "react";
import { Link, NavLink } from "react-router-dom";

const Head = () =>{
    return(
        <nav className="bg-[#112a4b] sticky top-0 w-full flex justify-between p-10">   
            <Link to={"/"}><h1 className="text-yellow-500 text-xl">Edhaas<span className="">Dev.</span></h1></Link>
            <ul className="flex w-1/3 justify-around">
                <li className="text-lg text-white">
                        <NavLink
                        to="/service"
                        className={({ isActive }) =>
                            `${isActive ? "text-red-500":"text-white"}
                            hover:text-orange-500
                            `
                        }
                        >
                        Service
                        </NavLink>
                </li>
                <li className="text-lg text-white">
                        <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${isActive ? "text-red-500":"text-white"}
                            hover:text-orange-500
                            `
                        }
                        >
                        About Us
                        </NavLink>
                </li>
                <li className="text-lg text-white">
                        <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${isActive ? "text-red-500":"text-white"}
                            hover:text-orange-500
                            `
                        }
                        >
                        Contact Us
                        </NavLink>
                </li>
                <li className="text-lg text-white">
                        <NavLink
                        to="/study"
                        className={({ isActive }) =>
                            `${isActive ? "text-red-500":"text-white"}
                            hover:text-orange-500
                            `
                        }
                        >
                        Case Study
                        </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Head;