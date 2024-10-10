import logoCoati from "./assets/logoCoati.webp";
import guacamayo from "./assets/guacamayo.png";
import leopardo from "./assets/leopard.png";
import { Contador } from "../contador/Contador";

export function Presentacion() {
  return (
    <article className="relative mt-[150px] h-[550px]">
      <div className="flex flex-row justify-center">
        <img src={logoCoati.src} alt="" className="h-[100px] max-sm:w-full max-sm:h-auto" />
      </div>

      <p className="text-center text-white text-3xl font-bold">
        III Congreso Internacional <br /> Amazónico de Tecnología e Informática
        <br /> 2024
      </p>

			<Contador/>

      <div className="absolute flex flex-row justify-between w-full px-5 bottom-0 z-[-1]">
        <img style={{maskImage: 'linear-gradient(black 80%, transparent)'}} src={leopardo.src} alt="" className="h-[60vh] object-cover max-lg:hidden" />
        <img style={{maskImage: 'linear-gradient(black 80%, transparent)'}} src={guacamayo.src} alt="" className="h-[60vh] object-cover max-lg:hidden" />
      </div>


			<a href="https://docs.google.com/forms/d/e/1FAIpQLScI6ed6wAelZQdTrL3-JxyF6L1sge7n1s-kOp6ZTLPHQVgaOQ/viewform" 
				target="__black"
				className="flex flex-row justify-center"
				>
				<p className="bg-gradient-to-r from-primary-500 to-primary-800 font-bold text-white px-5 py-2 rounded-lg shadow-2xl">
					¡Registrate!				
				</p>
			</a>

	  <div className="absolute bottom-0 w-full text-primary-500 dark:text-transparent" >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 1440 300" height="50px" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,128L17.1,117.3C34.3,107,69,85,103,90.7C137.1,96,171,128,206,122.7C240,117,274,75,309,90.7C342.9,107,377,181,411,181.3C445.7,181,480,107,514,74.7C548.6,43,583,53,617,96C651.4,139,686,213,720,224C754.3,235,789,181,823,176C857.1,171,891,213,926,208C960,203,994,149,1029,144C1062.9,139,1097,181,1131,176C1165.7,171,1200,117,1234,122.7C1268.6,128,1303,192,1337,192C1371.4,192,1406,128,1423,96L1440,64L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path>
        </svg>
      </div>
      <div className="absolute bottom-0 w-full text-white dark:text-[#000000b0]	" >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 1440 300" height="50px" preserveAspectRatio="none">
					<path fill="currentColor" d="M0,224L17.1,197.3C34.3,171,69,117,103,96C137.1,75,171,85,206,106.7C240,128,274,160,309,165.3C342.9,171,377,149,411,154.7C445.7,160,480,192,514,192C548.6,192,583,160,617,170.7C651.4,181,686,235,720,256C754.3,277,789,267,823,234.7C857.1,203,891,149,926,144C960,139,994,181,1029,192C1062.9,203,1097,181,1131,154.7C1165.7,128,1200,96,1234,74.7C1268.6,53,1303,43,1337,64C1371.4,85,1406,139,1423,165.3L1440,192L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path>
        </svg>
      </div>
    </article>
  );
}
