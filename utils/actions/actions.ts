'use server'
import ST from "../models/st.models"
import { connectDB } from "../db";
import { revalidatePath } from "next/cache";
interface Parametros{
    region: string;
    folio: string;
    tienda: string;
    trabajo: string;
    fecha: string;
    presupuestado:boolean;
    estado: string;
    ppto:string;
    peticioncancelacion:boolean;
    finalizado: boolean;
}

export async function postST(datos:Parametros){
    connectDB()
    const nuevoST = new ST({
        region:datos.region,
        folio:datos.folio,
        tienda:datos.tienda,
        trabajo:datos.trabajo,
        fecha:datos.fecha,
        presupuestado:datos.presupuestado,
        estado:datos.estado,
        ppto:datos.ppto,
        peticioncancelacion:datos.peticioncancelacion,
        finalizado:false
    })

try {
    
    const documentoGuardado = await nuevoST.save()
    revalidatePath("/")
    return documentoGuardado
}catch (error) {
    throw error;
  }


}



/* export async function resolucion(){

//Aqui vamos a hacer lo siguiente 
//voy a jalar los correos
// buscare la bandera folio y hare una comparacion de folios
//en la database, si encuentro un folio nuevo lo añadire
//puedes intentar agregar los que estan cancelados
//sera una logica que tendra un alcance de 20 correos hacia
//abajo  y hasta este punto intenta sustraer un real
//para que puedas identificar las banderas que a simple vista
//parece que asi se ve un st cuando entra cancelado
//de construnet [SIM]-ASIGNACION ST CANCELADA
//CONECTALO


} */