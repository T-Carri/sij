import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/utils/db";
export function GET( ){

    connectDB()
    return NextResponse.json(
        {
            message: "ok",
        }
    )
}


