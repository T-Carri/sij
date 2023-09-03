import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import DatePicker from 'react-rainbow-components/components/DateTimePicker'
import {Formik, useFormik, Field, Form  } from 'formik';
import { useRouter } from 'next/navigation'
import * as Yup from 'yup';



 
 

interface FormValues {
  region: string;
  folio: string;
  tienda: string;
  trabajo: string;
  fecha: string;
  presupuestado:boolean;
  estado: string;
  ppto:string;
  peticioncancelacion:boolean;
}



function FormularioST() {
  
  const route = useRouter()
  const [Presupuesto, usePresupuesto] = useState(false)
  const [State, setState] = useState('pendiente')
  const [inputValuePPTO, setInputValuePPTO] = useState<any>('');
  const [Pcancelacion, setPcancelacion ]= useState(false)

  const handleChange = (event: any) => {
    const { value, selectionStart, selectionEnd } = event.target;
    
    // Obtén el código de la tecla presionada
    const key = event.nativeEvent.inputType;
  
    // Verifica si se presionó la tecla "Delete" y si hay una selección
    if (key === 'deleteContentBackward' && selectionStart === selectionEnd) {
      // Elimina el carácter en la posición actual de selección
      const newValue = value.slice(0, selectionStart - 1) + value.slice(selectionEnd);
      setInputValuePPTO(newValue);
      return;
    }
  
    // Eliminar caracteres no numéricos y puntos adicionales
    const numericValue = value.replace(/[^0-9.]/g, '');
  
    // Formatear el número como una cadena de moneda en pesos mexicanos (MXN)
    const formattedValue = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    }).format(parseFloat(numericValue));
  
    setInputValuePPTO(formattedValue);
  };
  
//
const changePresupuesto = (event: React.MouseEvent<HTMLButtonElement>)=>{
  event.preventDefault()
  const buttonId = event.currentTarget.getAttribute('data-button-id');
 if(buttonId=='enable'){
  usePresupuesto(true)

 } else if (buttonId=='unable') {
  usePresupuesto(false)
 setState('')
 }

} 

const changeState = (event: React.MouseEvent<HTMLButtonElement>)=>{
  event.preventDefault()
  const buttonId = event.currentTarget.getAttribute('data-button-id');

  if (buttonId=='1') {
    setState('aceptado')
    setInputValuePPTO('')
    
  }else if(buttonId=='2'){
    setState('revisado')
    setInputValuePPTO('')
  }else if (buttonId=='3'){
    setState('cancelado')
    setInputValuePPTO('')
  }

}

const changePcancelacion=(event: React.MouseEvent<HTMLButtonElement>)=>{
  event.preventDefault()
  const buttonId = event.currentTarget.getAttribute('data-button-id');
if (buttonId=='activarpc') {
  setPcancelacion(true)
}else if(buttonId=='desactivarpc'){
  setPcancelacion(false)
}

}
  

  const initialValues:FormValues= {
    region: "",
    folio: "",
    tienda: "",
    trabajo: "",
    fecha: "",
    presupuestado:false,
    estado: "" ,
    ppto:"",
    peticioncancelacion:false

  }


  

 
  const onSubmit = (values: FormValues) => {
     
    values.presupuestado=Presupuesto
    values.estado= State
    values.ppto= inputValuePPTO
    values.peticioncancelacion= Pcancelacion
    setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    }, 500);

//aqui vas a colocar la llamada al rever action que va a postear el st 
//investiga y lee como hacer el post


    };


//Interruptor presupuestado false por defecto OK make effect at values
//Si se cambia interruptor a true,  
//aparecera barra de ESTADOS null por defecto
//con opciones 
//[ACEPTADO, REVISADO, CANCELADO] OK
//si aceptado renderizar input de presupuesto final 
//Interruptor "Pedir Cancelacion" 



  return (
    
    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form>

    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div >
        <div className="mx-auto flex h-12 w-59 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
          </svg>
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Captura ST</h3>
          

          <div className="mt-2">
                
               
                
                    <div>
                          <label
                              htmlFor="region"
                              className="block text-sm font-medium text-gray-700"
                            >
                              REGION
                            </label>
                            <Field 
                              name="region"
                              className="w-full rounded-lg border-gray-200 p-3 text-sm text-black"
                              placeholder="Region"
                              type="text"
                              id="region"
                              
                            />
                          </div> 
                
                          
                    <div>
                    <label
                              htmlFor="folio"
                              className="block text-sm font-medium text-gray-700"
                            >
                              FOLIO 
                            </label>
                            <Field 
                              name="folio"
                              className="w-full rounded-lg border-gray-200 p-3 text-sm text-black"
                              placeholder="Folio"
                              type="text"
                              id="folio"
                              
                            />
                          </div>
                
                          <div>
                          <label
                              htmlFor="tienda"
                              className="block text-sm font-medium text-gray-700"
                            >
                         TIENDA
                            </label>
                            <Field 
                              name="tienda"
                              className="w-full rounded-lg border-gray-200 p-3 text-sm text-black"
                              placeholder="Region"
                              type="text"
                              id="tienda"
                              
                            />
                          </div>
                          
                    <div>
                    <label
                              htmlFor="trabajo"
                              className="block text-sm font-medium text-gray-700"
                            >
                              TRABAJO A REALIZAR
                            </label>
                            <Field 
                            as="textarea"
                              name="trabajo"
                              row={4}
                              className="block w-full  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              
                              type="text"
                              id="trabajo"
                              
                            />
                
                         
                          </div>
                          
                    <div className='mt-3'>
                    <label
                              htmlFor="fecha"
                              className="block text-sm font-medium text-gray-700"
                            >
                              FECHA DE SOLICITUD
                            </label>
                 <Field  name="fecha" 
                              className="block w-full  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              >

{({field, form}:any)=>(

<DatePicker
id="date"
{...field}
selected={field.value ? new Date(field.value) : null}
onChange={(date) => form.setFieldValue(field.name, date)}

formatStyle="large"
/>

)}</Field>
                          </div>
    
                 
 <div className="mt-4 inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">

  <button data-button-id='enable' onClick={changePresupuesto}
    className={`inline-block rounded-md ${Presupuesto?'bg-white text-blue-500 shadow-sm': 'text-gray-500 hover:text-gray-700'}  px-4 py-2 text-sm   focus:relative"`}
  >
    Presupuestado
  </button>

  <button data-button-id='unable' onClick={changePresupuesto}
    className={`inline-block rounded-md  ${Presupuesto?'text-gray-500 hover:text-gray-700': 'bg-white text-blue-500 shadow-sm'} px-4 py-2 text-sm   focus:relative`}
  >
    Sin presupuestar
  </button>
</div>   

   {
    Presupuesto?
    <div className="mt-3 inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
      <button data-button-id='1' onClick={changeState}
        className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm  ${State=='aceptado'?'bg-white text-blue-500 shadow-sm': 'text-gray-500 hover:text-gray-700' } focus:relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
    
        ACEPTADO
      </button>
    
      <button data-button-id='2' onClick={changeState}
        className={`inline-flex items-center  ${State=='revisado'?'bg-white text-blue-500 shadow-sm': 'text-gray-500 hover:text-gray-700' } gap-2 rounded-md px-4 py-2 text-sm  focus:relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
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
        </svg>
    
        REVISADO
      </button>
    
      <button data-button-id='3' onClick={changeState}
        className={`inline-flex items-center gap-2 rounded-md   ${State=='cancelado'?'bg-white text-blue-500 shadow-sm': 'text-gray-500 hover:text-gray-700' } px-4 py-2 text-sm  focus:relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
    
        CANCELADO
      </button>
    </div>:null
   }


{
  State=='aceptado'? 
  <div className='mt-4'>
  <label
            htmlFor="fecha"
            className="block text-sm font-medium text-gray-700"
          >
            Monto de ppto actual en estado ACEPTADO
          </label>
  <div className="flex mt-2">
  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

  </span>
  <input value={inputValuePPTO} onChange={handleChange} type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="00.0"/>
</div> </div>: null
}

                {
  State=='revisado'? 
  <div className='mt-4'>
  <label
            htmlFor="fecha"
            className="block text-sm font-medium text-gray-700"
          >
            Monto de ppto actual en estado REVISADO
          </label>
  <div className="flex mt-2">
  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

  </span>
  <input  value={inputValuePPTO} onChange={handleChange} type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="00.0"/>
</div> </div>: null
}         

               
                {
  State=='cancelado'? 
  <div className='mt-4'>
  <label
            htmlFor="fecha"
            className="block text-sm font-medium text-gray-700"
          >
            Monto de ppto actual en estado CANCELADO
          </label>
  <div className="flex mt-2">
  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

  </span>
  <input  value={inputValuePPTO} onChange={handleChange} type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="00.0"/>
</div> </div>: null
}               

<div className='mt-4'>
<label
            htmlFor="pcancelacion"
            className="block text-sm font-medium text-gray-700"
          >
            Pedir cancelacion
          </label>
          <div className="mt-4 inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">


<button data-button-id='activarpc' onClick={changePcancelacion}
  className={`inline-block rounded-md ${Pcancelacion?'bg-white text-red-500 shadow-sm': 'text-gray-500 hover:text-gray-700'}  px-4 py-2 text-sm   focus:relative"`}
>
  Activo
</button>

<button data-button-id='desactivarpc' onClick={changePcancelacion}
  className={`inline-block rounded-md  ${Pcancelacion?'text-gray-500 hover:text-gray-700': 'bg-white text-blue-500 shadow-sm'} px-4 py-2 text-sm   focus:relative`}
>
  Desactivado
</button>
</div>  
</div>


                    </div>




        </div>
      </div>
    </div>
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button type="submit" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Agregar</button>
      <button type="button" onClick={()=>route.push('/')} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
       Cancelar
        </button>
    </div>


  </Form>
                
                </Formik>
  </div>












  )
}

export default FormularioST







