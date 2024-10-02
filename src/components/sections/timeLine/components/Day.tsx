interface Prop{
  titleDay: string,
  diaMes: string,
  onClick: ()=>void,
  styleResponsive?: string,
}

export function Day({titleDay, diaMes, onClick, styleResponsive} : Prop){
  return (
    <div
      onClick={onClick} 
      className={`cursor-pointer flex flex-col items-center hover:bg-primary-500 hover:text-white pt-2 pb-2 transition-colors duration-500 ${styleResponsive}`}>
      <p className="font-bold text-xl max-sm:text-lg">{titleDay}</p>
      <p className="sm:text-xs text-center" >{diaMes}</p>
    </div>
  );
}