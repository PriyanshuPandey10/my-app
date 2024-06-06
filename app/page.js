"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
const page = () => {
    const [user, setuser] = useState("Priyanshu")
  return (
    <>
      < Header user={user} />
      {user}
    
    </>
  )
}

export default page