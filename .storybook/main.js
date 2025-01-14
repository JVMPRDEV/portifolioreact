/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", // Padr�es existentes
        "../src/stories/**/*.stories.@(js|jsx|ts|tsx)" // Inclui o diret�rio 'src/stories'
    ],
    addons: [
        "@storybook/preset-create-react-app", // Configura��o para CRA
        "@storybook/addon-essentials",       // Inclui controles, docs, a��es e mais
        "@storybook/addon-interactions",     // Suporte a intera��es nos stories
        "@chromatic-com/storybook",          // Integra��o com Chromatic
        "@storybook/addon-links",            // Para links entre stories
        "@storybook/addon-controls",         // Controles de props dos componentes
        "@storybook/addon-viewport"          // Simula��o de diferentes tamanhos de tela
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    staticDirs: ["../public"], // Ajusta o caminho para incluir arquivos est�ticos corretamente
};

export default config;
