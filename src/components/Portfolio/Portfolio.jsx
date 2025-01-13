import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Portfolio.css";
import imagem1 from "../../assets/img/imagem1.jpg";
import imagem2 from "../../assets/img/imagem2.jpg";
import imagem3 from "../../assets/img/imagem3.jpg";
import imagem4 from "../../assets/img/imagem4.jpg";
import imagem5 from "../../assets/img/imagem5.jpg";
import imagem6 from "../../assets/img/imagem6.jpg";
import Isotope from "isotope-layout";

const filtros = [
    { label: "Todos", filter: "*" },
    { label: "Websites", filter: ".web" },
    { label: "Apps", filter: ".app" },
    { label: "SEO", filter: ".seo" },
];

const projetos = [
    { categoria: "web", imagem: imagem1, titulo: "Website 1" },
    { categoria: "app", imagem: imagem2, titulo: "App 1" },
    { categoria: "seo", imagem: imagem3, titulo: "SEO 1" },
    { categoria: "web", imagem: imagem4, titulo: "Website 2" },
    { categoria: "app", imagem: imagem5, titulo: "App 2" },
    { categoria: "seo", imagem: imagem6, titulo: "SEO 2" },
];

const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Atualiza o estado de carregamento
    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    // Atualiza a largura da tela dinamicamente
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Inicializa e gerencia o Isotope para filtros
    useEffect(() => {
        if (!isLoading) {
            const iso = new Isotope(".grid", {
                itemSelector: ".img-port",
                layoutMode: "fitRows",
                transitionDuration: "0.4s",
            });

            const handleFilterClick = (e) => {
                const button = e.target;
                const filterValue = button.getAttribute("data-filter");
                iso.arrange({ filter: filterValue });
                document.querySelector(".filters .active").classList.remove("active");
                button.classList.add("active");
            };

            const filterButtons = document.querySelectorAll(".filters button");
            filterButtons.forEach((button) =>
                button.addEventListener("click", handleFilterClick)
            );

            return () => {
                filterButtons.forEach((button) =>
                    button.removeEventListener("click", handleFilterClick)
                );
            };
        }
    }, [isLoading]);

    // Abre o modal com a imagem selecionada
    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
        document.body.classList.add("no-interaction");
    };

    // Fecha o modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        document.body.classList.remove("no-interaction");
    };

    // Função para renderizar Skeleton
    const renderSkeletonGrid = () => {
        const columns = screenWidth <= 768 ? 2 : 3; // 2 colunas no celular, 3 no desktop
        const rows = 3; // Sempre 3 linhas
        const totalSkeletons = columns * rows;

        return (
            <div className="grid" id="portfolio-grid">
                {Array.from({ length: totalSkeletons }).map((_, index) => (
                    <div key={index} className="skeleton-card">
                        <div className="loading-container">
                            <ClipLoader color="#FFAA33" size={40} />
                            <p className="loading-text">Carregando...</p>
                            <p className="loading-description">Por favor, aguarde.</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <section className="portfolio section-spacing" id="Projetos">
                <h2 className="title--port">
                    Nosso <span>PORTFÓLIO</span>
                </h2>

                {/* Filtros */}
                <div className="filters" id="portfolio-filters">
                    {isLoading
                        ? Array.from({ length: filtros.length }).map((_, index) => (
                            <Skeleton
                                key={index}
                                className="skeleton-filter"
                                height={40}
                                width={100}
                                style={{ borderRadius: "8px" }}
                            />
                        ))
                        : filtros.map((filtro, index) => (
                            <button
                                key={index}
                                className={index === 0 ? "active" : ""}
                                data-filter={filtro.filter}
                            >
                                {filtro.label}
                            </button>
                        ))}
                </div>

                {/* Projetos ou Skeleton */}
                {isLoading ? renderSkeletonGrid() : (
                    <div className="grid" id="portfolio-grid">
                        {projetos.map((projeto, index) => (
                            <div
                                key={index}
                                className={`img-port ${projeto.categoria}`}
                                style={{ backgroundImage: `url(${projeto.imagem})` }}
                                onClick={() => openModal(projeto.imagem)}
                            >
                                <div className="overlay">{projeto.titulo}</div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <img
                        src={selectedImage}
                        alt="Projeto"
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <span className="close-modal" onClick={closeModal}>
                        ×
                    </span>
                </div>
            )}
        </>
    );
};

export default Portfolio;
