import React from "react";
import Especialidades from "../../components/Especialidades/Especialidades";

export default {
    title: "Components/Especialidades", // Título exibido no Storybook
    component: Especialidades,          // Componente sendo testado
    argTypes: {
        // Defina controles para as props que o componente aceita
        propExample: { control: "text" }, // Exemplo: Controle para props string
    },
};

const Template = (args) => <Especialidades {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Adicione valores padrões para as props aqui
    propExample: "Texto padrão",
};
