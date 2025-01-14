import React from "react";
import Footer from "../../components/Footer/Footer";

export default {
    title: "Components/Footer", // Título exibido no painel do Storybook
    component: Footer,          // Componente sendo testado
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Props não são necessárias aqui, pois o Footer não aceita nenhuma diretamente
};
