import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function ComEstado() {

    const [num, setNum] = useState(0)

    function incrementar() {
        setNum(num + 1);
        console.log(num);
    }

    return (
        <Pagina titulo="Com Estado" subtitulo="Conceito de Estado no React">
            <div className="flex flex-col gap-4">
                <span>{num}</span>
                <button className="bg-custom-gray rounded-2xl p-2" onClick={incrementar}>Incrementar</button>
            </div>
        </Pagina>
    );
}
