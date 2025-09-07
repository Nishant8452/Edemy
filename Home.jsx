import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav className='flex justify-between'>
        <div>
          <h1>Edemy</h1>
        </div>
        <div>
            <NavLink>Add Coureses |</NavLink>
            <NavLink>Login</NavLink>
            <button>Create Account</button>
          </div>
      </nav>
    </div>
  )
}

export default Home
