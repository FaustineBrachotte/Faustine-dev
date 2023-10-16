'use client'
import './navbar.scss'
import { useState } from 'react'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
            <a href="/#presentation">
                <h1 className="navbar__h1 anim">Faustine Brachotte</h1>
            </a>
            <ul className="navbar__links">
                <li className="navbar__item slideInDown-1">
                    <a href="/#restaurant" className="navbar__link anim">
                        À propos
                    </a>
                </li>
                <li className="navbar__item slideInDown-2">
                    <a href="/#cuisine" className="navbar__link anim">
                        Portoflio
                    </a>
                </li>
                <li className="navbar__item slideInDown-3">
                    <a href="/#menu" className="navbar__link anim">
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
