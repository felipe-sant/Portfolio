import Footer from "../components/footer";
import Header from "../components/header";
import Projeto from "../components/projeto";
import "../styles/mainHome.css";

type Projeto = {
  titulo:string,
  descricao:string,
  imagem:string,
  link:string,
}

const projetos:Array<Projeto> = [
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
  }
]


function HomePage() {
  return (
    <div>
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
            <Projeto projeto={projetos[0]}/>
            <Projeto projeto={projetos[1]}/>
            <Projeto projeto={projetos[2]}/>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;