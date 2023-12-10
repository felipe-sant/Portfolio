import "../styles/projeto.css";

function Projeto(props:any) {
    const projeto = props.projeto;

    return (
        <div className="projeto">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <img src={projeto.imagem} alt=".    " />
            <a href={projeto.link}>Ver Projeto</a>
        </div>
    )
}

export default Projeto;