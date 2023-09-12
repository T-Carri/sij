import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/utils/db";
import {cookies, headers} from "next/headers" 
import { getTokens } from "next-firebase-auth-edge/lib/next/tokens";
import { authConfig } from "@/config/server-config";
import { Tokens } from "next-firebase-auth-edge/lib/auth";
import ST from "@/utils/models/st.models";
export async function GET(request:NextRequest ){
    const id = request.nextUrl.searchParams.get('id')

const dato1 = await ST.find({_id:id});
/* const dato2 = await ST.findById(id); */
/* const dato3 = await ST.findOne({ id: id }); */
/* const dato4 = await ST.findOne({ _id: id });
const dato5 = await ST.findById({ _id: id }); */
    connectDB()
    return NextResponse.json(
        {
            message: `ok  datooo: ${dato1} `,
        }
    )
}


