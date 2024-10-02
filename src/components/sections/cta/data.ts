import svg1 from "./assets/green-1.svg?raw";
import svg2 from "./assets/green-2.svg?raw";
import svg3 from "./assets/green-3.svg?raw";
import svg4 from "./assets/green-4.svg?raw";

export const getInvolvedSection = {
  title: "Involucrate",
  subheading1_1: "Únete a nosotros",
  subheading1_2: " para construir un futuro sostenible",
  initiatives: [
    {
      title: "Alcance comunitario",
      description:
        "Descubra nuestras iniciativas comunitarias destinadas a promover la concienciación y la educación sobre la vida sostenible. Únase a nosotros para crear un impacto positivo juntos",
      visual: svg2,
    },
    {
      title: "Eventos verdes",
      description:
        "Participe en nuestros próximos eventos ecológicos. Desde campañas de plantación de árboles hasta talleres ecológicos, forme parte del movimiento hacia un planeta más saludable.",
      visual: svg4,
    },
    {
      title: "Alianzas para la sostenibilidad",
      description:
        "Explora nuestras alianzas con organizaciones dedicadas a la conservación del medio ambiente. Descubre cómo puedes contribuir a prácticas sostenibles mediante la colaboración.",
      visual: svg3,
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Take Action Today for a Greener Tomorrow",
  button: "Join Our Initiatives",
};
