import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import pessoaImg from "../../assets/img/pessoa.png";
import "./LandingPageIntro.css";

const LandingPageIntro = ({ isLoading }) => {
    return (
        <section className="landing-intro" id="Inicio">
            <div className="landing-intro__content">
                <div className="landing-intro__left">
                    {isLoading ? (
                        <>
                            <Skeleton className="landing-intro__skeleton-title" />
                            <Skeleton count={3} className="landing-intro__skeleton-description" />
                            <Skeleton className="landing-intro__skeleton-button" />
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
                                    <button className="landing-intro__button">Entre em Contato</button>
                                </a>
                            </div>
                        </>
                    )}
                </div>
                <div className="landing-intro__right">
                    {isLoading ? (
                        <Skeleton className="landing-intro__skeleton-hexagon" />
                    ) : (
                        <img src={pessoaImg} alt="Pessoa" className="landing-intro__image" />
                    )}
                </div>
            </div>
        </section>
    );
};

export default LandingPageIntro;
