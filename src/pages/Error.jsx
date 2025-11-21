import { Link } from "react-router-dom";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer";
import SEO from "../components/utils/SEO";

export default function Error() {
    return (
        <>
            <SEO
                title="Page non trouvée - Erreur 404"
                description="La page que vous recherchez n'existe pas. Retournez à l'accueil du portfolio de Matt Buchs."
                url="https://matt-buchs.me/404"
            />
            <NavBar />
            <main>
                <div className="w-full max-w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] text-center">
                    <img src="/img/404.jpg" alt="" className="rounded-full" />
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold">
                            Page non trouvée
                        </h2>
                        <Link
                            to="/"
                            className="block italic mt-1 hover:underline"
                        >
                            Cliquer ici pour revenir à l&apos;accueil
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
