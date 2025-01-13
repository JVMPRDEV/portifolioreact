import React, { useState, useEffect } from "react";
import "./Main.css";
import Especialidades from "../Especialidades/Especialidades";
import Sobre from "../Sobre/Sobre";
import Portfolio from "../Portfolio/Portfolio";
import Formulario from "../Formulario/Formulario";
import LandingPageIntro from "../LandingPageIntro/LandingPageIntro";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <main>
            <LandingPageIntro isLoading={isLoading} />
            <Especialidades />
            <Sobre />
            <Portfolio />
            <Formulario />
        </main>
    );
};

export default Main;
