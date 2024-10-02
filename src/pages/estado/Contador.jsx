import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function Contador() {
    const [num, setNum] = useState(0)
    return (
        <Pagina titulo="Contador" subtitulo="Contador">
            <div className="flex">
                <span className="text-7xl">{num}</span>
            </div>
            <button className="">+</button>
            <button className="">-</button>
        </Pagina>
    )
}