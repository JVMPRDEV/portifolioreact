import React, { useState, useEffect } from "react";
import "./styles/style.css"; // Estilos globais
import "./styles/responsive.css"; // Estilos responsivos
import "./styles/variables.css"; // Variáveis CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Tutorial from "./components/Tutorial/Tutorial"; // Importar o componente Tutorial

const App = () => {
    const [showTutorial, setShowTutorial] = useState(false);

    // Verifica se é a primeira visita
    useEffect(() => {
        const isFirstVisit = localStorage.getItem("visited");
        if (!isFirstVisit) {
            setShowTutorial(true);
            localStorage.setItem("visited", "true");
        }
    }, []);

    const handleCloseTutorial = () => {
        setShowTutorial(false);
    };

    return (
        <div className="App">
            {showTutorial && <Tutorial onClose={handleCloseTutorial} />}
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
