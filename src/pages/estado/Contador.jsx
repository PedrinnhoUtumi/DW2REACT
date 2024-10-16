import { useState } from "react";
import { Pagina } from "../../components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export function Contador() {
    const estilo = "bg-custom-gray p-10 gap-4 m-5 rounded-full text-4xl"
    const estilo2 = "bg-custom-gray p-5 gap-4 m-5 rounded-full text-2xl"
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    function somaNum() {
        setNum(num + num2)
    }

    function subtraiNum() {
        setNum(num - num2)
    }
    
    function somaNum2() {
        setNum2(num2 + 1)
    }
    
    function subtraiNum2() {
        setNum2(num2 - 1)
    }

    return (
        <Pagina titulo="Contador" subtitulo="Contador">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <span>
                    <button className={estilo} onClick={somaNum}><IconPlus/></button>
   
                    <span className="text-7xl">{num}</span>

                    <button className={estilo} onClick={subtraiNum}><IconMinus/></button>
                </span>

                <span>
                    <button className={estilo2} onClick={somaNum2}><IconPlus/></button>
   
                    <span className="text-3xl">{num2}</span>

                    <button className={estilo2} onClick={subtraiNum2}><IconMinus/></button>
                </span>
            </div>
        </Pagina>
    )
}