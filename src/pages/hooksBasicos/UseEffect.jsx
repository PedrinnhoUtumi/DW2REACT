import { useEffect, useState } from "react";
import { Pagina } from "../../components/Pagina";

export function UseEffect() {
    const [url, setUrl] = useState("")
    
    function trocarImagem() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resposta => resposta.json())  
        .then(objeto => setUrl(objeto.message))
        
    }

    useEffect(trocarImagem, [])

    return (
        <Pagina titulo="Use Effect" subtitulo="Use Effect">
            <div>
                <button className="bg-custom-gray px-3 py-2 rounded-md m-2" onClick={trocarImagem}>
                    Trocar
                </button>
                <img src={url} alt="" />
                
            </div>
        </Pagina>
    )
}