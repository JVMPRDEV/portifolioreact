import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Especialidades.css";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faShoppingCart, faBlog, faChartLine, faCode } from "@fortawesome/free-solid-svg-icons";

const especialidades = [
    {
        icon: faGlobe,
        title: "Website",
        description: "Criamos websites personalizados e responsivos para impulsionar sua presença online.",
    },
    {
        icon: faShoppingCart,
        title: "Loja Online",
        description: "Desenvolvemos lojas virtuais com foco em conversão e experiência do usuário.",
    },
    {
        icon: faBlog,
        title: "Blog",
        description: "Transformamos ideias em blogs envolventes e fáceis de gerenciar.",
    },
    {
        icon: faChartLine,
        title: "SEO",
        description: "Melhoramos o posicionamento do seu site nos mecanismos de busca.",
    },
    {
        icon: faCode,
        title: "Desenvolvimento",
        description: "Oferecemos desenvolvimento de sistemas personalizados para sua empresa.",
    },
];

const Especialidades = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            className="especialidades section-spacing"
            id="Especialidades"
            aria-label="Seção de especialidades"
        >
            <h2 className="title--port">
                NOSSAS <span>ESPECIALIDADES</span>
            </h2>
            {isLoading ? (
                <div
                    className="skeleton-especialidades-container"
                    aria-live="polite"
                    aria-busy="true"
                >
                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="skeleton-especialidades-box"
                            aria-label="Carregando especialidade"
                        >
                            <div className="skeleton-especialidades-spinner">
                                <ClipLoader color="#FFAA33" size={40} />
                            </div>
                            <h3 className="skeleton-especialidades-title">Carregando...</h3>
                            <p className="skeleton-especialidades-description">
                                Por favor, aguarde enquanto carregamos o conteúdo.
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => (
                            `<span class="${className}" role="button" tabindex="0" aria-current="${index === 0 ? 'true' : 'false'}" aria-label="Slide ${index + 1}"></span>`
                        ),
                    }}
                    observer={true}
                    observeParents={true}
                    breakpoints={{
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        0: { slidesPerView: 1, spaceBetween: 10 },
                    }}
                    className="swiper-wrapper"
                    aria-label="Carrossel de especialidades"
                >
                    {especialidades.map((especialidade, index) => (
                        <SwiperSlide
                            key={index}
                            className="swiper-slide"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`Slide ${index + 1} de ${especialidades.length}`}
                        >
                            <div className="especialidades--box" aria-labelledby={`especialidade-${index}-title`}>
                                <FontAwesomeIcon
                                    icon={especialidade.icon}
                                    className="especialidade-icon"
                                    aria-hidden="true"
                                />
                                <h3 id={`especialidade-${index}-title`}>{especialidade.title}</h3>
                                <p>{especialidade.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
};

export default Especialidades;
