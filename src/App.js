import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // Importar Helmet
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/variables.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Tutorial from "./components/Tutorial/Tutorial";

const App = () => {
    const [showTutorial, setShowTutorial] = useState(false);

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
            <Helmet>
                <meta name="description" content="Aplicação React com foco em SEO, acessibilidade e experiência do usuário. Explore especialidades, portfólio e muito mais." />
                <title>Home - Minha Aplicação React</title>
            </Helmet>
            {showTutorial && <Tutorial onClose={handleCloseTutorial} />}
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
