import { Navbar } from "@/app/(components)/Navbar";
import ElementsDashboard from "@/app/ElementsDashboard";
import Modal from "@/app/(components)/modalForm/Modal";
import { connectDB } from "@/utils/db";
import ST from "@/utils/models/st.models";
import StCard from "@/app/(components)/stcard/StCard";
import Link from 'next/link'
import { AddSt } from "@/app/(components)/addSt/AddSt";

type Props = {
    searchParams: Record<string, string> | null | undefined;
  }

interface data{
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

  export async function loadSTS() {
    await connectDB()
    const inicioSTS = await ST.find( {
          estado: { $ne: "cancelado" },
          finalizado: { $ne: true }
    } 
      )  
      
     return inicioSTS
   }

   const page = async ({searchParams}: Props ) => {

    const informacion:data[] =  await loadSTS()
   
   
     
     
   
     const showModal = searchParams?.modal
   
   
   
     
   
     return (
        <>
     <Navbar/>
   <section  className="flex bg-white" >
        
        
        
         <ElementsDashboard/>
     
         <div className='flex-grow p-6'>
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
              Folio
            </th>
            <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
              Tienda
            </th>
            <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
              Trabajo
            </th>
            <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
              Fecha
            </th>
            <th className="px-2 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {informacion.map((st, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                {st.folio}
              </td>
              <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                {st.tienda}
              </td>
              <td className="whitespace-nowrap px-2 py-2 text-gray-700 scrolling-text">
                <div className="scrolling-content">{st.trabajo}</div>
              </td>
              <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                {st.fecha}
              </td>
              <td className="whitespace-nowrap px-2 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-2 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
<AddSt/>
        </section>
   
   
        {showModal && <Modal/> }
   
        
        
      </>
   )
   }
   
   export default page





