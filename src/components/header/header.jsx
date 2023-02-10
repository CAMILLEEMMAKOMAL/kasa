import React from 'react'
import Navbar from '../navbar/navbar'
import LOGO from '../../assets/LOGO.jpg'
import './header.css'

export default function Header() {
  return (
    <div className='container'>
      <a href="http://localhost:3000/">
        <img className='logo' src={LOGO} alt="logo"></img>
      </a>
        <Navbar/>
    </div>
  )
}