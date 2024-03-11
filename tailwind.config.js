/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        container: {
            center: true,
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },

        extend: {
            colors: {
                strongCyan: "hsl(171, 66%, 44%)",
                lightBlue: "hsl(233, 100%, 69%)",
                darkGrayishBlue: "hsl(210, 10%, 33%)",
                grayishBlue: "hsl(201, 11%, 66%)",
                shadowStrongCyan: "rgba(38, 187, 164, .5)",
                shadowLightBlue: "rgba(97, 115, 255, .5)",
            },
            fontFamily: {
                sans: ["Bai Jamjuree", "sans-serif"],
            },
        },
    },
    plugins: [],
};
