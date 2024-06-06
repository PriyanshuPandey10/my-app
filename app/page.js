'use client'
import React, { useState } from 'react'

const page = () => {
  const [marks, setmarks] = useState(50)
  return (
    <>
    <h1>My marks were {marks}</h1>
      <button onClick={()=>{
        setmarks(80)
      }}>Update</button>
    </>
    
  )
}

export default page