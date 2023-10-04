import React from 'react'
import './ProfileScreen.css'
import avatar from '../imgs/avatar.jpg'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

export default function ProfileScreen() {
  const user = useSelector(selectUser)

  return (
    <div className='profile-screen'>
        <Nav />
        <div className='profile-screen-body'>
          <h1>Edit Profile</h1>
            <div className='profile-screen-info'>
              <img className='' src={avatar} alt="user-img"/>
              <div className='profile-screen-details'>
                {/* <h2>{user.email}</h2> */}
                <div className='profile-screen-plans'>
                  <h3>Plans</h3>
                  <h4>Renewal date: 04/03/2021</h4>
                  <div className='profile-screen-subscribes'>
                    <div className='profile-screen-subscribe'>
                      <div className='profile-screen-subscribe-info'>
                        <h5>Netflix Standard</h5>
                        <p>1080p</p>
                        </div>
                        <button className='profile-screen-subscribe-btn'>Subscribe</button>
                      
                     </div>
                      <div className='profile-screen-subscribe'>
                        <div className='profile-screen-subscribe-info'>
                          <h5>Netflix Basic</h5>
                          <p>480p</p>
                        </div>
                        <button className='profile-screen-subscribe-btn'>Subscribe</button>
                      </div>
                      <div className='profile-screen-subscribe'>
                        <div className='profile-screen-subscribe-info'>
                          <h5>Netflix Premium</h5>
                          <p>4K+HDR</p>
                        </div>
                        <button className='profile-screen-current-plan-btn'>Current Plan</button>
                      </div>
                    </div>
                    <button
                    onClick={() => auth.signOut() }
                    className='profile-screen-signout'
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
