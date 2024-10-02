
interface Props {
  src: string,
  description: string,
}

export function ImgPonente({src, description} :Props){
  return (
  <section className={`w-20 h-20 overflow-hidden rounded-lg`}>
    <img src={src} alt={description} />
  </section>
  );
}
