import React, { useEffect, useState, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
    FaHome,
    FaStar,
    FaProjectDiagram,
    FaSun,
    FaMoon,
    FaBars,
    FaTimes,
    FaUsers,
    FaEnvelope,
} from "react-icons/fa";
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
        { name: "Inicio", icon: <FaHome />, id: "Inicio" },
        { name: "Especialidades", icon: <FaStar />, id: "Especialidades" },
        { name: "Nossa Equipe", icon: <FaUsers />, id: "Sobre" }, // Nome exibido diferente do id
        { name: "Projetos", icon: <FaProjectDiagram />, id: "Projetos" },
    ];

    const renderMenuLinks = () => {
        const itemsWithContact = [
            ...menuItems,
            { name: "Contato", icon: <FaEnvelope />, id: "Contato" },
        ];

        return itemsWithContact.map((item) => (
            <li key={item.id}>
                <a href={`#${item.id}`} onClick={toggleMenu}>
                    <span className="menu-icon">{item.icon}</span> {item.name}
                </a>
            </li>
        ));
    };

    const renderNavigationMenu = () =>
        menuItems.map((item) => (
            <NavigationMenuItem key={item.id}>
                <NavigationMenuLink className="menu-link" href={`#${item.id}`}>
                    <span className="menu-icon">{item.icon}</span>
                    <span>{item.name}</span>
                </NavigationMenuLink>
            </NavigationMenuItem>
        ));

    return (
        <header className={isMenuOpen ? "menu-open" : ""}>
            {/* Overlay */}
            {isMenuOpen && <div className="general-overlay" onClick={() => setIsMenuOpen(false)} />}

            <div className="interface">
                {/* Sidebar Menu */}
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
                                    <a
                                        href="#Inicio"
                                        aria-label="Ir para o início"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <img src={logo} alt="Logo da empresa" />
                                    </a>
                                </div>
                            </div>
                            <nav className="menu-nav">
                                <ul>{renderMenuLinks()}</ul>
                            </nav>
                            <div className="menu-footer">
                                © 2025 Todos os direitos reservados.
                            </div>
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
                            className="header-skeleton-logo"
                        />
                    ) : (
                        <a href="#Inicio" aria-label="Ir para o início">
                            <img src={logo} alt="Logo da empresa" />
                        </a>
                    )}
                </div>

                {/* Desktop Navigation Menu */}
                {!isLoading && (
                    <NavigationMenu className="menu-desktop">
                        <NavigationMenuList>{renderNavigationMenu()}</NavigationMenuList>
                    </NavigationMenu>
                )}

                {/* Action Buttons */}
                <div className="header-btn-container">
                    {isLoading ? (
                        <>
                            <Skeleton
                                height={40}
                                width={40}
                                borderRadius="50%"
                                className="header-skeleton-theme-switcher"
                            />
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
