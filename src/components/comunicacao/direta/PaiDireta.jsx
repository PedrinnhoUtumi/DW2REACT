import { useState } from "react"
import { FilhoDireta } from "./FilhoDireta"

export function PaiDireta() {

    const [nome, setNome] = useState("")

    return (
        <div className={"w-full flex flex-col items-center p-7 rounded-md bg-custom-gray text-custom-white"}>
            <div className="flex gap-3">
                <button className="botao" onClick={() => setNome("João")}>João</button>
                <button className="botao" onClick={() => setNome("Sara mozao")}>Sara mozao</button>
                <button className="botao" onClick={() => setNome("Pedro")}>Pedro</button>
            </div>
            <FilhoDireta texto = {nome}/>

        </div>
    )
}