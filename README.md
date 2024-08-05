# Front-End do Projeto de Upload de Vídeos

Este é o front-end do projeto de upload de vídeos. O projeto utiliza React para a construção da interface do usuário e integra com uma API para gerenciar vídeos e categorias.

## Índice

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

Este projeto é uma aplicação front-end desenvolvida com React. Ele permite que os usuários façam upload de vídeos, incluindo informações como título, descrição, URL do vídeo, thumbnail e categorias. Os usuários podem adicionar novas categorias e remover categorias existentes.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **React Hook Form**: Biblioteca para gerenciamento de formulários e validação.
- **Zod**: Biblioteca para validação de esquemas de dados.
- **React-Select**: Biblioteca para componentes de seleção de opções.
- **Axios**: Cliente HTTP para realizar requisições à API.
- **Bootstrap**: Framework de CSS para estilização e componentes.
- **React-Bootstrap**: Biblioteca de componentes Bootstrap para React.

## Instalação

Para configurar o projeto localmente, siga os passos abaixo:

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   Navegue até o Diretório do Projeto
   ```

2. **Navegue até o Diretório do Projeto**

   ```bash
   cd seu-repositorio
   Instale as Dependências
   ```

3. **Instale as Dependências**

   ```bash
   npm install
   Inicie o Servidor de Desenvolvimento
   ```

4. **Inicie o Servidor de Desenvolvimento**

   ```bash
   npm start
   O aplicativo estará disponível em http://localhost:3000.
   ```

## Uso

- **Upload de Vídeos**: Navegue até a página de upload de vídeos para enviar novos vídeos.
- **Adicionar Categoria**: Digite uma nova categoria e clique em "Adicionar Categoria" para incluí-la na lista de categorias disponíveis.
- **Selecionar Categorias**: As categorias adicionadas são exibidas abaixo do campo de entrada, e você pode removê-las clicando no botão "X" ao lado de cada categoria.

## Estrutura do Projeto

- **src/**: Contém todos os arquivos de código-fonte do projeto.
  - **components/**: Componentes reutilizáveis do React.
  - **pages/**: Páginas principais do aplicativo.
  - **services/**: Funções para interagir com a API.
  - **schema/**: Definições de esquema de validação.
  - **types/**: Tipos TypeScript utilizados no projeto.
- **App.tsx**: Componente principal da aplicação.
- **index.tsx**: Ponto de entrada da aplicação.

## Contribuição

Contribuições são bem-vindas! Siga estes passos para contribuir:

1.  **Fork o Repositório**

2.  **Crie uma Nova Branch**

    ```bash
    git checkout -b minha-nova-funcionalidade
    ```

3.  **Faça as Mudanças e Faça o Commit**

    ```bash
    git commit -am 'Adicione uma nova funcionalidade'
    ```

4.  **Envie as Mudanças**

    ```bash

    git push origin minha-nova-funcionalidade
    ```

5.  **Faça as Mudanças e Faça o Commit**

    ```bash

    Descreva as mudanças e submeta o Pull Request para revisão.
    ```

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
