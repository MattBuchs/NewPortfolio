import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-[1250px] md:w-[90%] w-full h-full mx-auto pt-6 pb-3">
                <nav>
                    <ul className="flex items-center">
                        <li className="mr-3 mb-1">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="mr-3 mb-1">
                            <Link to="/projects">Projets</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <p className="flex items-center justify-center">
                    <img
                        src="/img/Logo-Skroma.jpg"
                        alt="Logo"
                        className="w-6 h-6 rounded-full mr-2"
                    />
                    Matt Buchs - {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
