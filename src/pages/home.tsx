import Header from "../components/header";
import "../styles/mainHome.css";

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

          </section>
          <section className="projetos">

          </section>
        </article>
      </main>
    </div>
  );
}

export default HomePage;