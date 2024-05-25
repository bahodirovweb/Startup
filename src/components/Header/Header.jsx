import React from 'react'
import './Header.css'
import start from '../../img/star.svg'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className='Header'>
            <div className="container">
                <nav className='header__container'>
                    <Link to={'home'}>
                        <img src={start} alt="" />
                    </Link>
                    <ul className='headr__List'>
                        <Link to={'home'}>
                            <li className="nav__item">Home</li>
                        </Link>
                        <Link to={'portfolio'}>
                            <li className="nav__item">Portfolio</li>
                        </Link>
                        <Link to={'services'}>
                             <li className='nav__item'>Services</li>
                        </Link>
                        <Link to={'contact'}>
                            <li className='nav__item'>Contact</li>
                        </Link>

                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header
