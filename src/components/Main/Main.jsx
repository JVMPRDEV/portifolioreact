import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Main.css";
import Especialidades from "../Especialidades/Especialidades";
import Sobre from "../Sobre/Sobre";
import Portfolio from "../Portfolio/Portfolio";
import Formulario from "../Formulario/Formulario";
import pessoaImg from "../../assets/img/pessoa.png";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000); // Simula carregamento por 2 segundos
        return () => clearTimeout(timeout);
    }, []);

    return (
        <main>
            <section className="section--principal section-spacing" id="Inicio">
                <div className="interface">
                    <div className="flex">
                        <div className="section--left">
                            {isLoading ? (
                                <>
                                    <Skeleton className="skeleton-title" />
                                    <Skeleton count={3} className="skeleton-description" />
                                    <Skeleton className="skeleton-button" />
                                </>
                            ) : (
                                <>
                                    <h1 className="section--title">
                                        DANDO CLAREZA AOS <span>SEUS DADOS.</span>
                                    </h1>
                                    <p className="section--description">
                                        Transformamos os dados da sua empresa em insights claros e estratégicos, integrando áreas do negócio e impulsionando decisões inteligentes.
                                    </p>
                                    <div className="btn-contato">
                                        <a href="#Contato">
                                            <button>Entre em Contato</button>
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="section--rigth">
                            {isLoading ? (
                                <Skeleton className="skeleton-hexagon" />
                            ) : (
                                <img src={pessoaImg} alt="Pessoa" className="hexagonal-image" />
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Especialidades />
            <Sobre />
            <Portfolio />
            <Formulario />
        </main>
    );
};

export default Main;
