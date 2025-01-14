import React from "react";
import Main from "../../components/Main/Main";

export default {
    title: "Components/Main", // Título exibido no painel do Storybook
    component: Main,          // Componente sendo testado
};

const Template = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Estado padrão, gerenciado internamente
};

export const Loading = () => {
    // Simula o estado de carregamento inicial
    return (
        <div style={{ height: "100vh", overflow: "auto" }}>
            <Main isLoading={true} />
        </div>
    );
};
