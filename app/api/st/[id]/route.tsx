import ST from "@/utils/models/st.models";
import { connectDB } from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import {cookies, headers} from "next/headers" 


export async function GET(request:NextRequest, {
  params: { id },
}: {
  params: { id: string }
}){
  
 /*  const id = request.nextUrl.searchParams.get('id')
   */
  const dato1 = await ST.find({_id:id});
  /*   const stFound = await ST.findById(id); */
 

    
    if(!dato1)
    return NextResponse.json(
      {
        message: `Task not found `,
      },
      {
        status: 404,
      }
    );
    return NextResponse.json(
      dato1
      );   
   
    }



//For put data througt  the stwindow form  
//maybe im going to use PUT method by the api of the router 
//







