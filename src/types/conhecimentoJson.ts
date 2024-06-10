import { TipoConhecimento } from "../enum/tipoConhecimento"

export type ConhecimentoJson = {
    tipo: TipoConhecimento,
    imagem:string,
    nome:string,
    descricao:string
}