import React from "react";
import Formulario from "../../components/Formulario/Formulario";

export default {
    title: "Components/Formulario", // Título exibido no painel do Storybook
    component: Formulario,          // Componente sendo testado
};

const Template = (args) => <Formulario {...args} />;

export const Default = Template.bind({});
Default.args = {
    // O formulário não recebe props diretamente, então não há argumentos a configurar
};

export const Loading = () => {
    return (
        <div style={{ height: "400px" }}>
            <Formulario />
        </div>
    );
};
