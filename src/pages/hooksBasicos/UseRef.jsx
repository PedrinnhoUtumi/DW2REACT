import { useRef, useState } from "react";
import { Pagina } from "../../components/Pagina";

export function UseRef() {
    const [estado, setEstado] = useState(0)
    const referencia = useRef(0)

    function incrementaEstado() {
        setEstado(estado + 1)
    }

    function incrementaReferencia() {
        referencia.current += 1
    }

    return (
        <Pagina titulo="Use Ref" subtitulo="Use Ref">
            <div className="flex flex-col">
                <div>
                    {`REFERÊNCIA: ${referencia.current} | ESTADO: ${estado}`}
                </div>
                <div>
                    <button className="bg-custom-gray px-3 py-2 rounded-md m-2" onClick={incrementaReferencia}>
                        Ref +
                    </button>
                </div>
                <div>
                    <button className="bg-custom-gray px-3 py-2 rounded-md" onClick={incrementaEstado}>
                        Estado +
                    </button>
                </div>

            </div>
        </Pagina>
    )
}