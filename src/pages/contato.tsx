import Footer from "../components/footer";
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
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/tren.felipe/">
                                        <img src="/images/instagram_mark.png" alt="instagram logo" />
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://github.com/felipe-sant">
                                        <img src="/images/github_mark.png" alt="github logo" />
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.linkedin.com/in/lfelipesant/">
                                        <img src="/images/linkedin_mark.png" alt="linkedin logo" />
                                        Linkedin
                                    </a>
                                </li>
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
            <Footer />
        </div>
    )
}

export default ContatoPage;