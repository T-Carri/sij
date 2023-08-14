import { Button } from "../../ui/Button"
export const Navbar = () => {
    return (
      <header className='bg-black w-600  top-0 z-50'> 
    <div className="flex justify-between p-3">
      <div className="flex items-center">
        <span className='text-2xl font-bold text-white sm:text-3xl md:text-4xl'>Soluciones Integrales Jasso</span>
      </div>
      <div className="flex items-center">
        <Button className="rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 ">
        Agregar ST 
        </Button>
        
      </div>
    </div>
  </header>
  
    )
  }
  
