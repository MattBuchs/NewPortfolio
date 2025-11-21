import NavBar from "../components/Header/NavBar";
import NavbarProjects from "../components/Header/Navbar-Projects";
import IndexProject from "../components/Projects/Index.Project";
import ProjectsMobile from "../components/Projects/Mobile/ProjectsMobile";
import { useScreenSize } from "../hook/useScreenSize";
import { projects } from "../lib/projects";
import SEO from "../components/utils/SEO";

export default function Projects() {
    const windowSize = useScreenSize();

    return (
        <>
            <SEO
                title="Mes Projets"
                description="Découvrez tous mes projets de développement web - Applications React, sites web responsive, et projets Full Stack. Consultez mon portfolio de réalisations."
                keywords="projets web, portfolio projets, applications React, sites web, développement front-end, projets full stack"
                url="https://matt-buchs.me/projects"
            />
            {windowSize.width < 768 ? (
                <NavBar isProjectPage={true} />
            ) : (
                <NavbarProjects />
            )}

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
