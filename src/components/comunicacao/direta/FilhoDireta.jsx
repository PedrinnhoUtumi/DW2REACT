
export function FilhoDireta(props) {
    return (
        <div className="w-full flex flex-col items-center p-5 rounded-md bg-custom-gray2 text-custom-white m-6">
            <span className="text-4xl p-5">{props.texto}</span>
        </div>
    )
}