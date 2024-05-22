import { useRef } from "react";

export default function Technos() {
    const cardRefs = useRef([]);
    const technos = [
        { id: 1, title: "JavaScript", img: "Javascript.png" },
        { id: 2, title: "Node.js", img: "Node.png" },
        { id: 3, title: "React", img: "React.png" },
        { id: 4, title: "Tailwind", img: "Tailwind.png" },
        { id: 5, title: "Sass", img: "Sass.png" },
        { id: 6, title: "PostgreSQL", img: "Postgres.png" },
        { id: 7, title: "MongoDB", img: "Mongo.png" },
        { id: 8, title: "Git", img: "Git.png" },
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
                <h2 className="text-3xl font-semibold underline underline-offset-4 ml-14">
                    Technos
                </h2>

                <div className="flex flex-wrap justify-center mt-8">
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
