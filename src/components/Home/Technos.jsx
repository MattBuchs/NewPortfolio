import { useRef } from "react";

export default function Technos() {
    const cardRefs = useRef([]);
    const technos = [
        { id: 1, title: "JavaScript", img: "Javascript.png" },
        { id: 2, title: "TypeScript", img: "Typescript.png" },
        { id: 3, title: "Tailwind", img: "Tailwind.png" },
        { id: 4, title: "Sass", img: "Sass.png" },
        { id: 5, title: "React", img: "React.png" },
        { id: 6, title: "Next.js", img: "Nextjs.png" },
        { id: 7, title: "Node.js", img: "Node.png" },
        { id: 8, title: "PostgreSQL", img: "Postgres.png" },
        { id: 9, title: "MongoDB", img: "Mongo.png" },
        { id: 10, title: "Git", img: "Git.png" },
    ];

    const rotateToMouse = (e, index) => {
        const card = cardRefs.current[index];
        const bounds = card.getBoundingClientRect();
        const mouseX = e.clientX - bounds.x;
        const mouseY = e.clientY - bounds.y;
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;
        const rotateX = ((mouseY - centerY) / centerY) * 10;
        const rotateY = ((centerX - mouseX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

        card.querySelector(".glow").style.backgroundImage = `
            radial-gradient(
                circle at
                ${mouseX}px
                ${mouseY}px,
                #ffffffa5,
                #0000000f
            )
        `;
    };

    const resetCard = (index) => {
        const card = cardRefs.current[index];
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        card.querySelector(".glow").style.backgroundImage = "none";
    };

    return (
        <section className="max-w-[1250px] md:w-[90%] w-full h-full mx-auto relative">
            <div className="py-20">
                <header>
                    <h2 className="text-3xl text-center font-semibold">
                        Technos
                    </h2>
                    <div className="flex justify-center mt-6 relative">
                        <span className="w-10 h-10 border border-gray-300 rounded-full p-1.5 bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 500 500"
                            >
                                <defs>
                                    <clipPath id="a">
                                        <path d="M0 0h500v500H0z" />
                                    </clipPath>
                                    <clipPath id="c">
                                        <path d="M0 0h500v500H0z" />
                                    </clipPath>
                                    <clipPath id="b">
                                        <path d="M0 0h500v500H0z" />
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#a)">
                                    <g className="primary design">
                                        <path className="primary" />
                                        <path className="primary" />
                                    </g>
                                    <g className="primary design">
                                        <path
                                            d="M289.37 174.185c0-4.166-1.666-8.123-4.582-11.04L209.592 87.95c-6.25-6.04-16.04-6.04-22.08 0-6.04 6.041-6.249 16.04 0 22.08l48.534 48.534H78.155c-8.54 0-15.623 7.082-15.623 15.622s7.082 15.623 15.623 15.623h157.891l-48.534 48.534c-6.249 6.04-6.249 16.039 0 22.08 3.125 3.124 7.082 4.582 11.04 4.582s7.915-1.458 11.04-4.582l75.196-75.197a15.6 15.6 0 0 0 4.583-11.04m132.479 136.02H263.957l48.534-48.534c6.04-6.04 6.04-16.04 0-22.08s-16.04-6.04-22.08 0l-75.196 75.196c-6.04 6.041-6.04 16.04 0 22.08l75.196 75.196c3.125 3.125 7.082 4.583 11.04 4.583s7.915-1.458 11.04-4.583c6.04-6.04 6.04-16.039 0-22.08l-48.534-48.533h157.891c8.54 0 15.623-7.083 15.623-15.623s-7.082-15.622-15.623-15.622"
                                            className="primary"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <hr
                            className="h-0.5 w-2/5 absolute mt-[18px] -z-10"
                            style={{
                                background:
                                    "linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgba(209, 213, 219, 1) 50%, rgba(0, 0, 0, 0) 90%)",
                            }}
                        />
                    </div>
                </header>

                <div className="flex flex-wrap justify-center mt-10">
                    {technos.map((techno, index) => (
                        <div
                            key={techno.id}
                            onMouseMove={(e) => rotateToMouse(e, index)}
                            onMouseLeave={() => resetCard(index)}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="techno-card w-[250px] bg-slate-100 m-4 flex flex-col justify-center items-center py-8 border rounded shadow"
                        >
                            <img
                                src={`/img/technos/${techno.img}`}
                                alt={techno.title}
                                className="h-20"
                            />
                            <p className="mt-4 text-lg">{techno.title}</p>
                            <div className="glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
