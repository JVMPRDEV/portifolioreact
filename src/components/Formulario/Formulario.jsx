import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "emailjs-com";
import "./Formulario.css";

// Validação com Yup
const validationSchema = Yup.object({
    name: Yup.string().required("Por favor, informe seu nome completo."),
    email: Yup.string()
        .email("Formato inválido")
        .required("Por favor, informe seu e-mail."),
    cellphone: Yup.string()
        .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Formato inválido. Use (XX) XXXXX-XXXX.")
        .required("Por favor, informe seu celular."),
    message: Yup.string().required("Por favor, digite sua mensagem."),
});

const Formulario = () => {
    const [isLoading, setIsLoading] = useState(true);

    const {
        handleSubmit,
        control,
        register,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                "service_mjy7u8d", // Substitua pelo seu service_id
                "template_pl2tfoj", // Substitua pelo seu template_id
                {
                    from_name: data.name,
                    from_email: data.email,
                    cellphone: data.cellphone,
                    message: data.message,
                },
                "dSOu7Mj0reuzXZcuH" // Substitua pelo seu user_id
            );
            alert("Mensagem enviada com sucesso!");
            reset();
        } catch (error) {
            console.error("Erro ao enviar o e-mail:", error);
            alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
        }
    };

    // Função para aplicar a máscara
    const applyMask = (value) => {
        return value
            .replace(/\D/g, "") // Remove todos os caracteres que não são dígitos
            .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3") // Aplica a máscara
            .replace(/(-\d{4})\d+?$/, "$1"); // Impede que mais dígitos sejam inseridos
    };

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="formulario section-spacing" id="Contato" aria-label="Formulário de contato">
            <div className="form-box">
                <h2 className="title--port title--form">
                    FALE <span>CONOSCO</span>
                </h2>
                {isLoading ? (
                    <div className="skeleton-container" aria-busy="true" aria-live="polite">
                        <div className="skeleton skeleton-line" aria-hidden="true"></div>
                        <div className="skeleton skeleton-line" aria-hidden="true"></div>
                        <div className="skeleton skeleton-line" aria-hidden="true"></div>
                        <div className="skeleton skeleton-rectangle" aria-hidden="true"></div>
                        <div className="skeleton skeleton-button" aria-hidden="true"></div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} aria-label="Formulário de contato">
                        {/* Campo Nome */}
                        <div className="form-field">
                            <label htmlFor="name">Nome completo</label>
                            <input
                                id="name"
                                {...register("name")}
                                placeholder="Nome completo"
                                className="form-input"
                                aria-invalid={!!errors.name}
                            />
                            {errors.name && <p className="form-error" role="alert">{errors.name.message}</p>}
                        </div>

                        {/* Campo Email */}
                        <div className="form-field">
                            <label htmlFor="email">E-mail</label>
                            <input
                                id="email"
                                {...register("email")}
                                type="email"
                                placeholder="E-mail válido"
                                className="form-input"
                                aria-invalid={!!errors.email}
                            />
                            {errors.email && <p className="form-error" role="alert">{errors.email.message}</p>}
                        </div>

                        {/* Campo Celular */}
                        <div className="form-field">
                            <label htmlFor="cellphone">Celular</label>
                            <Controller
                                name="cellphone"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        id="cellphone"
                                        type="text"
                                        value={applyMask(value)}
                                        onChange={(e) => onChange(applyMask(e.target.value))}
                                        onBlur={onBlur}
                                        placeholder="Celular com DDD"
                                        className="form-input"
                                        aria-invalid={!!errors.cellphone}
                                    />
                                )}
                            />
                            {errors.cellphone && (
                                <p className="form-error" role="alert">{errors.cellphone.message}</p>
                            )}
                        </div>

                        {/* Campo Mensagem */}
                        <div className="form-field">
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                                id="message"
                                {...register("message")}
                                placeholder="Digite sua mensagem aqui"
                                className="form-textarea"
                                aria-invalid={!!errors.message}
                            ></textarea>
                            {errors.message && (
                                <p className="form-error" role="alert">{errors.message.message}</p>
                            )}
                        </div>

                        {/* Botão Enviar */}
                        <div className="btn-enviar">
                            <button
                                type="submit"
                                className="form-button"
                                disabled={isSubmitting}
                                aria-disabled={isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "ENVIAR"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Formulario;
