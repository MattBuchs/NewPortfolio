import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectsMobile({ projects = false }) {
    return (
        <div className="px-4 py-6 bg-stone-100 pt-20">
            <h1 className="text-2xl font-bold text-center mb-6">Mes Projets</h1>

            <div className="flex flex-col gap-6">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="bg-white border border-black/20 rounded-lg overflow-hidden shadow"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="h-48 py-2 relative overflow-hidden"
                            style={{
                                background: `linear-gradient(to top, #fff 0%, ${
                                    project.bgColor + "60"
                                } 30%, ${project.bgColor} 100%)`,
                            }}
                        >
                            <img
                                src={`/img/${project.img}`}
                                alt={project.title}
                                className="w-full h-full object-contain p-2 rounded"
                            />
                        </div>

                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 mb-4">
                                {project.paragraph}
                            </p>

                            <div className="flex justify-between items-center">
                                <Link
                                    to={`/project/${project.id}`}
                                    className="text-blue-500 font-semibold hover:underline"
                                >
                                    Voir le projet
                                </Link>

                                <div className="flex gap-2">
                                    <span className="inline-block px-3 py-1 text-xs bg-gray-100 rounded-full">
                                        #{project.id}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
