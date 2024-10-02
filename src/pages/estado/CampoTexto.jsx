import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function CampoTexto() {
    const [texto, setTexto] = useState("aaa")
    return (
        <Pagina titulo="Campo Texto" subtitulo="Campo de texto">
            <div className="flex flex-col gap-4 p-2">
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} className="rounded-xl bg-custom-gray text-custom-white"/>
                <button className="bg-custom-gray p-2 rounded-xl" onClick={() => setTexto("")}>Limpar</button>
                <span className="bg-custom-gray2 text-custom-white text-xl">{texto}</span>
            </div>
        </Pagina>
    )
}