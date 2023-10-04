import React from 'react'
import './Footer.css'
import logo from './imgs/def.png'

export default function Footer() {
  return (
    <>
    <p style={{border: '1px solid rgb(143, 140, 140)'}}></p>
    <div className='footer'>
        <p className='questions_p'>Questions? Contact us.</p>
        <div className='footer_flex'>
          <ul className='footer_col'>
            <li><a href='.'>FAQ</a></li>
            <li><a href='.'>Investor Relations</a></li>
            <li><a href='.'>Privacy</a></li>
            <li><a href='.'>Speed Test</a></li>
          </ul>
          <ul className='footer_col'>
            <li><a href='.'>Help center</a></li>
            <li><a href='.'>Jobs</a></li>
            <li><a href='.'>Cookie Preferences</a></li>
            <li><a href='.'>Legal Notices</a></li>
          </ul>
          <ul className='footer_col'>
            <li><a href='.'>Account</a></li>
            <li><a href='.'>Ways to Watch</a></li>
            <li><a href='.'>Corporate Information</a></li>
            <li><a href='.'>Only on Netflix</a></li>
          </ul>
          <ul className='footer_col'>
            <li><a href='.'>Media Center</a></li>
            <li><a href='.'>Terms of Use</a></li>
            <li><a href='.'>Contact Us</a></li>
          </ul>
        </div>
        <p>Netflix Nigeria</p>
        <p
        style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
        >
        <p
        style={{textAlign: 'center', fontSize: '1.2rem'}}
        >Made by</p>
        <img
        src={logo}
        style={{width: "7rem", height: "2.5rem", backgroundPosition: 'center'}}
        />
        </p>
    </div>
    </>
  )
}
