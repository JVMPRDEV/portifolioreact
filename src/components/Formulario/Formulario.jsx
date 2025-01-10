import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Formulario.css";

const validationSchema = Yup.object({
    name: Yup.string().required("Por favor, informe seu nome completo."),
    email: Yup.string().email("Formato inválido").required("Por favor, informe seu e-mail."),
    cellphone: Yup.string()
        .matches(/^[0-9]{11}$/, "Digite 11 números.")
        .required("Por favor, informe seu celular."),
    message: Yup.string().required("Por favor, digite sua mensagem."),
});

const Formulario = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="formulario section-spacing" id="Contato">
            <div className="form-box">
                <h2 className="form-title-port">
                    FALE <span>CONOSCO</span>
                </h2>
                {isLoading ? (
                    <div className="skeleton-container">
                        {/* Placeholder para Nome */}
                        <div className="skeleton skeleton-line"></div>
                        {/* Placeholder para Email */}
                        <div className="skeleton skeleton-line"></div>
                        {/* Placeholder para Celular */}
                        <div className="skeleton skeleton-line"></div>
                        {/* Placeholder para Mensagem */}
                        <div className="skeleton skeleton-rectangle"></div>
                        {/* Placeholder para o Botão */}
                        <div className="skeleton skeleton-button"></div>
                    </div>
                ) : (
                    <Formik
                        initialValues={{ name: "", email: "", cellphone: "", message: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            console.log("Formulário enviado com sucesso:", values);
                            alert("Mensagem enviada com sucesso!");
                            resetForm();
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                {/* Campo Nome */}
                                <div className="form-field">
                                    <Field
                                        name="name"
                                        placeholder="Nome completo"
                                        className="form-input"
                                    />
                                    <ErrorMessage name="name" component="p" className="form-error" />
                                </div>
                                {/* Campo Email */}
                                <div className="form-field">
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="E-mail válido"
                                        className="form-input"
                                    />
                                    <ErrorMessage name="email" component="p" className="form-error" />
                                </div>
                                {/* Campo Celular */}
                                <div className="form-field">
                                    <Field
                                        name="cellphone"
                                        placeholder="Celular com DDD"
                                        className="form-input"
                                    />
                                    <ErrorMessage
                                        name="cellphone"
                                        component="p"
                                        className="form-error"
                                    />
                                </div>
                                {/* Campo Mensagem */}
                                <div className="form-field">
                                    <Field
                                        as="textarea"
                                        name="message"
                                        placeholder="Digite sua mensagem aqui"
                                        className="form-textarea"
                                    />
                                    <ErrorMessage
                                        name="message"
                                        component="p"
                                        className="form-error"
                                    />
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
                            </Form>
                        )}
                    </Formik>
                )}
            </div>
        </section>
    );
};

export default Formulario;
