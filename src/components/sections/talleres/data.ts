import dron from './assets/dron.png'
import inteligencia from './assets/inteligencia-artificial.png';
import luisJose from "./assets/luis jose.webp";
import ponceAtencio from "./assets/yalmar temistoqles.webp";

export const data = [
    {
        nombreTaller: "TALLER DE TECNOLOGÍAS DE DRONES Y SATÉLITES APLICADAS AL SECTOR TURISMO, FORESTAL Y AGRICULTURA",
        nombrePonente: "Luis José Díaz López",
        fotoPonente: luisJose,
        linkMasInformacion: "/dron",
        fotoBaner: dron,
        orden: true,
        colorInicio: "from-gray-500",
        colorFin: "to-gray-900",
        colorBtn: "bg-gray-800",
        colorPonente: "bg-gray-700",
        idBtn: "dron"
    },
    {
        nombreTaller: "TALLER DE INTELIGENCIA ARTIFICIAL PARA LA EDUCACIÓN Y EL TRABAJO",
        nombrePonente: "Ponce Atencio Yalmar Temistocles",
        fotoPonente: ponceAtencio,
        linkMasInformacion: "/inteligencia",
        fotoBaner: inteligencia,
        orden: false,
        colorInicio: "from-sky-500",
        colorFin: "to-sky-900",
        colorBtn: "bg-sky-900",
        colorPonente: "bg-sky-800",
        idBtn: "inteligencia"
    }
]