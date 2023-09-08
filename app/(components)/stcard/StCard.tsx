import React from 'react'

interface valores{
  _id:string,
  region: string,
  folio:string, 
  tienda: string, 
  trabajo:string, 
  fecha: string,
  presupuestado:boolean,
  estado: string, 
  ppto: string,
  peticioncancelacion:boolean, 
  finalizado:boolean,
  
}


function formatearFecha(fechaString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',     // Nombre completo del día de la semana
    day: '2-digit',     // Día del mes con dos dígitos
    month: 'long',      // Nombre completo del mes
    year: 'numeric',    // Año con cuatro dígitos
  };

  const fecha = new Date(fechaString);
  return fecha.toLocaleDateString('es-ES', options);
}

const StCard = ({values}:valores) => {


  return (
    <a
  href="#"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-2 sm:p-4 lg:p-4"
>

{values.estado=='aceptado'? <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-gray-400 to-slate-500"
  ></span>    :null}
        {values.estado=='revisado'?<span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-500 via-gray-400"
  ></span> :null}
        {values.estado=='cancelado'?<span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-300 via-gray-400"
  ></span> :null}
        {values.estado=='pendiente'?<span
  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-400 via-gray-400 to-slate-500"
></span>:null}





  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        Folio: {values.folio}
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">
        {
          values.presupuestado?<span
          className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-grey-700"
        >
          Tienda {values.tienda}
        </span> :`Tienda ${values.tienda}`
        }
        
        
        </p>
    </div>

    <div className="hidden sm:block sm:shrink-0 shadow-none ">
        {values.estado=='aceptado'?<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="green"
          className="h-16 w-16 rounded-lg object-cover shadow-none "
        >
           <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg> :null}
        {values.estado=='revisado'?<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#1450A3"
          className="h-16 w-16 rounded-lg object-cover shadow-none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg> :null}
        {values.estado=='cancelado'?<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-16 w-16 rounded-lg object-cover shadow-none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg> :null}
        {values.estado=='pendiente'?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         stroke-width="1.5" stroke="black" className="h-16 w-16 rounded-lg object-cover shadow-none">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>:null}
    </div>
  </div>
        
      

  <div className="mt-2">
    <p className="max-w-[40ch] text-sm text-gray-500">
      {formatearFecha(values.fecha)}
    </p>
  </div>

  <dl className="mt-2 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
         {values.region}
      </h3>
    </div>

   {
    values.presupuestado?<div className="flex flex-col-reverse">
    <dt className="text-sm font-medium text-gray-600"> {values.ppto}</dt>
    <dd className="text-xs text-gray-500">PPTO</dd>
  </div> : null
   } 

  </dl>
</a>
  )
}

export default StCard




