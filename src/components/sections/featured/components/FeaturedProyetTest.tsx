interface Props {
  nombre: string,
  titlePonencia: string,
  estudio: string,
  foto: string,
  bandera: string,
	idPonente: number,
	setIdPonente: (id: number)=>void,
	abrirModal: ()=>void
}

export function FeaturedProyetTest({nombre,titlePonencia,estudio,foto,idPonente,setIdPonente, abrirModal, bandera}: Props){
	return (
		<div
			id = {idPonente+""}
			className="group overflow-hidden rounded-lg h-full flex flex-col dark:bg-base-dark-800 shadow-lg dark:shadow-dark ring-1 ring-black/5 pt-1"
		>
			<div className="relative h-96">
				<div className="overflow-hidden">
					<img 
						src={foto}
						alt="Hero"
						className="w-full h-96 object-cover group-hover:scale-105 duration-300 ease-in-out"
					/>
				</div>
				
				{/* bandera */}
				<div className="absolute top-2 left-2 h-[40px] w-fit overflow-hidden">
					<img src={bandera} className="object-cover h-full"  alt="bandera del ponente" />
				</div>

				<p
					className="absolute top-0 end-0 pr-2 pl-1 rounded-[0px_0px_0px_10px] text-end text-xl text-primary-900/50 dark:text-primary/70 font-bold bg-white dark:bg-base-dark-700"
				>
					{estudio}
				</p>
				
			</div>
			<div className="grid grid-cols-1 content-between w-full h-full p-6">
				<h3 className={`text-2xl font-bold leading-tight mb-4 dark:opacity-70  nombre_date`}>
					{nombre}
				</h3>
				<div className="self-baseline">
					<div className="text-sm opacity-60  ponencia_date">
						{titlePonencia}
					</div>
				</div>
				<div className="self-end mt-4">

					<button
						className={`
							boton_z hover:bg-primary-600 
							dark:text-primary-700
							dark:hover:text-white
							hover:text-white
							text-primary-700
							rounded-lg outline-none relative overflow-hidden px-6 py-3 
							border-primary-700 border-[1px] bg-transparent
							duration-300 ease-linear
							active:bg-primary-700 disabled:bg-primary-200  disabled:text-primary-700
						`}
						onClick={()=>{setIdPonente(idPonente); abrirModal()}}
					>
						VER BIOGRAFIA
					</button>

					{/* <Button variant="outline" color="primary" valor={id} > VER BIOGRAFIA </Button> */}
				</div>
			</div>
		</div>
	);
}