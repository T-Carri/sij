 'use client'
 import React from 'react'

 import { SideBar } from './(components)/SideBar'
import { useAuth } from '@/auth/context'
 const ElementsDashboard = () => {
    const { user } = useAuth();
  /*   console.log('Test:', user) */
   
   return (
     <>
    
   <SideBar name={user?.displayName || ""} email={user?.email|| ""} foto={user?.photoURL || ""}    />
     </>
   
   )
 }
 
 export default ElementsDashboard