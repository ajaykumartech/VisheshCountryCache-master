import React from 'react'
import './Footer.css'
import Icon2 from '../../assets/SocialIcons2.png'
import Icon3 from '../../assets/SocialIcons3.png'
import Icon4 from '../../assets/SocialIcons4.png'
import { useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className='footer-section'>

      <div className='last-section1'>
        <div className='footer-section-color'>
          <h2 className='footer-section-text1'>Let’s Create or Improve your Idea</h2>
          <p className='footer-section-text2'>Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
          <h2 className='footer-section-text3' onClick={() => { navigate('/contact') }}>Become a Client <FaArrowRightLong className='footer-section-icon' /></h2>
        </div>
        <div className='last-section2'>
          <div className='footer-section-color'>
            <div className='footer-section-color'>
              <h2 className='footer-section-text4'>Call Us</h2>
              <p className='footer-section-text2'><a style={{backgroundColor: "transparent", color: "#fff", textDecoration: "none"}} href="tel:+919589958924">+91 9589958924</a></p>
            </div>
            <div className='footer-section-color'>
              <h2 className='footer-section-text4'>E-mail</h2>
              <p className='footer-section-text2'><a style={{ backgroundColor: "transparent", color: "#fff", textDecoration: "none" }} href="mailto:hello@visheshcountrycache.com">hello@visheshcountrycache.com</a></p>
            </div>
          </div>
        </div>
        <div className='footer-section-color'>
          <h2 className='footer-section-text4'>Address</h2>
          <p className='footer-section-text2'>Near Chakrapani Petrol Bunk, Undrajavaram, Tanuku, Andhra Pradesh, India-534216</p>
        </div>
      </div>

      <div className='last-section'>
        <div className='footer-section-privacy-text'>
          <p className='last-text1' onClick={() => { navigate('privacy-policy') }}>PRIVACY POLICY</p>
          <p className='last-text'>|</p>
          <p className='last-text'>ALL RIGHTS RESERVED</p>
          <p className='last-text'>|</p>
          <p className='last-text'>©2024</p>
        </div>
        <div className='footer-section-privacy-text1'>
          <a style={{ backgroundColor: "transparent" }} href="https://www.linkedin.com/in/vishesh-country-cache/" target="_blank" rel="noopener noreferrer">
            <img src={Icon4} className='social-icon-img' alt='linked-in' />
          </a>
          <a style={{ backgroundColor: "transparent" }} href="https://www.instagram.com/vishesh_country_cache/" target="_blank" rel="noopener noreferrer">
            <img src={Icon3} className='social-icon-img' alt='instagram' />
          </a>
          <a style={{ backgroundColor: "transparent" }} href="https://twitter.com/Vishesh_Country" target="_blank" rel="noopener noreferrer">
            <img src={Icon2} className='social-icon-img' alt='twitter' />
          </a>
        </div>
      </div>

      <div className='last-section-two'>
        <div className='footer-section-privacy-text1'>
          <a style={{ backgroundColor: "transparent" }} href="https://www.linkedin.com/in/vishesh-country-cache/" target="_blank" rel="noopener noreferrer">
            <img src={Icon4} className='social-icon-img' alt='linked-in' />
          </a>
          <a style={{ backgroundColor: "transparent" }} href="https://www.instagram.com/vishesh_country_cache/" target="_blank" rel="noopener noreferrer">
            <img src={Icon3} className='social-icon-img' alt='instagram' />
          </a>
          <a style={{ backgroundColor: "transparent" }} href="https://twitter.com/Vishesh_Country" target="_blank" rel="noopener noreferrer">
            <img src={Icon2} className='social-icon-img' alt='twitter' />
          </a>
        </div>
        <div className='footer-section-privacy-text'>
          <p className='last-text1' onClick={() => { navigate('privacy-policy') }}>PRIVACY POLICY</p>
          <p className='last-text'>|</p>
          <p className='last-text'>ALL RIGHTS RESERVED</p>
          <p className='last-text'>|</p>
          <p className='last-text'>©2024</p>
        </div>
      </div>

    </div>
  )
}

export default Footer