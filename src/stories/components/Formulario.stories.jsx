import React from "react";
import Formulario from "../../components/Formulario/Formulario";

export default {
    title: "Components/Formulario", // T�tulo exibido no painel do Storybook
    component: Formulario,          // Componente sendo testado
};

const Template = (args) => <Formulario {...args} />;

export const Default = Template.bind({});
Default.args = {
    // O formul�rio n�o recebe props diretamente, ent�o n�o h� argumentos a configurar
};

export const Loading = () => {
    return (
        <div style={{ height: "400px" }}>
            <Formulario />
        </div>
    );
};
