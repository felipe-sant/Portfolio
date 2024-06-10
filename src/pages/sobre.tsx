import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { TipoConhecimento } from "../enum/tipoConhecimento";
import "../styles/mainSobre.css";
import { ConhecimentoJson } from "../types/conhecimentoJson";
import Conhecimento from "../components/conhecimento";

const conhecimentosJson: ConhecimentoJson[] = [
    {
        tipo: TipoConhecimento.frontEnd,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425",
        nome: "HTML",
        descricao: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web."
    },
    {
        tipo: TipoConhecimento.frontEnd,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        nome: "CSS",
        descricao: "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web."
    },
    {
        tipo: TipoConhecimento.frontEnd,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
        nome: "React",
        descricao: "O React é uma biblioteca front-end JavaScript com foco em criar interfaces de usuário em páginas web."
    },
    {
        tipo: TipoConhecimento.backEnd,
        imagem: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-2.png",
        nome: "MySQL",
        descricao: "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface."
    },
    {
        tipo: TipoConhecimento.backEnd,
        imagem: "https://static-00.iconduck.com/assets.00/mongodb-original-wordmark-icon-2015x2048-n6r3kuri.png",
        nome: "MongoDB",
        descricao: "MongoDB é um software de banco de dados não relacional orientado a documentos."
    },
    {
        tipo: TipoConhecimento.backEnd,
        imagem: "https://logowik.com/content/uploads/images/redis.jpg",
        nome: "Redis",
        descricao: "Redis é um armazenamento de estrutura de dados em memória na forma de banco de dados não relacional."
    },
    {
        tipo: TipoConhecimento.linguagens,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png",
        nome: "C#",
        descricao: "C# é uma linguagem de programação orientada a objetos e orientada a componentes."
    },
    {
        tipo: TipoConhecimento.linguagens,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
        nome: "Java",
        descricao: "Java é uma linguagem de programação orientada a objetos e multiplataforma."
    },
    {
        tipo: TipoConhecimento.linguagens,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        nome: "Javascript",
        descricao: "JavaScript é uma linguagem de programação de script em alto nível com tipagem dinâmica fraca."
    },
    {
        tipo: TipoConhecimento.linguagens,
        imagem: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
        nome: "PHP",
        descricao: "PHP é uma linguagem interpretada livre, usada originalmente apenas para atuantes no lado do servidor."
    },
    {
        tipo: TipoConhecimento.linguagens,
        imagem: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        nome: "Python",
        descricao: "Python é uma linguagem de programação de alto nível, orientada a objetos, de tipagem dinâmica e forte."
    },
    {
        tipo: TipoConhecimento.linguagens,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        nome: "Typescript",
        descricao: "Typescript é um superconjunto sintático de JavaScript e adiciona tipagem estática opcional à linguagem."
    },
    {
        tipo: TipoConhecimento.ferramentas,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
        nome: "GitHub",
        descricao: "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git."
    },
]

function SobrePage() {
    const tiposDeConhecimentos = Object.values(TipoConhecimento);
    const [conhecimentos] = useState<ConhecimentoJson[]>(conhecimentosJson);

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
                        {tiposDeConhecimentos.map((tipo) => (
                            <>
                                <h3>{tipo}</h3>
                                {conhecimentos.filter((conhecimento) => conhecimento.tipo === tipo).map((conhecimento) => (
                                   <Conhecimento imagem={conhecimento.imagem} nome={conhecimento.nome} descricao={conhecimento.descricao} /> 
                                ))}
                            </>
                        ))}
                    </section>
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default SobrePage;