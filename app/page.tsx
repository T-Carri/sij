import Image from 'next/image'
import Dashboard from './Dashboard'
import { ServerAuthProvider } from '@/auth/server-auth-provider'
const page = () => {
  
  
  
  return (
    <section  className="bg-white" >
      <ServerAuthProvider>
     <Dashboard/>
     </ServerAuthProvider>
     </section>
)
}

export default page