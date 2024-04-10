import React from 'react'
import './AboutUs.css'
import AboutUS from '../../../assets/HomePage/AboutUs.png'
import { useNavigate } from 'react-router-dom'

function AboutUs() {
    const navigate = useNavigate();
    return (
        <div className='home-about-section'>
            <div>
                <h2 className='home-about-heading'>Who We Are</h2>
                <img src={AboutUS} className='about-us-img1' alt='visheshHome.png' />
                <p className='home-about-para'>Over the past seven years, we have produced groundbreaking work that aligns with our clients' needs and their audiences' desires.</p>
                <p className='home-about-para'>We like to think of ourselves as the ones who bring wild, ambitious, and experimental ideas to life, but we invite you to be the judge of that. Our mission is to drive engagement, understanding, and action through every experience we create.</p>
                <button onClick={() => { navigate('/about') }} style={{ marginTop: "0.2rem" }} className='about-us-btn'>About Us</button>
            </div>
            <div>
                <img src={AboutUS} className='about-us-img' alt='about-us' />
            </div>
        </div>
    )
}

export default AboutUs