import NavBar from "../components/Header/NavBar";
import BarLink from "../components/utils/BarLink";

export default function Contact() {
    return (
        <>
            <NavBar />
            <main>
                <section className="max-w-[1250px] md:w-[90%] w-full h-full mx-auto">
                    Contact
                    <BarLink isBarVisible={true} />
                </section>
            </main>
        </>
    );
}
