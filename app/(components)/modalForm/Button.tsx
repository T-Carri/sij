'use client'


import { useRouter } from "next/navigation"
import { Button } from "@/ui/Button"
import Link from "next/link"



export const ButtonForm = () => {

  const route = useRouter()


  return (
    
    <Button onClick={()=>route.push('/?modal=true')} className="rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 ">
        
        
        Agregar ST 
        
        </Button>
       
       )
}

