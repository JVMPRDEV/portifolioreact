import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import pessoaImg from "../../assets/img/pessoa.png";
import "./PrincipalContent.css";

const PrincipalContent = ({ isLoading }) => {
    return (
        <section className="landing-intro section-spacing" id="Inicio" aria-label="Introdução da página">
            <div className="landing-intro__content">
                <div className="landing-intro__left">
                    {isLoading ? (
                        <>
                            <Skeleton className="landing-intro__skeleton-title skeleton-animation" aria-label="Carregando título" />
                            <Skeleton
                                count={3}
                                className="landing-intro__skeleton-description skeleton-animation"
                                aria-label="Carregando descrição"
                            />
                            <Skeleton
                                className="landing-intro__skeleton-button skeleton-animation"
                                aria-label="Carregando botão"
                            />
                        </>
                    ) : (
                        <>
                            <h1 className="landing-intro__title">
                                DANDO CLAREZA AOS <span className="landing-intro__title--highlight">SEUS DADOS.</span>
                            </h1>
                            <p className="landing-intro__description">
                                Transformamos os dados da sua empresa em insights claros e estratégicos, integrando áreas do negócio e impulsionando decisões inteligentes.
                            </p>
                            <div className="landing-intro__button-wrapper">
                                <a href="#Contato">
                                    <button
                                        className="landing-intro__button"
                                        aria-label="Botão para entrar em contato"
                                    >
                                        Entre em Contato
                                    </button>
                                </a>
                            </div>
                        </>
                    )}
                </div>
                <div className="landing-intro__right">
                    {isLoading ? (
                        <Skeleton
                            className="landing-intro__skeleton-hexagon skeleton-animation"
                            aria-label="Carregando imagem"
                        />
                    ) : (
                        <img
                            src={pessoaImg}
                            alt="Ilustração de uma pessoa relacionada aos dados"
                            className="landing-intro__image"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default PrincipalContent;
