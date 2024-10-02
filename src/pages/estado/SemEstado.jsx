import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function SemEstado() {

  let num = 0

  function incrementar() {
    num += 1
    console.log(num);
  }

  return (
    <Pagina titulo="Sem Estado" subtitulo="Conceito de Estado no React">
      <div className="flex flex-col gap-4">
        <span>{num}</span>
        <button className="bg-custom-gray rounded-2xl p-2" onClick={incrementar}>Incrementar</button>
      </div>
    </Pagina>
  );
}
