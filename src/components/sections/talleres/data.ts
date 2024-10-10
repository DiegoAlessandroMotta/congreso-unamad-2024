import dron from './assets/dron.png'
import inteligencia from './assets/inteligencia-artificial.png'
import ponente1 from './assets/baldo luque.webp'
import ponente2 from './assets/anselmo rodriguez.webp'

export const data = [
    {
        nombreTaller: "TALLER DE TECNOLOGÍAS DE DRONES Y SATÉLITES APLICADAS AL SECTOR TURISMO, FORESTAL Y AGRICULTURA",
        nombrePonente: "Agusto Soto Motencho Raquita",
        fotoPonente: ponente1,
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
        nombrePonente: "Dany Dorian Isuiza Pérez",
        fotoPonente: ponente2,
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