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