/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFAA33", // Cor personalizada para uso em botões, textos, etc.
                secondary: "#121212", // Fundo escuro
                light: "#f3f3f3", // Texto claro
                accent: "#FFA500", // Destaque
            },
            fontFamily: {
                sans: ['"Poppins"', "sans-serif"], // Fonte personalizada
                heading: ['"League Gothic"', "sans-serif"], // Fonte para títulos
            },
            boxShadow: {
                'custom-light': "0 0 10px rgba(255, 255, 255, 0.35)",
                'custom-dark': "0 0 10px rgba(0, 0, 0, 0.8)",
            },
            spacing: {
                '72': "18rem", // Espaçamento personalizado
                '84': "21rem",
                '96': "24rem",
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'), // Suporte para estilização de formulários
        require('@tailwindcss/typography'), // Suporte para tipografia
    ],
};
