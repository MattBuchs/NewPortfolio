import { NavLink } from "react-router-dom";

export default function NavbarProjects() {
    return (
        <header className="absolute z-50 text-white flex justify-between items-center w-full h-12">
            <h1 className="text-2xl font-vibes font-semibold ml-2 mt-4 text-black bg-white px-5 pt-2 pb-0.5 border rounded-lg shadow-sm">
                Matt Buchs
            </h1>

            <nav className="bg-black/80 h-full px-8 rounded-bl">
                <ul className="flex items-center h-full">
                    <li className="mr-4 mb-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${isActive && "underline underline-offset-4"}`
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="mr-4 mb-1">
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `${isActive && "underline underline-offset-4"}`
                            }
                        >
                            Projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `${isActive && "underline underline-offset-4"}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
