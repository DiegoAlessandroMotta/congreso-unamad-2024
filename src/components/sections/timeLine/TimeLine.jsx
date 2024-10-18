
import { data } from "./data"
import { ImgPonente } from "./components/ImgPonente"
import { Day } from "./components/Day";
import React, { useState } from "react";

export function TimeLine(){

  const [numeroDia, setNumeroDia] = useState(0);
  const [opc1, setopc1] = useState(true);
  const [opc2, setopc2] = useState(false);
  const [opc3, setopc3] = useState(false);
  const [opc4, setopc4] = useState(false);

  function a1(){
    setopc1(true);
    setopc2(false);
    setopc3(false);
    setopc4(false);
  }
  function a2(){
    setopc1(false);
    setopc2(true);
    setopc3(false);
    setopc4(false);
  }
  function a3(){
    setopc1(false);
    setopc2(false);
    setopc3(true);
    setopc4(false);
  }

  function a4(){
    setopc1(false);
    setopc2(false);
    setopc3(false);
    setopc4(true);
  }

  return (
    <section id="LineaDeTiempo" className="flex justify-center bg-white dark:bg-[#000000b0] pt-10 pb-10">
      <article className="flex flex-col gap-4 pr-5 pl-5 md:w-[650px] max-md:w-full">
        <h2 className="tracking-wide antialiased mb-5 text-lg md:text-4xl font-extrabold text-center">
          <p
            className={`tracking-wide antialiased
            mb-2 mt-8 text-lg md:text-4xl font-extrabold text-black`}
          >
            <span
              className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-primary-500 from-20% via-primary via-50% to-primary-500"
            >
              Cronograma
            </span>
          </p>
        </h2>

        <section className="grid sm:grid-cols-3 max-sm:grid-cols-2 w-full bg-primary-100 dark:bg-primary-700">
          <Day activo={opc1} titleDay="Día 1" diaMes="< Miércoles 16, oct >" onClick={() => {setNumeroDia(0); a1();}}/>
          <Day activo={opc2} titleDay="Día 2" diaMes="< Jueves 17, oct >" onClick={() => {setNumeroDia(1); a2();}}/>
          <Day activo={opc3} titleDay="Día 3" diaMes="< Viernes 18, oct >" onClick={() => {setNumeroDia(2); a3();}} styleResponsive={""}/>
          <Day activo={opc4} titleDay="Día 4" diaMes="< Sábado 19, oct >" onClick={() => {setNumeroDia(3); a4();}} styleResponsive={"sm:col-start-1 sm:col-end-4 max-sm:col-start-2 max-sm:col-end-3 "}/>
        </section>

        <ol className="relative border-s border-primary-200 dark:border-primary-700 dark:bg-[#2e2e2ead]">
          { opc3 ? (
              <p className="text-xl text-primary-800 text-center py-4 font-bold ">
                LUGAR: Av. Dos de Mayo N° 960 - Septimo piso del Centro de Idiomas de la UNAMAD
              </p>
            ):(
              <span></span>
            )
          }
          { opc4 ? (
              <p className="text-xl text-primary-800 text-center py-4 font-bold ">
                LUGAR: Ciudad Universitaria de la UNAMAD
              </p>
            ):(
              <span></span>
            )
          }
          {data[numeroDia].map((item, key) => (
            <li className="mb-7 ms-4 w-fit shadow-sm" key={key}>
              <div className="absolute w-3 h-3 bg-primary-200 rounded-full mt-1.5 -start-1.5 border border-primary dark:border-primary-900 dark:bg-primary-700"></div>
              <time className=" text-lg font-bold leading-none text-primary-600 dark:text-primary-400">{ item.horario }</time>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{ item.tituloPonencia }</h3>
              <section className="flex w-fit flex-row gap-2 items-center">
                <div>
                  <ImgPonente src={item.foto} description={item.descripFoto}/>
                </div>  
                <div>
                  { item.nombrePonente }
                </div>
              </section>
            </li>
          ))
          }                  
        </ol>
      </article>
    </section>
  );
}


