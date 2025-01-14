import React, { useState, useEffect } from "react";
import "./Main.css";
import Especialidades from "../Especialidades/Especialidades";
import Sobre from "../Sobre/Sobre";
import Portfolio from "../Portfolio/Portfolio";
import Formulario from "../Formulario/Formulario";
import PrincipalContent from "../PrincipalContent/PrincipalContent";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <main role="main" aria-label="Conteúdo principal">
            <PrincipalContent isLoading={isLoading} />
            <section aria-labelledby="especialidades-title">
                <Especialidades />
            </section>
            <section aria-labelledby="sobre-title">
                <Sobre />
            </section>
            <section aria-labelledby="portfolio-title">
                <Portfolio />
            </section>
            <section aria-labelledby="formulario-title">
                <Formulario />
            </section>
        </main>
    );
};

export default Main;
