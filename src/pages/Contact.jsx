import NavBar from "../components/Header/NavBar";
import BarLink from "../components/utils/BarLink";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
            <NavBar />
            <main>
                <section className="max-w-[1250px] md:w-[90%] w-full h-screen mx-auto flex items-center">
                    <div className="h-3/5 w-full flex items-center justify-center px-32">
                        <div className="w-2/3">
                            <h2 className="text-center text-2xl underline">
                                Me contacter
                            </h2>
                            <form className="px-14 py-6">
                                <div className="flex justify-between">
                                    <div className="block w-[48%] mt-2">
                                        <div>
                                            <label htmlFor="last-name">
                                                Nom
                                            </label>
                                            <span className="ml-1 text-red-600">
                                                *
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            id="last-name"
                                            name="last-name"
                                            className="border border-black h-10 w-full rounded px-2"
                                            required
                                        />
                                    </div>
                                    <div className="w-[48%] mt-2">
                                        <label
                                            htmlFor="first-name"
                                            className="block"
                                        >
                                            Prénom
                                        </label>
                                        <input
                                            type="text"
                                            id="first-name"
                                            name="first-name"
                                            className="border border-black h-10 w-full rounded px-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="w-[48%] mt-2">
                                        <div className="block">
                                            <label htmlFor="email">Email</label>
                                            <span className="ml-1 text-red-600">
                                                *
                                            </span>
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="border border-black h-10 w-full rounded px-2"
                                            required
                                        />
                                    </div>
                                    <div className="w-[48%] mt-2">
                                        <label
                                            htmlFor="phone"
                                            className="block"
                                        >
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="border border-black h-10 w-full rounded px-2"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="society">Société</label>
                                    <input
                                        type="text"
                                        id="society"
                                        name="society"
                                        className="border border-black h-10 w-full rounded px-2"
                                    />
                                </div>
                                <div className="mt-2">
                                    <div className="block">
                                        <label htmlFor="message">Message</label>
                                        <span className="ml-1 text-red-600">
                                            *
                                        </span>
                                    </div>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="resize-none border border-black rounded w-full h-24 px-2 py-1"
                                        required
                                    ></textarea>
                                </div>

                                <small className="text-red-600 italic text-xs">
                                    * Champ obligatoire
                                </small>
                                <button className="block bg-blue-800 text-white font-semibold px-8 pb-2 pt-1 mt-4 rounded shadow hover:bg-blue-900 hover:scale-95">
                                    Envoyer
                                </button>
                            </form>
                        </div>
                        <div className="bg-slate-600 w-1/3">
                            <h3 className="text-center">Infos</h3>
                        </div>
                    </div>
                </section>
                <BarLink isBarVisible={true} />
            </main>
            <Footer />
        </>
    );
}
