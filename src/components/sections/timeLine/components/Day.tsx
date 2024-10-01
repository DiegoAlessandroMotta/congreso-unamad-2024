interface Prop{
  titleDay: string,
  diaMes: string
  onClick: ()=>void
}

export function Day({titleDay, diaMes, onClick} : Prop){
  return (
    <div
    onClick={onClick} 
    className="flex flex-col items-center hover:bg-primary-500 hover:text-white pt-2 pb-2 transition-colors duration-500">
      <p className="font-bold text-xl">{titleDay}</p>
      <p className="" >{diaMes}</p>
    </div>
  );
}