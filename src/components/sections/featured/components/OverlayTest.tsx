interface Props {
  modalAbierto: boolean;
  gradoAcademico: string;
  foto: string;
  universidad: string;
  nombre: string;
  biografia: string;
  cerrarModal: () => void;
}

export function OverlayTest({
  gradoAcademico,
  foto,
  universidad,
  nombre,
  biografia,
  modalAbierto,
  cerrarModal,
}: Props) {
  return (
    <div
      className={`
		${modalAbierto ? "" : "hidden"} 
		fixed inset-0 bg-gray-800 bg-opacity-75 z-50 h-[100vh]`}
    >
      <div className="flex mt-14 justify-center max-h-[100vh]">
        <div className="flex relative flex-col bg-white dark:bg-[#080808de] rounded-lg max-w-[800px] max-h-[80vh] overflow-auto overscroll-contain">
          {/*  Botón X de cierre  */}
          <header
            onClick={cerrarModal}
            className="absolute top-0 right-0 cursor-pointer text-xl text-white z-10"
          >
            <div className="flex justify-center items-center w-12 h-12 bg-primary-500 rounded-[0px_0px_0px_10px]">
              <div>X</div>
            </div>
          </header>
          {/*  fin Botón X de cierre  */}

          {/*  contenido del modal */}
      <section className="p-4 bg-gray-100 dark:bg-[#1b1b1bad]">
				<div className="flex max-lg:flex-col gap-4">
					<div
						id="imagenes"
						className="flex-shrink-0 xl:sticky top-4 max-lg:flex max-lg:flex-row max-lg:w-full max-lg:justify-center  w-60 h-60 overflow-hidden rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
					>
						<img
						src={foto}
						alt="foto del ponente"
						className="h-full lg:w-full object-cover"
						/>
					</div>
					<div className="flex-grow">
						<p
						id="gradoAcademicoPonente"
						className="text-center text-xl text-black dark:text-white font-bold mb-2"
						>
						{gradoAcademico}
						</p>
						<h2
						id="nombrePonente"
						className="text-2xl font-bold text-black dark:text-white mb-4"
						>
						{nombre}
						</h2>
						<p
						id="estudioPonente"
						className="text-center text-black dark:text-white font-semibold"
						>
						{universidad}
						</p>
						<p
						id="biografiaPonente"
						className="text-gray-700 mb-2 dark:text-white text-justify"
						>
						{biografia}
						</p>
					</div>
				</div>
      </section>
          {/*  fin contenido del modal */}

          {/* Botón de cierre */}
          <footer className="flex justify-end p-4">
            <button
              className="bg-primary-500 text-white px-4 py-2 rounded"
              onClick={cerrarModal}
            >
              Cerrar
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
