import { log } from 'console'
import React from 'react'

const page = async ({params}:any) => {
  const{id} = await params
  
  return (
    <div>
      <h1>creating pages
      </h1>
    </div>
  )
}

export default page
