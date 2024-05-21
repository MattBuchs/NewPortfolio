import NavBar from "../components/Header/NavBar";
import Presentation from "../components/Home/Presentation";
import About from "../components/Home/About";
import Technos from "../components/Home/Technos";

export default function Home() {
    return (
        <div className="">
            <NavBar />
            <main>
                <Presentation />
                <About />
                <Technos />
            </main>
        </div>
    );
}
