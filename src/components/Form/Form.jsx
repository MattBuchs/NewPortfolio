import { useState } from "react";
import * as EmailValidator from "email-validator";
import emailjs from "@emailjs/browser";

export default function Form() {
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        lastName: null,
        firstName: null,
        email: null,
        phone: null,
        society: null,
        message: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(import.meta.env.VITE_SERVICE_ID);

        if (
            !formData.lastName.trim() ||
            !formData.email.trim() ||
            !formData.message.trim()
        ) {
            return setErrorMessage(
                "Veuillez remplir tous les champs obligatoire s'il vous plaît."
            );
        }

        if (!EmailValidator.validate(formData.email.trim())) {
            return setErrorMessage("Le format de l'email n'est pas valide.");
        }

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
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );

        setErrorMessage("");
    };

    return (
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
                    onChange={handleChange}
                    className="resize-none border border-black rounded w-full h-32 px-2 py-1"
                    required
                ></textarea>
            </div>

            <small className="text-red-600/85 italic text-xs block mt-0.5">
                * Champ obligatoire
            </small>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <button className="block bg-blue-800 text-white font-semibold px-8 pb-2 pt-1 mt-4 rounded shadow hover:bg-blue-900 hover:scale-95">
                Envoyer
            </button>
        </form>
    );
}
