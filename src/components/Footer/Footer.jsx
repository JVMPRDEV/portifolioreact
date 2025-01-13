import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Footer.css";
import logo from "../../assets/img/logo.png";

const Footer = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <footer aria-label="Rodapé">
            <div className="footer-container">
                {/* Logo ou Skeleton */}
                <div className="logo-footer">
                    {isLoading ? (
                        <Skeleton
                            height={50}
                            width={100}
                            borderRadius={10}
                            aria-label="Carregando logo"
                        />
                    ) : (
                        <img src={logo} alt="Logo do site" />
                    )}
                </div>

                {/* Direitos reservados ou Skeleton */}
                <div className="rights-footer">
                    {isLoading ? (
                        <Skeleton
                            height={20}
                            width={200}
                            aria-label="Carregando direitos reservados"
                        />
                    ) : (
                        <p>&copy; 2025 Todos os direitos reservados.</p>
                    )}
                </div>

                {/* Ícones sociais ou Skeleton */}
                <div className="social-footer">
                    {isLoading ? (
                        <>
                            <Skeleton
                                circle
                                height={35}
                                width={35}
                                aria-label="Carregando ícone do Instagram"
                            />
                            <Skeleton
                                circle
                                height={35}
                                width={35}
                                aria-label="Carregando ícone do Twitter"
                            />
                            <Skeleton
                                circle
                                height={35}
                                width={35}
                                aria-label="Carregando ícone do WhatsApp"
                            />
                        </>
                    ) : (
                        <>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Acesse o Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Acesse o Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.whatsapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Acesse o WhatsApp"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
