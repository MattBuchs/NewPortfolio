import NavBar from "../components/Header/NavBar";
import Presentation from "../components/Home/Presentation";
import About from "../components/Home/About";
import Technos from "../components/Home/Technos";
import Footer from "../components/Footer";
import Services from "../components/Home/Services";
import SEO from "../components/utils/SEO";

export default function Home() {
    return (
        <>
            <SEO
                title="Matt Buchs - Développeur Web Full Stack"
                description="Portfolio de Matt Buchs - Développeur Web Full Stack spécialisé en React, Node.js et JavaScript. Découvrez mes projets et compétences en développement web moderne."
                keywords="Matt Buchs, développeur web, full stack, React, JavaScript, Node.js, portfolio, développeur front-end, développeur back-end"
                url="https://matt-buchs.me/"
            />
            <NavBar />
            <main className="overflow-x-hidden">
                <Presentation />
                <About />
                <Services />
                <Technos />
            </main>
            <Footer />
        </>
    );
}
