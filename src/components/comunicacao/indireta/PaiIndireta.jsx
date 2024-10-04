import { useState } from "react"
import { FilhoIndireta } from "./FilhoIndireta"

export function PaiIndireta() {
    const [nome, setNome] = useState("")
    function alterarNome(n) {
        setNome(n)

    }
    return (
        <div className="w-full flex flex-col items-center p-7 rounded-md bg-custom-gray2 text-custom-white">
            <span className="text-4xl p-5">{nome}</span>
            <FilhoIndireta alterar = {alterarNome}/>   

        </div>
    )
}