import React from 'react'
import { Outlet } from 'react-router-dom'

const Educater = () => {
  return (
    <div>
      <h1>Educater</h1>
      <div>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default Educater
