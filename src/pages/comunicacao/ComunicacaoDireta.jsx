import { Pagina } from "../../components/Pagina"
import { PaiDireta } from "../../components/comunicacao/direta/PaiDireta"
import { FilhoDireta } from "../../components/comunicacao/direta/FilhoDireta"
export function ComunicacaoDireta() {
    return (
        <Pagina titulo = "Comunicacao Direta" subtitulo = "Comunicacao Direta">
            <PaiDireta></PaiDireta>
        </Pagina>
    )
}