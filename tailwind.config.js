/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                scaleUp: {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.5)" },
                },
            },
            animation: {
                scaleUp: "scaleUp 0.3s forwards",
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
