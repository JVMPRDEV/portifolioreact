import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Especialidades.css";
import { ClipLoader } from "react-spinners"; // Importando o spinner do react-spinners
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faShoppingCart, faBlog, faChartLine, faCode } from "@fortawesome/free-solid-svg-icons";

const especialidades = [
    { icon: faGlobe, title: "Website", description: "Criamos websites personalizados e responsivos para impulsionar sua presença online." },
    { icon: faShoppingCart, title: "Loja Online", description: "Desenvolvemos lojas virtuais com foco em conversão e experiência do usuário." },
    { icon: faBlog, title: "Blog", description: "Transformamos ideias em blogs envolventes e fáceis de gerenciar." },
    { icon: faChartLine, title: "SEO", description: "Melhoramos o posicionamento do seu site nos mecanismos de busca." },
    { icon: faCode, title: "Desenvolvimento", description: "Oferecemos desenvolvimento de sistemas personalizados para sua empresa." },
];

const Especialidades = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000); // Simula carregamento
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="especialidades section-spacing" id="Especialidades">
            <h2 className="title--port">
                NOSSAS <span>ESPECIALIDADES</span>
            </h2>
            {isLoading ? (
                <div className="skeleton-container">
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="especialidades--box skeleton-box">
                            <div className="skeleton-spinner-container">
                                <ClipLoader color="#FFAA33" size={40} /> {/* Spinner do react-spinners */}
                            </div>
                            <h3>Carregando...</h3>
                            <p>Por favor, aguarde enquanto carregamos o conteúdo.</p>
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
                    }}
                    breakpoints={{
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        480: { slidesPerView: 1, spaceBetween: 10 },
                    }}
                    className="swiper-wrapper"
                >
                    {especialidades.map((especialidade, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <div className="especialidades--box">
                                <FontAwesomeIcon icon={especialidade.icon} className="especialidade-icon" />
                                <h3>{especialidade.title}</h3>
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
