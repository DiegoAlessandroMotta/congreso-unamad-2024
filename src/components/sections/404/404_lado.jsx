import { data } from "./assets/datos"
import  Cuadros  from "./assets/cuadros"

import modelo from "./assets/modelo_gif_cdvo.gif"

const FoundPage = ()=>{
    return (
        <section className="flex flex-col">
            <div className="h-[300px] flex flex-row justify-center">   
                <img className="object-cover h-full" src={modelo.src} alt="modelo" />
            </div>
            <div className="font-bold text-white bg-gray-800 py-3 px-2 rounded-md">
                LA DIRECCIÓN A DONDE QUIERES ACCEDER NO EXISTE.
            </div>
        </section>
    );
}

export default FoundPage;
