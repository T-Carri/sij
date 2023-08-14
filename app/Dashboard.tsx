 'use client'
 import React from 'react'
 import { Navbar } from './(components)/Navbar'
 import { SideBar } from './(components)/SideBar'
import { useAuth } from '@/auth/context'
 const Dashboard = () => {
    const { user } = useAuth();
   
   return (
     <>
    <Navbar/>
   <SideBar name={user?.displayName || ""} email={user?.email|| ""} foto={user?.photoURL || ""}    />
     </>
   
   )
 }
 
 export default Dashboard