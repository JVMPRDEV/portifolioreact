# 📂 Portfólio React

Este é um projeto de portfólio desenvolvido em **React**, com foco em design responsivo, acessibilidade, e experiência do usuário. O projeto utiliza ferramentas modernas e práticas avançadas para criar uma aplicação dinâmica e eficiente.

---

## 🔧 Validação pelo Lighthouse

Os relatórios do Lighthouse comprovam a alta qualidade deste projeto:

- **Acessibilidade**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100
- **Performance**: 92/100

A aplicação está disponível online para acesso:
[Portfólio React](https://portifolioreact-1ibx.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

### **Frontend**
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React DOM**: Renderização de componentes React no DOM.
- **React Hook Form**: Gerenciamento de formulários com validação.
- **Yup**: Biblioteca de validação de esquemas para formulários.
- **Radix UI**: Componentes acessíveis como Dialog, Collapsible e NavigationMenu.
- **Swiper**: Biblioteca para carrosséis e sliders interativos.
- **Font Awesome**: Ícones modernos para interfaces.
- **EmailJS**: Integração para envio de e-mails diretamente do cliente.

### **Componentização e Testes**
- **Storybook**: Documentação e teste visual de componentes isolados.
- **Chromatic**: Verificação de regressão visual e deploy de histórias.
- **PropTypes**: Validação de tipos de propriedades para componentes React.
- **React Helmet**: Gerenciamento de meta tags para SEO.

### **Estilização**
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida.
- **Tailwind Forms**: Melhoria na estilização de formulários.
- **Tailwind Typography**: Tipografia para conteúdos ricos.
- **Autoprefixer**: Compatibilidade de CSS com navegadores.
- **PostCSS**: Processamento avançado de CSS.

### **Outras Dependências**
- **Isotope.js**: Biblioteca para layouts filtráveis.
- **React Loading Skeleton**: Skeleton loaders para placeholders interativos.
- **React Spinners**: Indicadores de carregamento animados.
- **React Input Mask**: Máscaras de entrada para formulários.
- **CRA Template PWA**: Template para Progressive Web Apps (PWAs).

---

## ✨ Funcionalidades

- **Exibição de Portfólio**: Galeria de projetos com layout interativo e filtrável.
- **Formulário de Contato**: Formulários validados com **React Hook Form** e **Yup**.
- **Design Responsivo**: Compatível com dispositivos móveis, tablets e desktops.
- **Skeleton Loaders**: Feedback visual durante carregamentos.
- **Carrosséis**: Experiência visual aprimorada com o **Swiper**.
- **Storybook**: Visualização e documentação de componentes.
- **Envio de E-mails**: Integração com **EmailJS** para contato direto.

---

## 🗋 Estrutura do Projeto

```plaintext
src/
├── assets/         # Recursos estáticos (imagens, ícones)
├── components/     # Componentes reutilizáveis
│   ├── Header/     # Cabeçalho
│   ├── Footer/     # Rodapé
│   ├── Portfolio/  # Galeria de projetos
│   ├── Formulario/ # Formulário de contato
│   ├── Sobre/      # Seção sobre nós
│   └── ThemeSwitcher/ # Alternador de tema
├── context/        # Contextos globais (ex.: ThemeContext)
├── stories/        # Histórias do Storybook
├── styles/         # Estilos globais e Tailwind CSS
├── .storybook/     # Configurações do Storybook
└── App.js          # Ponto de entrada principal
```

---

## 🔄 Pré-requisitos

- **Node.js**: Versão 18 ou superior.
- **NPM ou Yarn**: Gerenciador de pacotes.

---

## ⚙️ Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/portifolioreact.git
   cd portifolioreact
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

4. **Abra no navegador**:
   ```
   http://localhost:3000
   ```

---

## 🖊️ Executando o Storybook

1. **Inicie o Storybook**:
   ```bash
   npm run storybook
   ```

2. **Acesse no navegador**:
   ```
   http://localhost:6006
   ```

---

## 🚩 Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch com sua nova feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Realize as alterações e faça o commit:
   ```bash
   git commit -m "Descrição das alterações"
   ```
4. Envie para a branch remota:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais informações.

---

## 👨‍💻 Autor

Desenvolvido com dedicação por **João Rocha**. 😊

