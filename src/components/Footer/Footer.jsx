import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import './footer.css'

import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <SiDatabricks className='icon' />
                        <h2>Segura.</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navegacion</h3>
                        <p>Portada</p>
                        <p>Informacion</p>
                        <p>Nube</p>
                        <p>Contacto</p>
                    </div>
                    <div className="col">
                        <h3>Mi cuenta</h3>
                        <p>Portada</p>
                        <p>Informacion</p>
                        <p>Nube</p>
                        <p>Contacto</p>
                    </div>
                    <div className="col">
                        <h3>Informacion</h3>
                        <p>Portada</p>
                        <p>Informacion</p>
                        <p>Nube</p>
                        <p>Contacto</p>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <form>
                        <h3>Unete a nuestro equipo</h3>
                        <input type="email" placeholder='Ingresa tu email' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                            <FiDribbble className='social-icon' />
                            <FiGithub className='social-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer