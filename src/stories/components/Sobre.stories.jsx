import React, { useState } from "react";
import Sobre from "../../components/Sobre/Sobre";

export default {
    title: "Components/Sobre", // T�tulo exibido no painel do Storybook
    component: Sobre,          // Componente sendo testado
};

const Template = (args) => <Sobre {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Estado padr�o, sem props espec�ficas
};

export const Loading = () => {
    // Simula o estado de carregamento inicial
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => setIsLoading(false), 2000); // Carregamento termina ap�s 2 segundos

    return <Sobre isLoading={isLoading} />;
};

export const ModalOpen = () => {
    // Simula o modal aberto com uma imagem selecionada
    const [isModalOpen, setIsModalOpen] = useState(true);
    const selectedImage = "https://via.placeholder.com/300";

    return (
        <div>
            <Sobre />
            {isModalOpen && (
                <div
                    className="general-overlay"
                    onClick={() => setIsModalOpen(false)}
                    role="dialog"
                    aria-labelledby="modal-title"
                    aria-hidden={!isModalOpen}
                    tabIndex="-1"
                >
                    <img
                        src={selectedImage}
                        alt="Imagem ampliada de um membro da equipe"
                        className="modal-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <span
                        className="close-modal"
                        onClick={() => setIsModalOpen(false)}
                        role="button"
                        aria-label="Fechar modal"
                    >
                        &times;
                    </span>
                </div>
            )}
        </div>
    );
};
