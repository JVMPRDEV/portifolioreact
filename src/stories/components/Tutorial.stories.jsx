import React, { useState } from "react";
import Tutorial from "../../components/Tutorial/Tutorial";

export default {
    title: "Components/Tutorial", // Título exibido no painel do Storybook
    component: Tutorial,          // Componente sendo testado
};

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        alert("Tutorial fechado!");
    };

    return (
        <>
            {isOpen && <Tutorial {...args} onClose={handleClose} />}
            {!isOpen && <p>Tutorial fechado. Clique para reabrir.</p>}
        </>
    );
};

export const Default = Template.bind({});
Default.args = {};
