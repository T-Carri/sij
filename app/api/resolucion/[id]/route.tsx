import { NextResponse, NextRequest } from "next/server";
const { google } = require('googleapis');
const oAuth2Client = new google.auth.OAuth2(
 process.env.CLIENT_ID,
 process.env.CLIENT_SECRET,
 process.env.REDIRECT_URI,
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
//Aqui vas a jalar los correos en peticion get
export async function GET(request:NextRequest, {
    params: { id },
  }: {
    params: { id: string }
  }){
    const accessToken = await oAuth2Client.getAccessToken();
    let token = await accessToken.token;
    const res = await fetch(`https://gmail.googleapis.com/gmail/v1/users/${id}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
    },
    })
    const data = await res.json()
    return NextResponse.json(
      data
      );  


  }