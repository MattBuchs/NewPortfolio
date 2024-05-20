import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ProjectSection from "../components/Projects/ProjectSection";
import CircleNavigator from "../components/Projects/CircleNavigator";
import ControlButton from "../components/Projects/ControlButton";

export default function Projects() {
    const projects = useMemo(
        () => [
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

    const handleCircleClick = (index) => {
        const angle = (index / numProjects) * 360;
        const newProgress = (angle / 360) * 100;

        setProgress(newProgress);
        updateProject(sectionRefs.current[index], circleRefs.current[index]);
    };

    return (
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
    );
}
