import React from "react";
import Footer from "../../components/Footer/Footer";

export default {
    title: "Components/Footer", // T�tulo exibido no painel do Storybook
    component: Footer,          // Componente sendo testado
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Props n�o s�o necess�rias aqui, pois o Footer n�o aceita nenhuma diretamente
};
