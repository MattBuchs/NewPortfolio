import { Link } from "react-router-dom";
import { ClipboardList } from "lucide-react";

export default function Services() {
    return (
        <section className="max-w-4xl md:w-[90%] w-full h-full mx-auto relative">
            <div className="pt-20 pb-8">
                <header className="mb-12">
                    <h2 className="text-3xl text-center font-semibold">
                        Services
                    </h2>
                    <div className="flex justify-center mt-6 relative">
                        <span className="w-10 h-10 border border-gray-300 rounded-full p-2.5 bg-gray-100">
                            <ClipboardList className="w-full h-full" />
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

                <main className="flex flex-col gap-8">
                    <section className="flex items-center gradient-card p-8 rounded-full">
                        <div className="min-w-[200px] h-[200px] flex justify-center items-center">
                            <img
                                src="/img/illustration/illustration-conception-de-sites-web-personnalisés.jpg"
                                alt=""
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>

                        <div className="ml-24">
                            <h3 className="text-xl font-semibold mb-3">
                                Conception et Développement de Sites Web
                                Personnalisés
                            </h3>
                            <p>
                                Je propose la création de sites web sur mesure,
                                adaptés à l&apos;identité et aux besoins
                                spécifiques de chaque client. Chaque projet est
                                conçu pour offrir une expérience utilisateur
                                intuitive, une navigation fluide et un design
                                moderne, garantissant une présence en ligne
                                professionnelle et efficace.
                            </p>
                            <Link
                                to="/contact"
                                className="text-sm italic text-blue-500 font-semibold hover:underline"
                            >
                                Demander un devis
                            </Link>
                        </div>
                    </section>

                    <section className="flex flex-row-reverse items-center gradient-card-inverse p-8 rounded-full">
                        <div className="min-w-[200px] h-[200px] flex justify-center items-center">
                            <img
                                src="/img/illustration/illustration-seo.webp"
                                alt=""
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>

                        <div className="mr-24">
                            <h3 className="text-xl font-semibold mb-3">
                                Optimisation des Performances et du
                                Référencement (SEO)
                            </h3>
                            <p>
                                Un site performant et bien référencé est
                                essentiel pour attirer et retenir les visiteurs.
                                J&apos;analyse et optimise la vitesse de
                                chargement, la structure du site et le contenu
                                pour améliorer la visibilité sur les moteurs de
                                recherche, assurant ainsi une meilleure position
                                dans les résultats et une augmentation du trafic
                                organique.
                            </p>
                        </div>
                    </section>

                    <section className="flex items-center gradient-card p-8 rounded-full">
                        <div className="min-w-[200px] h-[200px] flex justify-center items-center">
                            <img
                                src="/img/illustration/illustration-maintenance.jpg"
                                alt=""
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>

                        <div className="ml-24">
                            <h3 className="text-xl font-semibold mb-3">
                                Maintenance Continue et Support Technique
                            </h3>
                            <p>
                                Pour assurer la pérennité et la sécurité de
                                votre site, j&apos;offre des services de
                                maintenance régulière. Cela inclut les mises à
                                jour nécessaires, la surveillance de la
                                sécurité, la correction de bugs éventuels et un
                                support technique réactif, garantissant que
                                votre site reste opérationnel et sécurisé en
                                tout temps.
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    );
}
