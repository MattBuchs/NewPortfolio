import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useScreenSize } from "../../hook/useScreenSize";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar({ isProjectPage }) {
    const screenWidth = useScreenSize().width;
    const navRef = useRef(null);
    const modalRef = useRef(null);
    const [toggle, setToggle] = useState(false);
    const [disableParallax, setdisableParallax] = useState(false);

    useEffect(() => {
        if (screenWidth <= 640) setdisableParallax(true);
        else setdisableParallax(false);

        setToggle(false);
    }, [screenWidth]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                modalRef.current &&
                !modalRef.current.contains(event.target)
            ) {
                setToggle(false);
            }
        };

        if (toggle) document.addEventListener("mousedown", handleClickOutside);
        else document.removeEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggle]);

    // Animation variants pour la modal
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 },
        },
        exit: {
            opacity: 0,
            transition: { delay: 0.2, duration: 0.3 },
        },
    };

    const modalVariants = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
            },
        },
        exit: {
            y: "100%",
            transition: { duration: 0.3 },
        },
    };

    const menuItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 + custom * 0.1,
                duration: 0.5,
            },
        }),
    };

    return (
        <header
            className={`w-full mx-auto mt-3 absolute z-40 flex justify-center${
                isProjectPage ? "" : " sm:mt-8"
            }`}
        >
            <div className="max-w-[1250px] md:w-[90%] flex justify-between items-center w-full px-5">
                <h1 className="text-3xl font-semibold underline underline-offset-8 flex items-center">
                    <img
                        src="/img/Logo-Skroma.jpg"
                        alt=""
                        className="w-12 h-12 rounded-full hidden sm:inline"
                    />
                    <span className="drop-shadow mt-1 ml-2 font-vibes">
                        Matt Buchs
                    </span>
                </h1>

                <nav ref={navRef} className="h-full rounded-bl flex">
                    {disableParallax && (
                        <motion.button
                            className="sm:hidden w-14 h-14 flex items-center justify-center hover:bg-stone-200 rounded-full p-1.5"
                            onClick={() => setToggle(!toggle)}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Ouvrir le menu"
                            title="Ouvrir le menu"
                        >
                            <svg
                                width="67"
                                height="34"
                                viewBox="0 0 67 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full"
                            >
                                <rect
                                    x="8"
                                    width="59"
                                    height="4"
                                    rx="2"
                                    fill="black"
                                />
                                <rect
                                    y="15"
                                    width="67"
                                    height="4"
                                    rx="2"
                                    fill="black"
                                />
                                <path
                                    d="M25 32C25 30.8954 25.8954 30 27 30H65C66.1046 30 67 30.8954 67 32V32C67 33.1046 66.1046 34 65 34H27C25.8954 34 25 33.1046 25 32V32Z"
                                    fill="black"
                                />
                            </svg>
                        </motion.button>
                    )}

                    {/* Menu pour les écrans larges */}
                    {!disableParallax && (
                        <ul className="items-center h-full text-lg flex">
                            <li className="mr-4">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `${
                                            isActive &&
                                            "underline underline-offset-4"
                                        }`
                                    }
                                >
                                    Accueil
                                </NavLink>
                            </li>
                            <li className="mr-4">
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        `${
                                            isActive &&
                                            "underline underline-offset-4"
                                        }`
                                    }
                                >
                                    Projets
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `${
                                            isActive &&
                                            "underline underline-offset-4"
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>

            {/* Modal de navigation mobile */}
            <AnimatePresence>
                {toggle && disableParallax && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setToggle(false)}
                        />

                        <motion.div
                            ref={modalRef}
                            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg z-50 overflow-hidden"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div
                                className="flex justify-center pt-3 pb-4"
                                onClick={() => setToggle(false)}
                            >
                                <div className="w-16 h-1 bg-gray-300 rounded-full" />
                            </div>

                            <motion.h3
                                className="text-center text-2xl font-semibold mb-4"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { delay: 0.2 },
                                }}
                            >
                                Menu
                            </motion.h3>

                            <div className="p-6">
                                <ul className="space-y-1">
                                    <motion.li
                                        custom={0}
                                        variants={menuItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                `block py-2 px-4 text-lg ${
                                                    isActive
                                                        ? "bg-gray-100 text-black font-medium rounded-xl"
                                                        : "text-gray-700"
                                                }`
                                            }
                                            onClick={() => setToggle(false)}
                                        >
                                            Accueil
                                        </NavLink>
                                    </motion.li>
                                    <motion.li
                                        custom={1}
                                        variants={menuItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <NavLink
                                            to="/projects"
                                            className={({ isActive }) =>
                                                `block py-2 px-4 text-lg ${
                                                    isActive
                                                        ? "bg-gray-100 text-black font-medium rounded-xl"
                                                        : "text-gray-700"
                                                }`
                                            }
                                            onClick={() => setToggle(false)}
                                        >
                                            Projets
                                        </NavLink>
                                    </motion.li>
                                    <motion.li
                                        custom={2}
                                        variants={menuItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <NavLink
                                            to="/contact"
                                            className={({ isActive }) =>
                                                `block py-2 px-4 text-lg ${
                                                    isActive
                                                        ? "bg-gray-100 text-black font-medium rounded-xl"
                                                        : "text-gray-700"
                                                }`
                                            }
                                            onClick={() => setToggle(false)}
                                        >
                                            Contact
                                        </NavLink>
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
