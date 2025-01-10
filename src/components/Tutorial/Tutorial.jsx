import React from "react";
import "./Tutorial.css";

const Tutorial = ({ onClose }) => {
    return (
        <div className="tutorial-overlay">
            <div className="tutorial-modal">
                <h2>Bem-vindo!</h2>
                <p>
                    Este site permite que você altere o tema! Clique no ícone de <strong>lua</strong> ou <strong>sol</strong> no canto superior direito para alternar entre os modos claro e escuro.
                </p>
                <button onClick={onClose} className="tutorial-btn">
                    Entendi
                </button>
            </div>
        </div>
    );
};

export default Tutorial;
