'use client'
import './navbar.scss'
import { useState } from 'react'
import Image from 'next/image'
import logo from '/app/assets/logo.png'
import logoDark from '/app/assets/logo-dark.png'


function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
            <a className="navbar__logo" href="/#presentation">
            <Image height="35" src={logoDark} alt="Logo" />
                <h1 className="navbar__h1 anim">Faustine Brachotte</h1>
            </a>
            <ul className="navbar__links">
                <li className="navbar__item slideInDown-1">
                    <a href="/" className="navbar__link anim">
                        À propos
                    </a>
                </li>
                <li className="navbar__item slideInDown-2">
                    <a href="/#realisations" className="navbar__link anim">
                        Réalisations
                    </a>
                </li>
                <li className="navbar__item slideInDown-3">
                    <a href="/#contact" className="navbar__link anim">
                        Contact
                    </a>
                </li>
            </ul>
            <button className="navbar__burger anim" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}

export default Navbar
