//extrae los st pero identifica los 
//st, en estado "cancelado" y evita esos
import ST from "@/utils/models/st.models"
import { connectDB } from "@/utils/db"

import { NextResponse, NextRequest } from "next/server";

export async function GET(request:NextRequest){
    await connectDB()
   
    const id = request.nextUrl.searchParams.get('id')
    const dato1 = await ST.find({_id:id});
   /*  const inicioSTS = await ST.find( { estado: { $ne: "cancelado" } }) */

    return NextResponse.json(dato1)
    
}




