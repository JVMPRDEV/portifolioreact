import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import "./Formulario.css";

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

    const onSubmit = (data) => {
        console.log("Formulário enviado com sucesso:", data);
        alert("Mensagem enviada com sucesso!");
        reset();
    };

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="formulario section-spacing" id="Contato">
            <div className="form-box">
                <h2 className="title--port title--form">
                    FALE <span>CONOSCO</span>
                </h2>
                {isLoading ? (
                    <div className="skeleton-container">
                        <div className="skeleton skeleton-line"></div>
                        <div className="skeleton skeleton-line"></div>
                        <div className="skeleton skeleton-line"></div>
                        <div className="skeleton skeleton-rectangle"></div>
                        <div className="skeleton skeleton-button"></div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Campo Nome */}
                        <div className="form-field">
                            <input
                                {...register("name")}
                                placeholder="Nome completo"
                                className="form-input"
                            />
                            {errors.name && <p className="form-error">{errors.name.message}</p>}
                        </div>

                        {/* Campo Email */}
                        <div className="form-field">
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="E-mail válido"
                                className="form-input"
                            />
                            {errors.email && <p className="form-error">{errors.email.message}</p>}
                        </div>

                        {/* Campo Celular */}
                        <div className="form-field">
                            <Controller
                                name="cellphone"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <InputMask
                                        {...field}
                                        mask="(99) 99999-9999"
                                        placeholder="Celular com DDD"
                                        className="form-input"
                                    />
                                )}
                            />
                            {errors.cellphone && (
                                <p className="form-error">{errors.cellphone.message}</p>
                            )}
                        </div>

                        {/* Campo Mensagem */}
                        <div className="form-field">
                            <textarea
                                {...register("message")}
                                placeholder="Digite sua mensagem aqui"
                                className="form-textarea"
                            ></textarea>
                            {errors.message && (
                                <p className="form-error">{errors.message.message}</p>
                            )}
                        </div>

                        {/* Botão Enviar */}
                        <div className="btn-enviar">
                            <button
                                type="submit"
                                className="form-button"
                                disabled={isSubmitting}
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
