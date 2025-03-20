import { useEffect, useState } from "react";
import BarLink from "../utils/BarLink";
import "./Card.css";

export default function Presentation() {
    const [isBarVisible, setIsBarVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const handleScroll = () => {
        const technosSection = document.querySelector("#technos");
        const barLink = document.querySelector("#barLink");

        if (technosSection && barLink) {
            const technosRect = technosSection.getBoundingClientRect();
            const mainRect = barLink.getBoundingClientRect();

            const currentScrollTop =
                window.pageYOffset || document.documentElement.scrollTop;

            const isScrollingDown = currentScrollTop > lastScrollTop;

            if (isScrollingDown) {
                // Scroll down logic
                const technosInView =
                    technosRect.top <= window.innerHeight &&
                    technosRect.bottom >= 0;

                setIsBarVisible(!technosInView);
            } else {
                // Scroll up logic
                const barLinkInView =
                    mainRect.top <= window.innerHeight && mainRect.bottom >= 0;

                setIsBarVisible(barLinkInView);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="max-w-[1250px] md:w-[90%] h-full w-full mx-auto relative">
            <div className="px-5 flex flex-col-reverse lg:flex-row items-center pt-44 lg:pt-0 sm:min-h-screen">
                <article className="w-full sm:w-5/6 lg:w-1/2 px-4 sm:px-10 mt-24 lg:mt-0 mb-20 lg:mb-4">
                    <p className="flex items-center">
                        <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M17.5 8.83334C17.5 14.6667 10 19.6667 10 19.6667C10 19.6667 2.5 14.6667 2.5 8.83334C2.5 6.84422 3.29018 4.93656 4.6967 3.53004C6.10322 2.12352 8.01088 1.33334 10 1.33334C11.9891 1.33334 13.8968 2.12352 15.3033 3.53004C16.7098 4.93656 17.5 6.84422 17.5 8.83334Z"
                                    stroke="currentColor"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M10 11.3333C11.3807 11.3333 12.5 10.2141 12.5 8.83334C12.5 7.45263 11.3807 6.33334 10 6.33334C8.61929 6.33334 7.5 7.45263 7.5 8.83334C7.5 10.2141 8.61929 11.3333 10 11.3333Z"
                                    stroke="#101828"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                        transform="translate(0 0.5)"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="ml-2 font-semibold">
                            Pontarlier, France
                        </span>
                    </p>
                    <h2 className="flex flex-col text-2xl mt-2">
                        Hello,{" "}
                        <span>
                            je suis{" "}
                            <strong className="fon font-bold">
                                Matt Buchs
                            </strong>
                            ,
                        </span>
                    </h2>
                    <p className="mt-4">
                        Développeur Web & Mobile passionné par les nouvelles
                        technologies, je suis désormais freelance, offrant mes
                        services aux entreprises et particuliers. Diplômé du
                        Titre Professionnel de Développeur Web, j&apos;ai depuis
                        mené divers projets qui ont enrichi mes compétences
                        techniques. Curieux, logique et pragmatique, je
                        m&apos;efforce de proposer des solutions innovantes et
                        adaptées aux besoins spécifiques de chaque client.
                    </p>
                </article>
                <div className="w-[70%] min-w-[200px] sm:w-[45%] lg:w-1/2 -ml-6 sm:-ml-0 relative flex justify-center">
                    <div className="lg:w-[70%] h-full rounded-lg shadow-lg relative ml-10">
                        <div className="card rounded-lg bg-slate-100">
                            <img
                                src="/img/me.png"
                                alt=""
                                className="w-full h-1/2 select-none"
                            />
                            <img
                                src="/img/light-accent-compressed.png"
                                alt=""
                                className="absolute -bottom-1/2 -left-[60%] min-w-[170%] -rotate-12 select-none"
                            />
                        </div>
                    </div>
                </div>

                <BarLink isBarVisible={isBarVisible} />
            </div>
        </section>
    );
}
