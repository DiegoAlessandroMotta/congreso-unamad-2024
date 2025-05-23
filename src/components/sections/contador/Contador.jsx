import { useState, useEffect } from 'react';

export function Contador() {
  const targetDate = new Date('2024-10-16T07:59:59').getTime(); // Fecha objetivo
  const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeRemaining = targetDate - Date.now();
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining <= 0) {
        clearInterval(interval); // Detener el intervalo si el tiempo ha terminado
      }
    }, 900); // Actualizar cada segundo

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [targetDate]); // Añadir targetDate como dependencia

  if (timeRemaining <= 0) {
    return <p style={{textShadow: '0px 0px 10px red'}} className="text-red-500 text-4xl text-center my-4 font-bold ">¡Concluido!</p>;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

return (
    <div className="text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Inicia en:</h1>
        <div className="flex justify-center items-center max-sm:text-2xl text-4xl space-x-4">
            <div className='bg-[#2e2e2ead] p-1 rounded-lg shadow-md'>
                <p className="font-mono">{days}</p>
                <p className="max-sm:text-xs text-sm">Días</p>
            </div>
            <p className="font-mono">:</p>
            <div className='bg-[#2e2e2ead] p-1 rounded-lg shadow-md'>
                <p className="font-mono">{hours}</p>
                <p className="max-sm:text-xs text-sm">Horas</p>
            </div>
            <p className="font-mono">:</p>
            <div className='bg-[#2e2e2ead] p-1 rounded-lg shadow-md'>
                <p className="font-mono">{minutes}</p>
                <p className="max-sm:text-xs text-sm">Minutos</p>
            </div>
            <p className="font-mono">:</p>
            <div className='bg-[#2e2e2ead] p-1 rounded-lg shadow-md'>
                <p className="font-mono">{seconds}</p>
                <p className="max-sm:text-xs text-sm">Segundos</p>
            </div>
        </div>
    </div>


  );
}
