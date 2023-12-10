import "../styles/header.css";

function Header() {
    return (
        <header>
            <div className="logo">
                <a href="/">
                    <img src="images/logo.png" alt="" />
                    <h1>FELIPE-SANT</h1>
                </a>
            </div>
            <div className="menu">
                <a href="/">Inicio</a>
                <a href="/sobre">Sobre</a>
                <a href="/contato">Contato</a>
            </div>
        </header>
    )
}

export default Header;