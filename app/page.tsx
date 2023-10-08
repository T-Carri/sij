import Link from 'next/link'
import { Suspense } from 'react';
import { ServerAuthProvider } from '@/auth/server-auth-provider'
import { Navbar } from './(components)/Navbar'
import Loading from './loading';




async function gmailAccount(){

  const res = await fetch(`http://localhost:3000/api/resolucion`)
    const data = await res.json()
    return data;
}


const page = async ( ) => {


  //busca la forma de hacer revalidate path cada cierto tiempo
  //para que verifique que el correo este sincrinizado en tiempo real
  const account= await gmailAccount()


return (
<Suspense fallback={ <Loading/>}>

  <Navbar/>
  <section className="  m-20 mt-10 bg-white">
  <div className="  grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    <div className=" rounded-lg bg-gray-200">
      <ul >
        <li className='m-3'>
          <a href="/sts/stmain" className="group relative block h-30 sm:h-30 lg:h-30">
            <span className="absolute inset-0 border-2 border-dashed border-black "></span>
            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 ">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">St</h2>
              </div>
              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-3 lg:p-5">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">St</h3>
                <p className="mt-4 text-sm sm:text-base">
                  Visita la ventana principal de St.
                </p>
              
              </div>
            </div>
          </a>
        </li>
        <li className='m-5'>
          <a href="/sts/stmain" className="group relative block h-30 sm:h-15 lg:h-30">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>
            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">St cancelados</h2>
              </div>
              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">St cancelados</h3>
                <p className="mt-4 text-sm sm:text-base">
                 Visita la pagina de St cancelados.
                </p>
              
              </div>
            </div>
          </a>
        </li>
        <li className='m-5 '>
          <a href="" className="group relative block h-30 sm:h-15 lg:h-30">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>
            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">St Finalizados</h2>
              </div>
              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">St Finalizados</h3>
                <p className="mt-4 text-sm sm:text-base">
                  Visita la página de los St Finalizados.
                </p>
            
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div className="h-40 rounded-lg  lg:col-span-2">



    <div 
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-3 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-5">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full "
      >

<img
          alt="gmail"
          src="/gmail.jpg"
          className="absolute inset-0 h-full w-full object-cover "
        />


      </div>

{account? <div className="lg:py-24">
<h2 className="text-3xl font-bold sm:text-4xl">Cuenta sincronizada:</h2>  
  

  

    <p className="mt-7 text-gray-600" >
      {account.emailAddress}
    </p>
 

  </div>
  : <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Actualiza con Gmail</h2>

        <p className="mt-4 text-gray-600">
        Sincroniza el portal SIM con el correo registrado dando click en el boton.
        </p>

        <a
        
          className="mt-8 inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-500 focus:outline-none focus:ring focus:ring-yellow-400"
        >
         Sincronizar
        </a>
      </div> }
     
    </div>
  </div> 




    </div>
  </div>
</section>







     
     
     
      </Suspense>
)
}

export default page