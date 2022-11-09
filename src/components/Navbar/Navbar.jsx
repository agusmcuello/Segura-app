import React, { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <SiDatabricks className='icon' />
                    <h1>Segura</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Portada</Link></li>
                    <li><Link to='/recovery'>Recuperación de datos</Link> </li>
                    <li><Link to='/cloud'>Nube</Link></li>
                    <li><Link to='/contact'>Contacto</Link></li>
                    <button>Registrate</button>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar