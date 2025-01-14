import React from "react";
import Header from "../../components/Header/Header"; // Caminho atualizado para o componente Header

export default {
    title: "Components/Header", // Título que será exibido no painel do Storybook
    component: Header,          // Componente sendo testado
    argTypes: {
        isMenuOpen: { control: "boolean" }, // Controle para abrir/fechar o menu
        theme: {
            control: { type: "select", options: ["light", "dark"] }, // Controle de tema
        },
    },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    isMenuOpen: false,
    theme: "dark",
};

export const MenuOpen = Template.bind({});
MenuOpen.args = {
    isMenuOpen: true,
    theme: "light",
};
