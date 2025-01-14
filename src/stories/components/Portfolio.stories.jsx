import React from "react";
import Portfolio from "../../components/Portfolio/Portfolio";

export default {
    title: "Components/Portfolio", // Título exibido no painel do Storybook
    component: Portfolio,          // Componente sendo testado
};

const Template = (args) => <Portfolio {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Nenhuma prop é necessária, pois o estado inicial está gerenciado internamente
};

export const Loading = () => {
    // Simula o estado de carregamento do portfólio
    return (
        <div style={{ height: "400px" }}>
            <Portfolio />
        </div>
    );
};
