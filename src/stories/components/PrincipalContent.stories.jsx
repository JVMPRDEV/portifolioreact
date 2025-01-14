import React from "react";
import PrincipalContent from "../../components/PrincipalContent/PrincipalContent";

export default {
    title: "Components/PrincipalContent", // Título exibido no painel do Storybook
    component: PrincipalContent,          // Componente sendo testado
    argTypes: {
        isLoading: { control: "boolean" }, // Controle para simular o estado de carregamento
    },
};

const Template = (args) => <PrincipalContent {...args} />;

export const Default = Template.bind({});
Default.args = {
    isLoading: false, // O estado padrão é com conteúdo carregado
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true, // Simula o estado de carregamento
};
