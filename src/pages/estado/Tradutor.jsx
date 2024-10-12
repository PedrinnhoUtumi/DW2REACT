import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function Tradutor() {
    const [texto, setTexto] = useState("")
    const [textoIngles, setTextoIngles] = useState("");

    // function atingiuLimite() {
    //     let portugues = document.getElementById("portugues")
    //     if (texto.length > 250) {
    //         alert("Você atingiu o limite de caracteres")
    //         portugues.setAttribute('disabled', true)         
    //     }
    //     portugues.setAttribute('enabled', true)
    // }
    
    function textEnglish() {
        fetch(`https://api.mymemory.translated.net/get?q=${texto}!&langpair=pt-br|en-us`)
        .then(resposta => resposta.json())  
        .then(objeto => setTextoIngles(objeto.responseData.translatedText))
        
    }

    // useEffect(atingiuLimite, [texto])

    return (
        <Pagina titulo="Tradutor" subtitulo="Traduzir">
            <div className="flex flex-col">
                <div className="flex flex-row justify-around">
                    <span>Português</span>
                    <span>Inglês</span>
                </div>
                <div className="flex flex-row gap-4 p-2">
                    <textarea id="portugues" type="text" value={texto} onChange={(e) => setTexto(e.target.value)} className="rounded-xl w-96 h-96 p-2 bg-purple-300 text-custom-black" maxLength={250}>
                    </textarea>
                    <textarea type="text" value={textoIngles} onChange={(e) => setTexto(e.target.value)} readOnly className="rounded-xl w-96 h-96 p-2 bg-purple-300 text-custom-black">
                    </textarea> 
                </div>
                <div className="flex flex-row absolute bottom-36" >
                <span className="bg-purple-300 ml-10  text-custom-black text-xl">{texto.length}/250</span>
                <button className="bg-purple-600 ml-32 p-2 rounded-xl w-36" onClick={textEnglish}>TRADUZIR</button>
                </div>
            </div>
        </Pagina>
    )
}