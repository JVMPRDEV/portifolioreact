/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", // Padrões existentes
        "../src/stories/**/*.stories.@(js|jsx|ts|tsx)" // Inclui o diretório 'src/stories'
    ],
    addons: [
        "@storybook/preset-create-react-app", // Configuração para CRA
        "@storybook/addon-essentials",       // Inclui controles, docs, ações e mais
        "@storybook/addon-interactions",     // Suporte a interações nos stories
        "@chromatic-com/storybook",          // Integração com Chromatic
        "@storybook/addon-links",            // Para links entre stories
        "@storybook/addon-controls",         // Controles de props dos componentes
        "@storybook/addon-viewport"          // Simulação de diferentes tamanhos de tela
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    staticDirs: ["../public"], // Ajusta o caminho para incluir arquivos estáticos corretamente
};

export default config;
