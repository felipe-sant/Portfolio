import Conhecimento from "../components/conhecimento";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/mainSobre.css";

type Conhecimento = {
    imagem:string,
    nome:string,
    descricao:string
}

const conhecimentos:Conhecimento[] = [
    {
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425",
        nome: "HTML",
        descricao: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web."
    },
    {
        imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        nome: "CSS",
        descricao: "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web."
    },
    {
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
        nome: "React",
        descricao: "O React é uma biblioteca front-end JavaScript com foco em criar interfaces de usuário em páginas web."
    },
    {
        imagem: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-2.png",
        nome: "MySQL",
        descricao: "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface."
    },
    {
        imagem: "https://growiz.com.br/wp-content/uploads/2020/08/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png",
        nome: "C#",
        descricao: "C# é uma linguagem de programação orientada a objetos e orientada a componentes."
    },
    {
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        nome: "Javascript",
        descricao: "JavaScript é uma linguagem de programação de script em alto nível com tipagem dinâmica fraca."
    },
    {
        imagem: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
        nome: "PHP",
        descricao: "PHP é uma linguagem interpretada livre, usada originalmente apenas para atuantes no lado do servidor."
    },
    {
        imagem: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        nome: "Python",
        descricao: "Python é uma linguagem de programação de alto nível, orientada a objetos, de tipagem dinâmica e forte."
    },
    {
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        nome: "Typescript",
        descricao: "Typescript é um superconjunto sintático de JavaScript e adiciona tipagem estática opcional à linguagem."
    },
    {
        imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
        nome: "GitHub",
        descricao: "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git."
    },
]

function SobrePage() {
    return (
        <div>
            <Header />
            <div className="main mainSobre">
                <article className="sobreMim">
                    <h2>Sobre Mim</h2>
                    <hr />
                    <p>Olá, sou Luiz Felipe, nasci em Santo André, São Paulo, em 13 de novembro de 2004. Atualmente, tenho 19 anos e estou matriculado na FATEC de São José dos Campos, minha cidade atual.</p>
                    <p>No entanto, minha jornada na área de TI não começou na faculdade! Desde 2017, venho estudando nesse campo, tendo concluído um curso de informática de três anos na Microcamp SJC, além de ter cursado o ensino médio técnico na ETEC SJC.</p>
                    <p>Portanto, acumulei uma considerável experiência nessa área.</p>
                </article>
                <hr />
                <article className="conhecimentos">
                    <h2>Conhecimentos</h2>
                    <section className="conhecimentos">
                        <h3>Front-end</h3>
                        <Conhecimento conhecimento={conhecimentos[1]}/>
                        <Conhecimento conhecimento={conhecimentos[0]}/>
                        <Conhecimento conhecimento={conhecimentos[2]}/>
                        <h3>Back-end</h3>
                        <Conhecimento conhecimento={conhecimentos[3]}/>
                        <h3>Linguagens de Programação</h3>
                        <Conhecimento conhecimento={conhecimentos[4]}/>
                        <Conhecimento conhecimento={conhecimentos[5]}/>
                        <Conhecimento conhecimento={conhecimentos[6]}/>
                        <Conhecimento conhecimento={conhecimentos[7]}/>
                        <Conhecimento conhecimento={conhecimentos[8]}/>
                        <h3>Ferramentas</h3>
                        <Conhecimento conhecimento={conhecimentos[9]}/>
                    </section>
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default SobrePage;