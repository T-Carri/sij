import Image from 'next/image'
import { ServerAuthProvider } from '@/auth/server-auth-provider'
import ElementsDashboard from './ElementsDashboard'
import { Navbar } from './(components)/Navbar'
import Modal from './(components)/modalForm/Modal'

type Props = {
  searchParams: Record<string, string> | null | undefined;
}

const page = ({searchParams}: Props) => {
  
  const showModal = searchParams?.modal

  return (
<ServerAuthProvider>
  <Navbar/>
<section  className="flex bg-white" >
      <ElementsDashboard/>
      <div className='flex-grow p-6'>
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
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