import { useState } from "react";
import * as EmailValidator from "email-validator";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function Form() {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        society: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const resetForm = () => {
        setFormData({
            lastName: "",
            firstName: "",
            email: "",
            phone: "",
            society: "",
            message: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.lastName.trim() ||
            !formData.email.trim() ||
            !formData.message.trim()
        ) {
            return setErrorMessage(
                "Veuillez remplir tous les champs obligatoires s'il vous plaît."
            );
        }

        if (!EmailValidator.validate(formData.email.trim())) {
            return setErrorMessage("Le format de l'email n'est pas valide.");
        }

        setIsSubmitting(true);
        setErrorMessage("");

        emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formData,
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    resetForm();
                    setSuccessMessage(true);
                    // Fermer automatiquement la notification après 5 secondes
                    setTimeout(() => {
                        setSuccessMessage(false);
                    }, 5000);
                },
                () => {
                    setErrorMessage(
                        "Une erreur s'est produite. Veuillez réessayer."
                    );
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="relative">
            <AnimatePresence>
                {successMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-4 right-4 z-50 bg-green-50 border border-green-200 shadow-lg rounded-lg px-6 py-4 max-w-md w-full flex items-center"
                    >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-green-900 mb-1">
                                Message envoyé avec succès !
                            </h3>
                            <p className="text-green-800 text-sm">
                                Merci pour votre message. Je vous répondrai dans
                                les plus brefs délais.
                            </p>
                        </div>
                        <button
                            className="ml-auto text-green-500 hover:text-green-700"
                            onClick={() => setSuccessMessage(false)}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <form className="px-2 lg:px-14 py-6" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="block md:w-[48%] mt-2">
                        <div>
                            <label htmlFor="last-name">Nom</label>
                            <span className="ml-1 text-red-600">*</span>
                        </div>
                        <input
                            type="text"
                            id="last-name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border border-black h-10 w-full rounded px-2"
                            required
                        />
                    </div>
                    <div className="md:w-[48%] mt-2">
                        <label htmlFor="first-name" className="block">
                            Prénom
                        </label>
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border border-black h-10 w-full rounded px-2"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="md:w-[48%] mt-2">
                        <div className="block">
                            <label htmlFor="email">Email</label>
                            <span className="ml-1 text-red-600">*</span>
                        </div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-black h-10 w-full rounded px-2"
                            required
                        />
                    </div>
                    <div className="md:w-[48%] mt-2">
                        <label htmlFor="phone" className="block">
                            Téléphone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border border-black h-10 w-full rounded px-2"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <label htmlFor="society">Société</label>
                    <input
                        type="text"
                        id="society"
                        name="society"
                        value={formData.society}
                        onChange={handleChange}
                        className="border border-black h-10 w-full rounded px-2"
                    />
                </div>
                <div className="mt-2">
                    <div className="block">
                        <label htmlFor="message">Message</label>
                        <span className="ml-1 text-red-600">*</span>
                    </div>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="resize-none border border-black rounded w-full h-32 px-2 py-1"
                        required
                    ></textarea>
                </div>

                <small className="text-red-600/85 italic text-xs block mt-0.5">
                    * Champ obligatoire
                </small>
                {errorMessage && (
                    <motion.p
                        className="text-red-600 mt-2 px-3 py-2 bg-red-50 rounded border border-red-100"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {errorMessage}
                    </motion.p>
                )}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative flex justify-center items-center bg-blue-800 text-white font-semibold px-8 py-2 mt-4 rounded shadow hover:bg-blue-900 transition-all duration-300 ${
                        isSubmitting ? "opacity-80" : "hover:scale-[0.98]"
                    }`}
                >
                    {isSubmitting ? (
                        <>
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Envoi en cours...
                        </>
                    ) : (
                        "Envoyer"
                    )}
                </button>
            </form>
        </div>
    );
}
