import dron from './assets/dron.png'
import inteligencia from './assets/inteligencia-artificial.png';
import luisJose from "./assets/luis jose.webp";
import ponceAtencio from "./assets/yalmar temistoqles.webp";
import luisDiaz from "./assets/Luis-diaz.jpg"

export const data = [
    {
        nombreTaller: "TALLER DE TECNOLOGÍAS DE DRONES Y SATÉLITES APLICADAS AL SECTOR TURISMO, FORESTAL Y AGRICULTURA",
        nombrePonente: "Luis José Díaz López",
        fotoPonente: luisDiaz,
        linkMasInformacion: "/dron",
        fotoBaner: dron,
        orden: true,
        colorInicio: "from-gray-500",
        colorFin: "to-gray-900",
        colorBtn: "bg-gray-800",
        colorPonente: "bg-gray-700",
        idBtn: "dron",
        cronograma : {
            virtual: {
                title: "Virtual",
                horario: [
                    {
                        fecha: "14 de octubre",
                        intervaloHoras: [
                            "21:00 a 22:30"
                        ]
                    },
                    {
                        fecha: "15 de octubre",
                        intervaloHoras: [
                            "21:00 a 22:30"
                        ]
                    },
                    {
                        fecha: "16 de octubre",
                        intervaloHoras: [
                            "21:00 a 22:30"
                        ]
                    }
                ]
            },
            presencial: {
                title: "Presencial",
                horario: [
                    {
                        fecha: "19 de octubre",
                        intervaloHoras: [
                            "9:00 a 13:00",
                            "15:00 a 18:00" 
                        ]
                    },
                    {
                        fecha: "20 de octubre",
                        intervaloHoras: [
                            "9:00 a 13:00"
                        ]
                    }
                ]
            }
        }
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
        idBtn: "inteligencia",
        cronograma : {
            virtual: {
                title: "Virtual",
                horario: [
                    {
                        fecha: " sin definir ",
                        intervaloHoras: []
                    },
                ]
            },
            presencial: {
                title: "Presencial",
                horario: [
                    {
                        fecha: " sin definir ",
                        intervaloHoras: []
                    }
                ]
            }
        }
    }
]