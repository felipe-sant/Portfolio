import "../styles/conhecimento.css"
import { ConhecimentoProps } from "../types/conhecimentoProps"

function Conhecimento(props: ConhecimentoProps) {
    return (
        <div className="conhecimento">
            <div className="imagem">
                <img src={props.imagem} alt="" />
            </div>
            <div className="informacoes">
                <h4>{props.nome}</h4>
                <p>
                    {props.descricao}
                </p>
            </div>
        </div>
    )
}

export default Conhecimento