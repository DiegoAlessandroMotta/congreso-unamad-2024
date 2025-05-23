import { data } from './ponentesData';
import { FeaturedProyetTest } from './components/FeaturedProyetTest';
import { OverlayTest } from './components/OverlayTest';
import { useState } from 'react';

interface Props{
	estilos?: string;
}


export function CardsPonentes({estilos=""}: Props){
	const [idPonente, setIdPonente] = useState<number>(0);
	const [modalAbierto, setModalAbierto] = useState<boolean>(false);

  return (
		<section id="projects" className={`${estilos} bg-white dark:bg-[#000000b0] pt-10 pb-10`}>
			<header
				className="px-5 sm:px-8 md:px-14 lg:px-5 justify-center mx-auto flex flex-col items-center text-center max-w-7xl w-full"
			>
				<p
					className={`tracking-wide antialiased
					mb-2 mt-8 md:text-4xl font-extrabold text-black`}
				>
					<span
						className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-primary-500 from-20% via-primary via-50% to-primary-500"
					>
						Expositores
					</span>
				</p>
			</header>

			{/* SECCIÓN DE PONENTES */}
			<article className="px-5 sm:px-8 md:px-14 lg:px-5 justify-center mx-auto flex flex-col items-center text-center max-w-7xl w-full">
				<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{
						data.map((ponente, key) => ( 
							<FeaturedProyetTest 
							  	key={key}
								nombre={ponente.nombre}
								titlePonencia={ponente.titlePonencia}
								estudio={ponente.estudioAbreviado}
								foto={ponente.foto}
								idPonente={key}
								setIdPonente={setIdPonente}
								abrirModal={()=>{setModalAbierto(true)}}
								bandera={ponente.bandera.src}
							/>
						))
					}

					<OverlayTest 
						cerrarModal={()=>{setModalAbierto(false)}}
						modalAbierto={modalAbierto}
						gradoAcademico={data[idPonente].gradoAcademico} 
						foto={data[idPonente].foto} 
						universidad={data[idPonente].estudio} 
						nombre={data[idPonente].nombre} 
						biografia={data[idPonente].biografia} 
					/>

				</div>
			</article>
		</section>

	);
}

