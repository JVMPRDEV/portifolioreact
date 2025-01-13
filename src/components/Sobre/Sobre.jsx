import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import "./Sobre.css";
import foto1 from "../../assets/img/foto1.png";
import foto2 from "../../assets/img/foto2.png";
import foto3 from "../../assets/img/foto3.png";

const teamMembers = [
    {
        name: "João Rocha",
        imgSrc: foto1,
        description: [
            "Desenvolvedor full-stack com foco em criar soluções web inovadoras e eficientes.",
            "Apaixonado por tecnologia, amo transformar ideias em realidade digital e criar projetos que fazem a diferença.",
        ],
        socialLinks: {
            instagram: "https://www.instagram.com",
            whatsapp: "https://www.whatsapp.com",
            facebook: "https://www.facebook.com",
        },
    },
    {
        name: "José Ambrozi",
        imgSrc: foto2,
        description: [
            "Designer gráfico apaixonado por criar identidades visuais que cativam e transformam marcas.",
            "Meu foco está em unir criatividade e estratégia para alcançar resultados visuais impactantes.",
        ],
        socialLinks: {
            instagram: "https://www.instagram.com",
            whatsapp: "https://www.whatsapp.com",
            facebook: "https://www.facebook.com",
        },
    },
    {
        name: "Ciro Ambrozi",
        imgSrc: foto3,
        description: [
            "Especialista em dados e inteligência de negócios, transformando números em decisões estratégicas.",
            "Acredito no poder dos dados para guiar empresas rumo ao sucesso.",
        ],
        socialLinks: {
            instagram: "https://www.instagram.com",
            whatsapp: "https://www.whatsapp.com",
            facebook: "https://www.facebook.com",
        },
    },
];

const Sobre = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.querySelector(".general-overlay").focus();
        }
    }, [isModalOpen]);

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const renderSkeleton = () =>
        Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="team-card skeleton-card">
                <div className="loading-container" role="status" aria-live="polite">
                    <ClipLoader color="#FFAA33" size={40} aria-hidden="true" />
                    <h3 className="loading-text">Carregando...</h3>
                    <p className="loading-description">Estamos carregando as informações. Por favor, aguarde.</p>
                </div>
            </div>
        ));

    const renderTeamMember = (member, index) => (
        <div key={index} className="team-card">
            <div className="img-sobre" onClick={() => openModal(member.imgSrc)}>
                <img src={member.imgSrc} alt={`Foto de ${member.name}`} />
            </div>
            <div className="txt-sobre">
                <h3 className="team-name">{member.name}</h3>
                {member.description.map((desc, i) => (
                    <p key={i} className="sobre--description">
                        {desc}
                    </p>
                ))}
            </div>
            <div className="btn-social">
                {Object.entries(member.socialLinks).map(([platform, link], i) => (
                    <a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Acessar o perfil de ${member.name} no ${platform}`}
                    >
                        <i className={`fab fa-${platform}`}></i>
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <section className="sobre section-spacing" id="Sobre">
            <div className="interface">
                <h2 className="title--port">
                    MUITO PRAZER, <span>CONHEÇA NOSSA EQUIPE</span>
                </h2>
                <div className={`team-container ${isModalOpen ? "hidden" : ""}`}>
                    {isLoading ? renderSkeleton() : teamMembers.map(renderTeamMember)}
                </div>

                {/* Modal */}
                {isModalOpen && selectedImage && (
                    <div
                        className="general-overlay"
                        onClick={closeModal}
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
                            onClick={closeModal}
                            role="button"
                            aria-label="Fechar modal"
                        >
                            &times;
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Sobre;
