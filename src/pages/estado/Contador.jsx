import { useState } from "react";
import { Pagina } from "../../components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export function Contador() {
    const estilo = "bg-custom-gray p-10 gap-4 m-5 rounded-full text-4xl"
    const estilo2 = "bg-custom-gray p-5 gap-4 m-5 rounded-full text-2xl"
    const [num, setNum] = useState(0)
    return (
        <Pagina titulo="Contador" subtitulo="Contador">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <span>
                    <button className={estilo}><IconPlus/></button>
   
                    <span className="text-7xl">{num}</span>

                    <button className={estilo}><IconMinus/></button>
                </span>

                <span>
                    <button className={estilo2}><IconPlus/></button>
   
                    <span className="text-3xl">{num}</span>

                    <button className={estilo2}><IconMinus/></button>
                </span>
            </div>
        </Pagina>
    )
}