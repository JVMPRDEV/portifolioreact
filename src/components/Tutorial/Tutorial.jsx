import React, { useEffect, useRef } from "react";
import "./Tutorial.css";

const Tutorial = ({ onClose }) => {
    const modalRef = useRef();

    // Foco no modal ao abrir
    useEffect(() => {
        modalRef.current?.focus();

        // Fechar com "Esc"
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            className="tutorial-overlay"
            onClick={onClose}
            role="dialog"
            aria-labelledby="tutorial-title"
            aria-describedby="tutorial-description"
        >
            <div
                className="tutorial-modal"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
                ref={modalRef}
            >
                <h2 id="tutorial-title">Bem-vindo!</h2>
                <p id="tutorial-description">
                    Este site permite que você altere o tema!
                    Clique no ícone de <strong>lua</strong> ou <strong>sol</strong> no canto superior direito para alternar entre os modos claro e escuro.
                </p>
                <button
                    onClick={onClose}
                    className="tutorial-btn"
                    aria-label="Fechar tutorial"
                >
                    Entendi
                </button>
            </div>
        </div>
    );
};

export default Tutorial;
