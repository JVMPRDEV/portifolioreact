import React from "react";
import "./TeamModal.css";

const TeamModal = ({ isOpen, imageSrc, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="image-modal" onClick={onClose}>
            <span className="close-modal" onClick={onClose}>
                &times;
            </span>
            <img className="modal-content" src={imageSrc} alt="Imagem do modal" />
        </div>
    );
};

export default TeamModal;
