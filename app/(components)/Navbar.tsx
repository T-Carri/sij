
import { useState } from "react"
import { ButtonForm } from "./modalForm/Button"

export const Navbar = () => {
 
    return (
      
      <header className='bg-black w-600  top-0 z-50'> 
    <div className="flex justify-between p-3">
      <div className="flex items-center">
        <span className='text-2xl font-bold text-white sm:text-3xl md:text-4xl'>Soluciones Integrales Jasso</span>
      </div>
      <div className="flex items-center">
       <ButtonForm/>
        
      </div>
    </div>
  </header>

  

  
    )
  }
  
