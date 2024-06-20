import { Link } from "react-router-dom";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer";

export default function Error() {
    return (
        <>
            <NavBar />
            <main>
                <div className="w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] text-center">
                    <img
                        src="/img/404.jpg"
                        alt="Page not found"
                        className="rounded-full"
                    />
                    <div className="mt-4">
                        <p className="text-2xl font-semibold">
                            Page non trouvée
                        </p>
                        <Link
                            to="/"
                            className="block italic mt-1 hover:underline"
                        >
                            Cliqué ici pour revenir à l&apos;accueil
                        </Link>
                    </div>
                </div>
            </main>
            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </>
    );
}
