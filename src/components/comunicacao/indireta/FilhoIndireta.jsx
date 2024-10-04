
export function FilhoIndireta(props) {
    return (
        <div className={"w-full flex flex-col items-center p-7 rounded-md bg-custom-gray text-custom-white"}>
            <div className="flex gap-3">
                <button className="botao" onClick={() => props.alterar("João")}>João</button>
                <button className="botao" onClick={() => props.alterar("Sara mozao")}>Sara mozao</button>
                <button className="botao" onClick={() => props.alterar("Pedro")}>Pedro</button>
            </div>
        </div>
    
    )
}