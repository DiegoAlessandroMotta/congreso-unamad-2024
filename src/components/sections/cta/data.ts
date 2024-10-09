import elHuerto from './assets/hotel-el-huerto.png';
import laTorreInn from './assets/hote-la-torre-inn.png';
// imagenes del hotel "el huerto"
import elHuertoCuarto from './assets/el-huerto-cuarto.jpeg';

// imagenes del hotel "la torre inn"
import laTorreInnCuarto from './assets/la-torre-inn-cuarto.jpg'

export const data = {
  subheading1_1: "Hoteles ",
  subheading1_2: "en",
  subheading1_3: "Puerto Maldonado",
  hoteles:[
    {
      nombre: "LA TORRE INN",
      precios: [
        "s/80 Habitación individual", 
        "s/120 Habitación matrimonial",
        "s/150 Habitación doble",
        "s/66 Habitación triple"
      ],
      coordenada1: "",
      coordenada2: "",
      direccion: "Av. Alameda 1ra Cdra. c/n Cajamarca",
      enlaceDireccion: "https://maps.app.goo.gl/zJYcGAfHHQC3DsSB8",
      enlacePaginaWeb: "https://hotel-latorreinn.com/",
      logo: laTorreInn,
      description: "Su ubicación céntrica permite a los huéspedes acceder fácilmente a los principales atractivos turísticos de la zona, como la Reserva Nacional Tambopata y el Lago Sandoval.",
      fotos:[
        laTorreInnCuarto.src,
      ]
    },
    {
      nombre: "EL HUERTO",
      precios: [
        "s/40 cuarto simple", 
        "s/60-70 doble",
        "s/70 matrimonial",
        "s/140 triple",
        "s/70 king"
      ],
      coordenada1: "",
      coordenada2: "",
      direccion: "Pje. José Carlos Mariátegui 362",
      enlaceDireccion: "https://maps.app.goo.gl/oCBrpgpzEu8Qq8KQ6",
      enlacePaginaWeb: "https://www.tripadvisor.com.pe/Hotel_Review-g298441-d6993869-Reviews-El_Huerto_Hotel-Puerto_Maldonado_Madre_de_Dios_Region.html",
      logo: elHuerto,
      description:"conocido por sus tranquilos jardines y su ambiente relajado. Sus espacios verdes crean un entorno sereno, ideal para quienes buscan una estadía en contacto con la naturaleza.",
      fotos:[
        elHuertoCuarto.src,
      ]
    }
  ]
};
