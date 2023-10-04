import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'
import logo from './imgs/netflix-logo.png'
import avatar from './imgs/avatar.jpg'

export default function Nav() {
    const [show, handleShow] = useState(false)
    const navigate = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
            <img 
            src={logo}
            alt='logo'
            className='nav_logo'
            onClick={() => navigate('/')}
            />
            
            <img 
            src={avatar}
            alt='avatar'
            className='nav_avater'
            onClick={() => navigate('/ProfileScreen')}
            />
        </div>
    </div>
  )
}
