
import { data } from "./data"
import { ImgPonente } from "./components/ImgPonente"
import { Day } from "./components/Day";
import { useState } from "react";

export function TimeLine(){

  const [numeroDia, setNumeroDia] = useState(0);

  return (
    <section className="flex flex-col gap-4 pr-5 pl-5">
      <section className="grid grid-cols-3  w-full bg-primary-100 dark:bg-primary-700">
        <Day titleDay="Día 1" diaMes="(Lunes 09, oct)" onClick={() => setNumeroDia(0)}/>
        <Day titleDay="Día 2" diaMes="(Martes 02, oct)" onClick={() => setNumeroDia(1)}/>
        <Day titleDay="Día 3" diaMes="(Miercoles 01, oct)" onClick={() => setNumeroDia(2)}/>
      </section>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data[numeroDia].map((item) => (
          <li className="mb-4 ms-4 w-fit">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className=" text-lg font-bold leading-none text-primary-600 dark:text-primary-400">{ item.horario }</time>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{ item.tituloPonencia }</h3>
              <section className="flex w-fit flex-row gap-2 items-center">
                <div>
                  <ImgPonente src={item.foto.src} description={item.descripFoto}/>
                </div>  
                <div>
                  { item.nombrePonente }
                </div>
              </section>

            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </li>
        ))
        }                  
        
  
      </ol>
    </section>
  );
}


