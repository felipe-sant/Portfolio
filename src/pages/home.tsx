import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Projeto from "../components/projeto";
import "../styles/mainHome.css";
import { ProjetoJson } from "../types/projetoJson";

const projetosJson: ProjetoJson[] = [
  {
    titulo: "TCC | +Libras",
    descricao: "Projeto com objetivo de auxiliar no aprendizado de libras. Neste projeto fiquei responsável pela parte de desenvolvimento do site e sua documentação. Foi utilizando HTML, CSS e PHP.",
    imagem: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
    link: "https://github.com/LibrasAPP/TCC"
  },
  {
    titulo: "API | Covidinho",
    descricao: "Projeto consiste em um site focado em dados relacionados a Covid-19. Neste projeto eu fiquei responsável pela parte de estilização do site e a sua responsividade. Foi utilizado HTML, CSS e Python. ",
    imagem: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    link: "https://github.com/Equipe-CodeLand/API-2023.1"
  },
  {
    titulo: "API | CallNet",
    descricao: "Projeto focado em fornecer auxílio aos problemas relacionados a Internet Fixa. Neste projeto eu fiquei responsavel na parte de Login e Relatórios do administrador. Foi utilizado React com Typescript.",
    imagem: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    link: "https://github.com/Equipe-CodeLand/API-2023.2",
  },
  {
    titulo: "CRUD MongoDB",
    descricao: "Projeto de um CRUD no MongoDB, onde é possível realizar operações de criação, leitura, atualização e deleção das coleções: Compras, Produtos, Usuarios e Vendedores. Foi utilizado Python e MongoDB.",
    imagem: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    link: "https://github.com/felipe-sant/MongoDB-CRUD"
  },
  {
    titulo: "CRUD Redis",
    descricao: "Projeto de um CRUD no Redis, onde é possível realizar operações de criação, leitura, atualização e deleção das coleções: Compras, Produtos, Usuarios e Vendedores. Foi utilizado Python e Redis.",
    imagem: "https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white",
    link: "https://github.com/felipe-sant/Redis-CRUD"
  },
  {
    titulo: "Atlantis",
    descricao: "Projeto focado em técnicas de programação, são cinco atividades cada um com sua finalidade e objetivos, mas com o mesmo tema de um software para gerenciamento de parque aquático. Foi utlizado Typescript e React.",
    imagem: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    link: "https://github.com/felipe-sant/Atlantis"
  },
  {
    titulo: "AutoBots",
    descricao: "Projeto focado em desenvolvimento de microserviços, são cinco atividades ensinando sobre principios de organização e padrões de software para o back-end. Foi utilizado Java e Spring Boot.",
    imagem: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
    link: "https://github.com/felipe-sant/AutoBots"
  },
  {
    titulo: "API | Youtan",
    descricao: "Projeto focado no gerenciamento de ativos, podendo gerenciar manutenções e usuários, além de fornecer relatórios. Foi utilizado React com Typescript para o front-end, e Java para o back-end.",
    imagem: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    link: "https://github.com/Equipe-CodeLand/API-2024.1"
  }
]

function HomePage() {
  const [projetos] = useState<ProjetoJson[]>(projetosJson);

  return (
    <>
      <Header />
      <main className="main mainHome">
        <article className="inicio">
          <section className="sobre">
            <h2>Luiz Felipe dos Santos</h2>
            <p>Olá, meu nome é Luiz Felipe, mas pode me chamar de Felipe, atualmente sou um <strong>estudante de programação</strong> na Fatec de São José dos Campos no curso de DSM. Aqui neste site você encontrara mais informações sobre mim.</p>
            <a href="https://github.com/felipe-sant?tab=repositories" target="_blank">Meus Repositórios!</a>
          </section>
          <section className="foto">

          </section>
        </article>
        <article className="projetos">
          <section className="titulo">
            <h2>Projetos</h2>
          </section>
          <section className="projetos">
            {projetos.map((projeto, index) => (
              <Projeto key={index} projeto={projeto} />
            ))}
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;