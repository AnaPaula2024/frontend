# React + Vite - Conectando Frontend e Backend

Este projeto React + Vite foi desenvolvido como parte de um estudo sobre a conexão do frontend com o backend. Ele inclui funcionalidades de roteamento, consumo de API e gerenciamento de favoritos, além de outras funcionalidades como blog, política de privacidade e autenticação.

## Funcionalidades

*   **Navegação:** O aplicativo utiliza o React Router para fornecer uma navegação fluida entre as páginas "Home", "Favoritos", "Blog" e "Política de Privacidade".
*   **Consumo de API:** O aplicativo consome dados de uma API backend para exibir informações sobre livros e notícias.
*   **Gerenciamento de Favoritos:** Os usuários podem adicionar e remover livros da lista de favoritos.
*   **Blog:** O aplicativo possui um blog com posts e página de detalhes do post.
*   **Política de Privacidade:** O aplicativo possui uma página de política de privacidade.
*   **Autenticação:** O aplicativo possui um sistema de autenticação de usuários.

## Tecnologias Utilizadas

*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **Vite:** Ferramenta de desenvolvimento que oferece inicialização rápida e Hot Module Replacement (HMR).
*   **React Router:** Biblioteca para gerenciamento de rotas no React.
*   **Axios:** Cliente HTTP para fazer requisições para o backend.
*   **React Icons:** Biblioteca de ícones para React.
*   **Styled Components:** Biblioteca para estilização de componentes React.

## Estrutura do Projeto

*   `public/`: Contém arquivos estáticos, como o `index.html`.
*   `src/`: Contém o código fonte do aplicativo.
    *   `assets/`: Contém arquivos estáticos, como imagens (`img`) e estilos CSS (`css`).
    *   `components/`: Contém componentes reutilizáveis, como `Categories.jsx`, `CommentsSection.jsx`, `FeaturedPosts.jsx`, `Footer.jsx`, `Header.jsx`, `NewsCarousel.jsx`, `Post.jsx`, `PostDetail.jsx`, `PrivacyPolicy.jsx`, `ScrollToTop.jsx`, `ScrollToTopButton.jsx` e `SearchBar.jsx`.
    *   `contexts/`: Contém contextos para gerenciamento de estados globais, como `AuthContext.jsx`.
    *   `data/`: Contém dados mockados para desenvolvimento, como `newsData.jsx`.
    *   `hooks/`: Contém hooks personalizados, como `useAuth.jsx`.
    *   `pages/`: Contém componentes para as diferentes páginas do aplicativo, como `BlogPostPage.jsx`, `PrivacyPolicyPage.jsx` e `blog.jsx`.
    *   `routes/`: Contém componentes para as rotas do aplicativo, como `AppRoutes.jsx`.
    *   `styles/`: Contém estilos globais e definições de styled components, como `index.css`, `responsive-PostPage.css`, `responsive-blog.css` e `responsive-policy.css`.
    *   `App.jsx`: Componente principal do aplicativo.
    *   `main.jsx`: Ponto de entrada do aplicativo.
*   `package.json`: Contém as dependências e scripts do projeto.
*   `package-lock.json`: Contém informações sobre as versões das dependências.
*   `vite.config.js`: Arquivo de configuração do Vite.
*   `.eslintrc.cjs`: Arquivo de configuração do ESLint.
*   `.gitignore`: Arquivo com os arquivos e pastas ignorados pelo Git.
*   `README.md`: Arquivo com a descrição do projeto.

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/AnaPaula2024/Alfala-Server-10-06.git](https://github.com/AnaPaula2024/Alfala-Server-10-06.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

O aplicativo estará em execução em `http://localhost:5173`.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
