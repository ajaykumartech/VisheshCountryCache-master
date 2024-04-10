import React from 'react'
import './Header1.css'
import Logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='main-heading1'>
        <img onClick={() => { navigate('/') }} src={Logo} className='main-logo' alt='main-logo' />
      </div>
    </div>
  )
}

export default Header