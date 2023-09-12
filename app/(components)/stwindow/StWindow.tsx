'use client'
import React, {useEffect} from 'react'
import {  useParams } from "next/navigation";


export default  function StWindow({ prop }: { prop: string }) {

  const params = useParams();




/* 
  useEffect(()=>{

  }, []) */


  return (
    <div className="bg-white p-4 px-6">
   <h3 >
    {prop}
   </h3>
  
  </div>
  )
}

