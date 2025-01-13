import React, { useEffect, useState, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaHome, FaStar, FaInfoCircle, FaProjectDiagram, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"; // Ícones do React Icons
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@radix-ui/react-collapsible";
import "./Header.css";
import logo from "../../assets/img/logo.png";

const Header = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const rootElement = document.documentElement;
        rootElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        const timeout = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timeout);
    }, [theme]);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isMenuOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isMenuOpen]);

    const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const menuItems = [
        { name: "Início", icon: <FaHome /> },
        { name: "Especialidades", icon: <FaStar /> },
        { name: "Sobre", icon: <FaInfoCircle /> },
        { name: "Projetos", icon: <FaProjectDiagram /> },
    ];

    const renderMenuLinks = () =>
        menuItems.map((item) => (
            <li key={item.name}>
                <a href={`#${item.name}`} onClick={toggleMenu}>
                    <span className="menu-icon">{item.icon}</span> {item.name}
                </a>
            </li>
        ));

    const renderNavigationMenu = () =>
        menuItems.map((item) => (
            <NavigationMenuItem key={item.name}>
                <NavigationMenuLink className="menu-link" href={`#${item.name}`}>
                    <span className="menu-icon">{item.icon}</span>
                    <span>{item.name}</span>
                </NavigationMenuLink>
            </NavigationMenuItem>
        ));

    return (
        <header>
            {/* Overlay para escurecer o fundo */}
            {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)} />}

            <div className="interface">
                {/* Menu Lateral */}
                {!isLoading && (
                    <Collapsible open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <CollapsibleContent className="menu-sidebar" ref={sidebarRef}>
                            <div className="menu-header">
                                <button
                                    className="menu-close-btn"
                                    aria-label="Fechar menu"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <FaTimes />
                                </button>
                                <div className="menu-logo">
                                    <a href="#Inicio" aria-label="Ir para o início">
                                        <img src={logo} alt="Logo da empresa" />
                                    </a>
                                </div>
                            </div>

                            <nav className="menu-nav">
                                <ul>{renderMenuLinks()}</ul>
                            </nav>
                            <footer className="menu-footer">
                                © 2025 Todos os direitos reservados.
                            </footer>
                        </CollapsibleContent>

                        <CollapsibleTrigger asChild>
                            <button
                                className="menu-hamburger"
                                aria-label="Abrir menu"
                                onClick={toggleMenu}
                            >
                                <FaBars />
                            </button>
                        </CollapsibleTrigger>
                    </Collapsible>
                )}

                {/* Logo */}
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

                {/* Menu de Navegação (Desktop) */}
                {!isLoading && (
                    <NavigationMenu className="menu-desktop">
                        <NavigationMenuList>{renderNavigationMenu()}</NavigationMenuList>
                    </NavigationMenu>
                )}

                {/* Botões de Ação */}
                <div className="header-btn-container">
                    {isLoading ? (
                        <>
                            <Skeleton height={40} width={120} borderRadius={30} />
                            <Skeleton height={40} width={40} borderRadius="50%" />
                        </>
                    ) : (
                        <>
                            <a href="#Contato" className="header-btn-contato">
                                <button>Contato</button>
                            </a>
                            <button
                                id="theme-switcher"
                                onClick={toggleTheme}
                                aria-label="Alterar tema"
                                className="theme-switcher-btn"
                            >
                                {theme === "dark" ? <FaMoon /> : <FaSun />}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
