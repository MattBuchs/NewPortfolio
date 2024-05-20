/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            dropShadow: {
                "custom-shadow": "0 4px 6px rgba(0, 0, 0, 0.3)",
                "custom-shadow-circle": "0 4px 6px rgba(0, 0, 0, 0.1)",
            },
            keyframes: {
                scaleUp: {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.5)" },
                },
                fadeIn: {
                    "0%": {
                        opacity: "0",
                    },
                    100: {
                        opacity: "1",
                    },
                },
            },
            animation: {
                scaleUp: "scaleUp 0.3s forwards",
                fadeIn: "fadeIn 0.5s ease-in-out forwards",
            },
        },
    },
    variants: {
        extend: {
            animation: ["motion-safe"],
        },
    },
    plugins: [],
};
