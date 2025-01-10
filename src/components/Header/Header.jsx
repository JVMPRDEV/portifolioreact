import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton"; // Importando Skeleton
import "react-loading-skeleton/dist/skeleton.css"; // CSS para Skeleton
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import "./Header.css";
import logo from "../../assets/img/logo.png";

const Header = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const rootElement = document.documentElement;
        rootElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        // Simula carregamento
        const timeout = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timeout);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <header>
            <div className="interface">
                {/* Skeleton ou Logo */}
                <div className="logo">
                    {isLoading ? (
                        <Skeleton
                            height={50}
                            width={150}
                            borderRadius={10}
                            className="skeleton-logo"
                        />
                    ) : (
                        <a href="#Inicio" aria-label="Ir para o início">
                            <img src={logo} alt="Logo da empresa" />
                        </a>
                    )}
                </div>

                {/* Skeleton ou Navigation Menu */}
                {isLoading ? (
                    <Skeleton
                        height={30}
                        count={1}
                        className="skeleton-menu"
                        containerClassName="skeleton-menu-container"
                    />
                ) : (
                    <NavigationMenu className="menu-desktop">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="menu-link" href="#Inicio">
                                    Início
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="menu-link" href="#Especialidades">
                                    Especialidades
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="menu-link" href="#Sobre">
                                    Sobre
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="menu-link" href="#Projetos">
                                    Projetos
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                )}

                {/* Skeleton ou Botões de Ação */}
                <div className="header-btn-container">
                    {isLoading ? (
                        <>
                            <Skeleton height={40} width={120} borderRadius={30} />
                            <Skeleton height={40} width={40} borderRadius="50%" />
                        </>
                    ) : (
                        <>
                            <a href="#Contato" className="btn-contato">
                                <button>Contato</button>
                            </a>
                            <button
                                id="theme-switcher"
                                onClick={toggleTheme}
                                aria-label="Alterar tema"
                                className="theme-switcher-btn"
                            >
                                {theme === "dark" ? "🌙" : "☀️"}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
