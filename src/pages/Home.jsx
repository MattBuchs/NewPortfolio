import NavBar from "../components/Header/NavBar";
import Presentation from "../components/Home/Presentation";
import About from "../components/Home/About";
import Technos from "../components/Home/Technos";
import Footer from "../components/Footer";
import Services from "../components/Home/Services";

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <Presentation />
                <About />
                <Services />
                <Technos />
            </main>
            <Footer />
        </>
    );
}
