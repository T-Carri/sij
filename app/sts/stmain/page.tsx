import { Navbar } from "@/app/(components)/Navbar";
import ElementsDashboard from "@/app/ElementsDashboard";
import Modal from "@/app/(components)/modalForm/Modal";
import { connectDB } from "@/utils/db";
import ST from "@/utils/models/st.models";
import StCard from "@/app/(components)/stcard/StCard";
import Link from 'next/link'

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
         <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
   
   
       {
         informacion.map((st) => (
       
         <Link key={st._id} href={`/sts/${st._id}`}>
   
          
     
              <div className="h-32 rounded-lg bg-gray-100 h-auto" key={st._id}>
           <StCard values={st} />
            
             </div>
            
         </Link>
       
       ))
   }
        
   
   </div>
        </div>
        </section>
   
   
        {showModal && <Modal/> }
   
        
        
      </>
   )
   }
   
   export default page




