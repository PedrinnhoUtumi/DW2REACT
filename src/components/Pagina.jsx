export function Pagina(props) {
  return (
    <div className={`flex flex-col flex-1`}>
      <header
        className={`
            flex flex-col justify-center items-start
            px-5 h-16
            border-b border-custom-gray2
            bg-custom-gray text-custom-white
        `}
      >
        <h1 className="text-xl font-black">{props.titulo}</h1>
        <h2 className="text-sm text-custom-white">{props.subtitulo}</h2>
      </header>
      <main
        className={`
            flex items-start flex-1
            p-4
            bg-custom-gray2 
            text-base text-custom-white
        `}
      >
        {props.children}
      </main>
    </div>
  );
}
