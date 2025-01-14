import React from "react";
import Portfolio from "../../components/Portfolio/Portfolio";

export default {
    title: "Components/Portfolio", // T�tulo exibido no painel do Storybook
    component: Portfolio,          // Componente sendo testado
};

const Template = (args) => <Portfolio {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Nenhuma prop � necess�ria, pois o estado inicial est� gerenciado internamente
};

export const Loading = () => {
    // Simula o estado de carregamento do portf�lio
    return (
        <div style={{ height: "400px" }}>
            <Portfolio />
        </div>
    );
};
