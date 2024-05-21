import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ProjectSection from "../components/Projects/ProjectSection";
import CircleNavigator from "../components/Projects/CircleNavigator";
import ControlButton from "../components/Projects/ControlButton";
import NavbarProjects from "../components/Header/Navbar-Projects";

export default function Projects() {
    const projects = useMemo(
        () => [
            {
                id: 1,
                title: "EscapeTime",
                paragraph: "Timer réalisé pour un Escape Game",
                img: "/timer.jpg",
                bgColorLeft: "#2b3231",
                bgColorRight: "#f1f1f1",
                class: "w-full h-full object-cover",
            },
            {
                id: 2,
                title: "PlaySkroma",
                paragraph: "Projet d'un site repertoriant plusieurs jeux",
                img: "/jeux-plateau.jpg",
                bgColorLeft: "#f1f1f1",
                bgColorRight: "#563f31",
                class: "w-full h-full object-cover",
            },
            {
                id: 3,
                title: "O'Gaming",
                paragraph: "App de report de bugs pour les devs de jeux vidéos",
                img: "/OGaming.webp",
                bgColorLeft: "#620c03",
                bgColorRight: "#f1f1f1",
                class: "w-full h-full object-contain mx-10 mb-52",
            },
            {
                id: 4,
                title: "AngelsGame-Reservation",
                paragraph: "Projet de réservation pour un Escape Game",
                img: "/reservation.jpg",
                bgColorLeft: "#e8dcc6",
                bgColorRight: "#095150",
                class: "w-full h-full object-contain mx-16",
            },
            {
                id: 5,
                title: "EnglishLearning",
                paragraph: "App pour apprendre l'anglais sous forme de card",
                img: "/english.jpg",
                bgColorLeft: "#c27470",
                bgColorRight: "#f1f1f1",
                class: "w-3/5 rounded absolute top-24 right-10 shadow",
            },
            {
                id: 6,
                title: "DevCraftHub",
                paragraph: "Projet de création d'un éditeur de texte en ligne",
                img: "/IDE.jpg",
                bgColorLeft: "#f1f1f1",
                bgColorRight: "#08121a",
                class: "w-full h-full object-cover",
            },
        ],
        []
    );
    const sectionRefs = useRef([]);
    const circleRefs = useRef([]);

    const numProjects = projects.length;
    const radius = 200; // Rayon du grand cercle
    const smallCircleRadius = 9; // Rayon des petits cercles
    const positionX = 225;
    const positionY = 225;

    const getCirclePosition = useCallback(
        (index) => {
            const angle = (index / numProjects) * 2 * Math.PI - Math.PI / 2;
            const x = positionX + radius * Math.cos(angle);
            const y = positionY + radius * Math.sin(angle);
            return { x, y };
        },
        [numProjects]
    );

    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isPausedClicked, setIsPausedClicked] = useState(false);
    const [touchedProject, setTouchedProject] = useState(null);

    const getRotatingCirclePosition = (progress) => {
        const angle = (progress / 100) * 2 * Math.PI - Math.PI / 2;
        const x = positionX + radius * Math.cos(angle);
        const y = positionY + radius * Math.sin(angle);
        return { x, y };
    };

    useEffect(() => {
        if (isPaused || isPausedClicked) {
            return;
        }

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress =
                    prevProgress < 100 ? prevProgress + 0.05 : 0;

                const { x: rotatingX, y: rotatingY } =
                    getRotatingCirclePosition(newProgress);

                projects.forEach((project, index) => {
                    const { x, y } = getCirclePosition(index);
                    const distance = Math.sqrt(
                        (rotatingX - x) * (rotatingX - x) +
                            (rotatingY - y) * (rotatingY - y)
                    );
                    if (distance < smallCircleRadius + 5) {
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
        }, 10);
        return () => clearInterval(interval);
    }, [
        isPaused,
        isPausedClicked,
        touchedProject,
        projects,
        getCirclePosition,
    ]);

    const updateProject = (sectionRef, circleRef) => {
        sectionRefs.current.forEach((el) => {
            if (el.classList.contains("z-40")) {
                el.classList.remove("z-40");
                el.classList.remove("animate-fadeIn");
                el.classList.add("z-30");
            }
        });
        circleRefs.current.forEach((el) =>
            el.classList.remove("animate-scaleUp")
        );

        if (sectionRef) {
            sectionRef.classList.add("z-40");
            sectionRef.classList.add("animate-fadeIn");
        }

        if (circleRef) {
            circleRef.classList.add("animate-scaleUp");
        }

        setTimeout(() => {
            sectionRefs.current.forEach((el) => {
                if (el.classList.contains("z-30")) {
                    el.classList.remove("z-30");
                }
            });
        }, 500);
    };

    const handleCircleClick = (index) => {
        const angle = (index / numProjects) * 360;
        const newProgress = (angle / 360) * 100;

        setProgress(newProgress);
        updateProject(sectionRefs.current[index], circleRefs.current[index]);
    };

    return (
        <>
            <NavbarProjects />
            <main>
                <div className="h-screen">
                    {projects.map((project, index) => (
                        <ProjectSection
                            key={project.id}
                            project={project}
                            index={index}
                            setIsPaused={setIsPaused}
                            sectionRefs={sectionRefs}
                        />
                    ))}

                    <CircleNavigator
                        projects={projects}
                        getCirclePosition={getCirclePosition}
                        handleCircleClick={handleCircleClick}
                        progress={progress}
                        setIsPaused={setIsPaused}
                        circleRefs={circleRefs}
                    />

                    <ControlButton
                        isPausedClicked={isPausedClicked}
                        setIsPausedClicked={setIsPausedClicked}
                    />
                </div>
            </main>
        </>
    );
}
