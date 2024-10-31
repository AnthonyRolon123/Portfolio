import React from 'react'
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={style.nav}>
        <button>Home</button>
        <button>About</button>
        <div className={style.spacer}></div>
        <button>Contact</button>
    </nav>
  )
}
