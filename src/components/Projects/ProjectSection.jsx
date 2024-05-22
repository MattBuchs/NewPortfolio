const ProjectSection = ({ project, index, setIsPaused, sectionRefs }) => {
    return (
        <section
            className={`h-full w-full flex mb-4 absolute ${
                index === 0 ? "z-40" : ""
            }`}
            ref={(el) => (sectionRefs.current[index] = el)}
        >
            <div
                className="w-1/2 h-full"
                style={{ background: project.bgColorLeft }}
            >
                {index % 2 === 0 ? (
                    <div className="w-full h-full flex items-end">
                        <article
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            className="text-white mb-28 ml-24"
                        >
                            <h2 className="text-3xl font-semibold">
                                {project.title}
                            </h2>
                            <p className="text-lg">{project.paragraph}</p>
                            <button className="border mt-6 px-6 py-2 rounded-full hover:bg-white/20">
                                Voir le Projet →
                            </button>
                        </article>
                    </div>
                ) : (
                    <div className="w-full h-full flex justify-center items-center">
                        <img
                            src={`/img/${project.img}`}
                            alt=""
                            className={project.class}
                        />
                    </div>
                )}
            </div>
            <div
                className="w-1/2 h-full"
                style={{ background: project.bgColorRight }}
            >
                {index % 2 !== 0 ? (
                    <div className="w-full h-full flex items-end">
                        <article
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            className="text-white mb-28 ml-44"
                        >
                            <h2 className="text-3xl font-semibold">
                                {project.title}
                            </h2>
                            <p className="text-lg">{project.paragraph}</p>
                            <button className="border mt-6 px-6 py-2 rounded-full hover:bg-white/20">
                                Voir le Projet →
                            </button>
                        </article>
                    </div>
                ) : (
                    <div className="w-full h-full flex justify-center items-center relative">
                        <img
                            src={`/img/${project.img}`}
                            alt=""
                            className={project.class}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;
