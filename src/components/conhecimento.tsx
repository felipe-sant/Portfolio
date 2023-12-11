import "../styles/conhecimento.css"

function Conhecimento(props: any) {
    const conhecimento = props.conhecimento

    return (
        <div className="conhecimento">
            <div className="imagem">
                <img src={conhecimento.imagem} alt="" />
            </div>
            <div className="informacoes">
                <h4>{conhecimento.nome}</h4>
                <p>
                    {conhecimento.descricao}
                </p>
            </div>
        </div>
    )
}

export default Conhecimento