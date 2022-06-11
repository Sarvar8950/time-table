import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/login' >Login</Link>
      <Link to='/admin' >Admin</Link>
      <Link to='/student' >Student</Link>
      <Link to='/event' >Event</Link>
      <Link to='/upcomingevent' >Upcoming Event</Link>
    </nav>
  )
}
