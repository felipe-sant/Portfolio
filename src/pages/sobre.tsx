import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/mainSobre.css";

function SobrePage() {
    return (
        <div>
            <Header />
            <div className="main mainSobre">
                <article className="sobreMim">
                    <h2>Sobre Mim</h2>
                    <hr />
                    <p>Olá, sou Luiz Felipe, nasci em Santo André, São Paulo, em 13 de novembro de 2004. Atualmente, tenho 18 anos e estou matriculado na FATEC de São José dos Campos, minha cidade atual.</p>
                    <p>No entanto, minha jornada na área de TI não começou na faculdade! Desde 2017, venho estudando nesse campo, tendo concluído um curso de informática de três anos na Microcamp SJC, além de ter cursado o ensino médio técnico na ETEC SJC.</p>
                    <p>Portanto, acumulei uma considerável experiência nessa área.</p>
                </article>
                <hr />
                <article className="conhecimentos">
                    <h2>Conhecimentos</h2>
                    <section className="conhecimentos">
        
                    </section>
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default SobrePage;