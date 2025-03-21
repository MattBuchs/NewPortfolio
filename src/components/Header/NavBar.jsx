import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useScreenSize } from "../../hook/useScreenSize";

export default function NavBar({ isProjectPage }) {
    const screenWidth = useScreenSize().width;
    const navRef = useRef(null);
    const [toggle, setToggle] = useState(false);
    const [disableParallax, setdisableParallax] = useState(false);

    useEffect(() => {
        if (screenWidth <= 640) setdisableParallax(true);
        else setdisableParallax(false);

        setToggle(false);
    }, [screenWidth]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        if (toggle) document.addEventListener("mousedown", handleClickOutside);
        else document.removeEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggle]);

    return (
        <header
            className={`w-full mx-auto mt-4 absolute z-40 flex justify-center${
                isProjectPage ? "" : " sm:mt-8"
            }`}
        >
            <div className="max-w-[1250px] md:w-[90%] flex justify-between items-center w-full px-5">
                <h1 className="text-3xl font-semibold underline underline-offset-8 flex items-center">
                    <img
                        src="/img/Logo-Skroma.jpg"
                        alt=""
                        className="w-12 h-12 rounded-full hidden sm:inline"
                    />
                    <span className="drop-shadow mt-1 ml-2 font-vibes">
                        Matt Buchs
                    </span>
                </h1>

                <nav ref={navRef} className="h-full rounded-bl flex">
                    {disableParallax && (
                        <button
                            className="sm:hidden hover:bg-black/30 flex justify-center items-center w-[50px] h-[50px] rounded-full"
                            onClick={() => setToggle(!toggle)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-7 h-7"
                            >
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                            </svg>
                        </button>
                    )}
                    <ul
                        className={
                            !toggle
                                ? "items-center h-full text-lg hidden sm:flex"
                                : "absolute z-50 top-12 right-4 bg-slate-200 w-[150px] flex flex-col items-center py-1 rounded border border-gray-400/10 shadow"
                        }
                    >
                        <li className="sm:mr-4 mb-1">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${
                                        isActive &&
                                        "underline underline-offset-4"
                                    }`
                                }
                            >
                                Accueil
                            </NavLink>
                        </li>
                        <li className="sm:mr-4 mb-1">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `${
                                        isActive &&
                                        "underline underline-offset-4"
                                    }`
                                }
                            >
                                Projets
                            </NavLink>
                        </li>
                        <li className="mb-1">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `${
                                        isActive &&
                                        "underline underline-offset-4"
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
