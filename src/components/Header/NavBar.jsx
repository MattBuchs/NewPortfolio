import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="max-w-[1250px] md:w-[90%] w-full h-full mx-auto relative">
            <div className="absolute z-40 top-8 flex justify-between items-center w-full px-5">
                <h1 className="text-3xl font-semibold underline underline-offset-8 flex items-center">
                    <img
                        src="/img/Logo-Skroma.jpg"
                        alt=""
                        className="w-12 h-12 rounded-full"
                    />
                    <span className="drop-shadow mt-1 ml-2 font-vibes">
                        Matt Buchs
                    </span>
                </h1>

                <nav className="h-full rounded-bl">
                    <ul className="flex items-center h-full text-lg">
                        <li className="mr-4 mb-1">
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
                        <li className="mr-4 mb-1">
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
