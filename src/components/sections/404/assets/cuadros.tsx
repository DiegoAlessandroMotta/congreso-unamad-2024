interface Props {
    titulo:string,
    descripcion:string,
    imagen_dir?:string
}

const Cuadros = ({titulo,descripcion,imagen_dir=""}:Props )=>{
    return (
        <div className="bg-base-dark-400 dark:bg-base-dark text-accent dark:text-accent-light hero_texts w-full md:w-1/4 p-6 shadow-lg rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <h2 className="hero_title text-xl font-bold mb-2">{titulo}</h2>
            <p className="text-sm mb-4">{descripcion}</p>
            <div className="flex justify-center">
                {  imagen_dir ? (
                    <img src={imagen_dir} alt="Descripción de la imagen" className="rounded-lg w-3/4 h-auto" />
                ) : (
                    <p className="text-sm text-gray-500">NO HAY IMAGEN DISPONIBLE</p>
                )}
            </div>
        </div>
    );
}

export default Cuadros;