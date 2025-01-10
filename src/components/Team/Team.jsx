import React from "react";

const teamMembers = [
    {
        name: "João Rocha",
        imgSrc: "img/foto1.png",
        description: [
            "Desenvolvedor full-stack com foco em criar soluções web inovadoras e eficientes.",
            "Apaixonado por tecnologia, amo transformar ideias em realidade digital e criar projetos que fazem a diferença."
        ],
        socialLinks: {
            instagram: "https://www.instagram.com",
            whatsapp: "https://www.whatsapp.com",
            facebook: "https://www.facebook.com"
        }
    },
    {
        name: "José Ambrozi",
        imgSrc: "img/foto2.png",
        description: [
            "Designer gráfica apaixonada por criar identidades visuais que cativam e transformam marcas.",
            "Meu foco está em unir criatividade e estratégia para alcançar resultados visuais impactantes."
        ],
        socialLinks: {
            instagram: "https://www.instagram.com",
            whatsapp: "https://www.whatsapp.com",
            facebook: "https://www.facebook.com"
        }
    },
    // Outros membros...
];

const Team = () => {
    return (
        <div id="team-container">
            {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                    <div className="img-sobre">
                        <img src={member.imgSrc} alt={`Foto de ${member.name}`} />
                    </div>
                    <div className="txt-sobre">
                        <h3 className="team-name">{member.name}</h3>
                        {member.description.map((desc, i) => (
                            <p key={i} className="sobre--description">{desc}</p>
                        ))}
                    </div>
                    <div className="btn-social">
                        <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href={member.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;
