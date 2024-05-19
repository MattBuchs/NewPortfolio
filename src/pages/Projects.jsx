import { useEffect, useRef, useState } from "react";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "O'Gaming",
            paragraph: "Projet d'apothéose qui finalisait la formation",
            img: "/OGaming.webp",
            bgColorLeft: "#c02f10",
            bgColorRight: "#f1f1f1",
        },
        {
            id: 2,
            title: "PlaySkroma",
            paragraph: "",
            img: "",
            bgColorLeft: "",
            bgColorRight: "",
        },
        {
            id: 3,
            title: "EscapeTime",
            paragraph: "",
            img: "",
            bgColorLeft: "",
            bgColorRight: "",
        },
        {
            id: 4,
            title: "AngelsGame-Reservation",
            paragraph: "",
            img: "",
            bgColorLeft: "",
            bgColorRight: "",
        },
        {
            id: 5,
            title: "EnglishLearning",
            paragraph: "",
            img: "",
            bgColorLeft: "",
            bgColorRight: "",
        },
        {
            id: 6,
            title: "DevCraftHub",
            paragraph: "",
            img: "",
            bgColorLeft: "",
            bgColorRight: "",
        },
    ];
    const sectionRefs = useRef([]);
    const circleRefs = useRef([]);

    const numProjects = projects.length;
    const radius = 200; // Rayon du grand cercle
    const smallCircleRadius = 9; // Rayon des petits cercles
    const positionX = 225;
    const positionY = 225;

    // Fonction pour calculer la position d'un petit cercle sur la circonférence
    const getCirclePosition = (index) => {
        const angle = (index / numProjects) * 2 * Math.PI - Math.PI / 2;
        const x = positionX + radius * Math.cos(angle);
        const y = positionY + radius * Math.sin(angle);
        return { x, y };
    };

    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const [touchedProject, setTouchedProject] = useState(null);

    const getRotatingCirclePosition = (progress) => {
        const angle = (progress / 100) * 2 * Math.PI - Math.PI / 2;
        const x = positionX + radius * Math.cos(angle);
        const y = positionY + radius * Math.sin(angle);
        return { x, y };
    };

    useEffect(() => {
        if (isPaused) {
            return;
        }

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress =
                    prevProgress < 100 ? prevProgress + 0.05 : 0;

                // Calculer la position de la boule tournante
                const { x: rotatingX, y: rotatingY } =
                    getRotatingCirclePosition(newProgress);

                // Vérifier si la boule tournante touche une des petites boules
                projects.forEach((project, index) => {
                    const { x, y } = getCirclePosition(index);
                    const distance = Math.sqrt(
                        (rotatingX - x) * (rotatingX - x) +
                            (rotatingY - y) * (rotatingY - y)
                    );
                    if (distance < smallCircleRadius + 5) {
                        // Ajustez cette valeur si nécessaire
                        if (touchedProject !== project.id) {
                            updateProject(
                                sectionRefs.current[index],
                                circleRefs.current[index]
                            );
                            setTouchedProject(project.id);
                        }
                    }
                });

                if (newProgress === 0) {
                    setTouchedProject(null);
                }

                return newProgress;
            });
        }, 10); // Ajustez cette valeur pour une croissance plus rapide ou plus lente
        return () => clearInterval(interval);
    }, [isPaused, touchedProject, projects]);

    const updateProject = (sectionRef, circleRef) => {
        sectionRefs.current.forEach((el) => el.classList.remove("z-40"));
        circleRefs.current.forEach((el) =>
            el.classList.remove("animate-scaleUp")
        );
        if (sectionRef) {
            sectionRef.classList.add("z-40");
        }

        if (circleRef) {
            circleRef.classList.add("animate-scaleUp");
        }
    };

    return (
        <div className="h-screen">
            {projects.map((project, index) => (
                <section
                    key={project.id}
                    className={`h-full w-full flex mb-4 absolute ${
                        index === 0 && "z-40"
                    }`}
                    ref={(el) => (sectionRefs.current[index] = el)}
                >
                    <div
                        className="w-1/2 h-full bg-blue-200"
                        style={{ background: project.bgColorLeft }}
                    >
                        {index % 2 === 0 ? (
                            <div className="w-full h-full flex items-end">
                                <article className="text-white mb-28 ml-20">
                                    <h2 className="text-3xl font-semibold">
                                        {project.title}
                                    </h2>
                                    <p className="text-lg">
                                        {project.paragraph}
                                    </p>
                                    <button className="border mt-6 px-6 py-2 rounded-full hover:bg-white/20">
                                        Voir le Projet →
                                    </button>
                                </article>
                            </div>
                        ) : (
                            <div className="w-full h-full flex justify-center items-center">
                                <img
                                    src={project.img}
                                    alt=""
                                    className="w-4/5"
                                />
                            </div>
                        )}
                    </div>
                    <div
                        className="w-1/2 h-full bg-green-200"
                        style={{ background: project.bgColorRight }}
                    >
                        {index % 2 !== 0 ? (
                            <div className="w-full h-full flex items-end">
                                <article className="text-white mb-28 ml-20">
                                    <h2 className="text-3xl font-semibold">
                                        {project.title}
                                    </h2>
                                    <p className="text-lg">
                                        {project.paragraph}
                                    </p>
                                    <button className="border mt-6 px-6 py-2 rounded-full hover:bg-white/20">
                                        Voir le Projet →
                                    </button>
                                </article>
                            </div>
                        ) : (
                            <div className="w-full h-full flex justify-center items-center">
                                <img
                                    src={project.img}
                                    alt=""
                                    className="w-4/5"
                                />
                            </div>
                        )}
                    </div>
                </section>
            ))}

            <section
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="hidden md:block absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px]"
            >
                <svg
                    width="450"
                    height="450"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx={positionX}
                        cy={positionY}
                        r={radius}
                        stroke="#c9bdbb"
                        strokeWidth="1"
                        fill="none"
                    />
                    <circle
                        cx={positionX}
                        cy={positionY}
                        r={radius}
                        stroke="#000"
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`0 ${2 * Math.PI * radius}`}
                        strokeDashoffset={`${
                            ((100 - progress) / 100) * (2 * Math.PI * radius) +
                            0.25 * (2 * Math.PI * radius)
                        }`}
                    />
                    {projects.map((project, index) => {
                        const { x, y } = getCirclePosition(index);
                        return (
                            <g
                                key={project.id}
                                transform={`translate(${x}, ${y})`}
                                className="cursor-pointer"
                                onClick={() => console.log(project.id)}
                            >
                                <circle
                                    cx="0"
                                    cy="0"
                                    r={smallCircleRadius}
                                    fill="#c9bdbb"
                                    className="transition-transform transform hover:scale-150"
                                    ref={(el) =>
                                        (circleRefs.current[index] = el)
                                    }
                                />
                            </g>
                        );
                    })}
                </svg>
            </section>
        </div>
    );
}
