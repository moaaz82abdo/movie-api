import React from 'react'
import logo from './logo.webp'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ">
  <Link className="navbar-brand" href="#">
      <img src={logo} alt="" width="60" height="60" className="d-inline-block align-text-top"/>
      ENGAGE MOSQUE
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={'home'}>Home</Link>
        </li>
       
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={'aboutus'}>About Us </Link></li>
            <li><Link className="dropdown-item" to={'aboutc'}>About Community</Link></li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={'eventl'}>Event List</Link></li>
            <li><Link className="dropdown-item" to={'eventc'}>Event Calender</Link></li>
            <li><Link className="dropdown-item" to={'singleev'}>Single Event View</Link></li>
           
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'gallery'}>Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'news'}>News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'contact'} >Contact</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  )
}
