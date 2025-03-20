import { useMemo } from "react";
import NavbarProjects from "../components/Header/Navbar-Projects";
import IndexProject from "../components/Projects/Index.Project";
import { useScreenSize } from "../hook/useScreenSize";
import ProjectsMobile from "../components/Projects/Mobile/ProjectsMobile";

export default function Projects() {
    const projects = useMemo(
        () => [
            {
                id: 1,
                title: "EscapeTime",
                paragraph: "Timer réalisé pour un Escape Game",
                img: "timer.jpg",
                bgColorLeft: "#2b3231",
                bgColorRight: "#f1f1f1",
                class: "w-full h-full object-cover",
            },
            {
                id: 2,
                title: "PlaySkroma",
                paragraph: "Projet d'un site repertoriant plusieurs jeux",
                img: "jeux-plateau.jpg",
                bgColorLeft: "#f1f1f1",
                bgColorRight: "#563f31",
                class: "w-full h-full object-cover",
            },
            {
                id: 3,
                title: "O'Gaming",
                paragraph: "App de report de bugs pour les devs de jeux vidéos",
                img: "OGaming.webp",
                bgColorLeft: "#620c03",
                bgColorRight: "#f1f1f1",
                class: "w-full h-full object-contain mx-10 mb-52",
            },
            {
                id: 4,
                title: "Angel's Game",
                paragraph: "Réalisation d'un site web pour un Escape Game",
                img: "illustration-escape-game.jpg",
                bgColorLeft: "#f1f1f1",
                bgColorRight: "#093b51",
                class: "w-[400px] h-auto absolute top-32 left-14 rounded shadow",
            },
            {
                id: 5,
                title: "EnglishLearning",
                paragraph: "App pour apprendre l'anglais sous forme de card",
                img: "english.jpg",
                bgColorLeft: "#965151",
                bgColorRight: "#f1f1f1",
                class: "w-3/5 rounded absolute top-24 right-10 shadow",
            },
            {
                id: 6,
                title: "ScaP",
                paragraph:
                    "Réalisation d'une application mobile de scan de produit pour un client",
                img: "phone-scap.png",
                bgColorLeft: "#f1f1f1",
                bgColorRight: "#3c6620",
                class: "w-[300px] h-auto absolute top-20 left-5 mx-16",
            },
            {
                id: 7,
                title: "DevCraftHub",
                paragraph: "Projet de création d'un éditeur de texte en ligne",
                img: "IDE.jpg",
                bgColorLeft: "#08121a",
                bgColorRight: "#f1f1f1",
                class: "w-full h-full object-cover",
            },
        ],
        []
    );

    const windowSize = useScreenSize();

    return (
        <>
            <NavbarProjects />
            <main>
                {windowSize.width < 768 ? (
                    <ProjectsMobile projects={projects} />
                ) : (
                    <IndexProject projects={projects} />
                )}
            </main>
        </>
    );
}
