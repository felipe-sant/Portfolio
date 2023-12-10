import Header from "../components/header";
import "../styles/mainContato.css";

function ContatoPage() {
    return (
        <div>
            <Header />
            <main className="main mainContato">
                <article className="contato">
                    <h2>Contato</h2>
                    <hr /> 
                    <section className="contato">
                        <section className="redeSociais">
                            <h3>Redes Sociais</h3>
                            <ul>
                                <li>Instagram</li>
                                <li>Github</li>
                                <li>Linkedin</li>
                            </ul>
                        </section>
                        <section className="email">
                            <h3>Contato Direto</h3>
                            <form action="">
                                <input type="text" placeholder="Nome"/>
                                <input type="text" placeholder="Assunto"/>
                                <textarea name="" id=""></textarea>
                                <button type="submit">Enviar</button>
                            </form>
                        </section>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default ContatoPage;