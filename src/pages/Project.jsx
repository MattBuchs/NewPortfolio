import { useParams } from "react-router-dom";
import { projects } from "../lib/projects";
import NavBar from "../components/Header/NavBar";

export default function Project() {
    const params = useParams();
    const project = projects.find((project) => project.slug === params.slug);

    return (
        <>
            <NavBar isProjectPage={true} />
            <main className="max-w-4xl md:w-[90%] w-full h-full mx-auto relative pt-20 px-4">
                <h2>Project : {project.title}</h2>
            </main>
        </>
    );
}
