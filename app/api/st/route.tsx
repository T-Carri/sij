//extrae los st pero identifica los 
//st, en estado "cancelado" y evita esos
import ST from "@/utils/models/st.models"
import { connectDB } from "@/utils/db"
import { NextResponse } from "next/server"

export async function GET(){
    await connectDB()
    const inicioSTS = await ST.find( { estado: { $ne: "cancelado" } })

    return NextResponse.json(inicioSTS)
    
}




