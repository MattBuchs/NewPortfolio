import NavBar from "../components/Header/NavBar";
import Form from "../components/Form/Form";
import BarLink from "../components/utils/BarLink";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
            <NavBar />
            <main>
                <div className="bg-magic w-full h-screen fixed top-0 -z-10"></div>
                <section className="max-w-[1250px] lg:w-[90%] lg:h-screen w-full mx-auto flex items-center">
                    <div className="h-3/5 w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:px-10 xl:px-32">
                        <div className="min-w-[66.67%] my-14">
                            <h2 className="text-2xl font-semibold underline px-2 lg:px-14">
                                Me contacter
                            </h2>
                            <Form />
                        </div>
                        <div className="bg-slate-700 w-full lg:w-1/3 text-white py-6 mt-28 lg:mt-0 rounded border border-slate-500 shadow">
                            <h3 className="text-center text-2xl underline font-semibold">
                                Infos
                            </h3>
                            <ul className="flex flex-col items-center mt-4 mb-1">
                                <li className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="white"
                                        height="20"
                                        width="20"
                                    >
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                    </svg>
                                    <a
                                        href="mailto:mattbuchs25@gmail.com"
                                        className="mx-2 my-1 hover:underline"
                                    >
                                        mattbuchs25@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="white"
                                        height="20"
                                        width="20"
                                    >
                                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                    </svg>
                                    <a
                                        href="tel:0664935294"
                                        className="mx-2 my-1 hover:underline"
                                    >
                                        06 64 93 52 94
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        fill="white"
                                        height="20"
                                        width="20"
                                    >
                                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                    </svg>
                                    <p className="mx-2 my-1">25300 Arçon</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <BarLink isBarVisible={true} />
            </main>
            <Footer />
        </>
    );
}
