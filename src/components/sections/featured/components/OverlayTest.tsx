interface Props{
	modalAbierto: boolean,
	gradoAcademico: string,
	foto: string,
	universidad: string,
	nombre: string,
	biografia: string,
	cerrarModal: ()=>void
}

export function OverlayTest({gradoAcademico,foto,universidad,nombre,biografia, modalAbierto, cerrarModal}: Props){
  return (
		<div
			className={`
				${modalAbierto? "" : "hidden"} 
				fixed inset-0 bg-gray-800 bg-opacity-75 z-50 h-[100vh]`}
		>
			<div className="flex mt-14 justify-center max-h-[100vh]">
				<div
					className="flex relative flex-col bg-white rounded-lg max-w-[800px] max-h-[80vh] overflow-auto overscroll-contain"
				>
					{/*  Botón X de cierre  */}
					<header
						onClick={cerrarModal}
						className="absolute top-0 right-0 cursor-pointer text-xl text-white z-10"
					>
						<div
							className="flex justify-center items-center w-12 h-12 bg-primary-500 rounded-[0px_0px_0px_10px]"
						>
							<div>X</div>
						</div>
					</header>
					{/*  fin Botón X de cierre  */}

					{/*  contenido del modal */}
					<section
						className="grid grid-cols-[1fr_auto] gap-3 p-4 max-lg:grid-cols-1 dark:bg-gray-100"
					>
						<div>
							<div
								className="sticky top-0 max-lg:flex max-lg:flex-col max-lg:items-center"
							>
								<p
									id="gradoAcademicoPonente"
									className="text-center text-xl text-black font-bold"
								>
									{ gradoAcademico }
								</p>
								<div
									id="imagenes"
									className="flex justify-center items-center w-60 h-60 overflow-hidden rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
								>
									<img
										src={foto}
										alt="foto del ponente"
										className="h-full object-cover hidden"
									/>
								</div>
								<p id="estudioPonente" className="text-center text-black font-semibold">
									{universidad}
								</p>
							</div>
						</div>
						<div>
							<h2 id="nombrePonente" className="text-2xl font-bold text-black mb-4">
								{nombre}
							</h2>
							<p id="biografiaPonente" className="text-gray-700 mb-2">
								{biografia}
							</p>
						</div>
					</section>
					{/*  fin contenido del modal */}

					{/* Botón de cierre */}
					<footer className="flex justify-end p-4">
						<button
							className="bg-primary-500 text-white px-4 py-2 rounded"
							onClick={cerrarModal}
							>Cerrar
						</button>
					</footer>
				</div>
			</div>
		</div>
	);
}