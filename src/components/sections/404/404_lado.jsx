import { data } from "./assets/datos"
import  Cuadros  from "./assets/cuadros"

const FoundPage = ()=>{
    return (
        <section className="hero flex flex-wrap items-start justify-between gap-4 p-6 relative mt-16 my-5 ">
            <div className="hero_texts w-full md:w-1/4 p-4  shadow-md rounded-md bg-base-dark-400 dark:bg-base-dark">
                <h2 className="hero_title text-xl font-bold">{data.mensaje1 }</h2>
            </div>
            {/* flex flex-row md:flex md:flex-col md:flex-nowrap no funciona */}
            <div className="flex flex-row md:flex-row" >
                <div className="bg-base-dark-400 dark:bg-base-dark text-accent dark:text-accent-light hero_texts w-full md:w-1/4 p-4 shadow-md rounded-md">
                    {
                        data.messageleft.map((valor ) =>(
                            <Cuadros titulo={valor.titulo} 
                                descripcion={valor.descripcion} 
                                imagen_dir={valor.imagen}
                            />
                        ))
                    }
                </div>
                <figure className="hero_figure w-full md:w-1/4 flex items-center justify-center p-4">
                    <img src={data.image.src} alt="Descripción de la imagen" className="w-8 rounded-md" />
                </figure>
                <div className="hero_texts w-full md:w-1/4 p-4 bg-base-dark-400 dark:bg-base-dark shadow-md rounded-md  ">
                    {
                        data.messageright.map((valor ) =>(
                            <Cuadros titulo={valor.titulo} descripcion={valor.descripcion} imagen_dir={valor.imagen}  ></Cuadros>
                        ))
                    }
                </div>
            </div>

        </section>
        
    );
}

export default FoundPage;
