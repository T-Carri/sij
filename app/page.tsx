import Image from 'next/image'
import { ServerAuthProvider } from '@/auth/server-auth-provider'
import ElementsDashboard from './ElementsDashboard'
import { Navbar } from './(components)/Navbar'
import Modal from './(components)/modalForm/Modal'
import { connectDB } from '@/utils/db'
import ST from '@/utils/models/st.models'
import StCard from './(components)/stcard/StCard'

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
  const inicioSTS = await ST.find( { estado: { $ne: "cancelado" } })  
   return inicioSTS
 }


const page = async ({searchParams}: Props) => {

 const test:data[] =  await loadSTS()

 console.log('restart 501:',test)
  
  

  const showModal = searchParams?.modal



  

  return (
<ServerAuthProvider>
  <Navbar/>
<section  className="flex bg-white" >
      <ElementsDashboard/>
  
      <div className='flex-grow p-6'>
<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">

{
  test.map((st) => (
    <div className="h-32 rounded-lg bg-gray-100 h-auto" key={st._id}>
      <StCard values={st} />
    </div>
  ))
}

  <div className="h-32 rounded-lg bg-gray-100"></div>
  <div className="h-32 rounded-lg bg-gray-100"></div>
  <div className="h-32 rounded-lg bg-gray-100"></div>
  <div className="h-32 rounded-lg bg-gray-100"></div>
  <div className="h-32 rounded-lg bg-gray-100"></div>
  <div className="h-32 rounded-lg bg-gray-100"></div>
  <div className="h-32 rounded-lg bg-gray-100"></div>
  <div className="h-32 rounded-lg bg-gray-100"></div>
  <div className="h-32 rounded-lg bg-gray-100"></div>
  <div className="h-32 rounded-lg bg-gray-100"></div>
</div>
     </div>
     </section>
     {showModal && <Modal/> }

     </ServerAuthProvider>
)
}

export default page