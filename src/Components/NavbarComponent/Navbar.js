import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [getSmallBallCurrentPosition, setSmallBallPosition] = useState(0);
  const [NavWidth, setNavWidth] = useState()

  const smallBallTransition = (position, sec = "0.3", delay = 0.1) => {
    document.querySelector(".smallBall").style.transition = `all ${sec}s ease-in`;
    document.querySelector(".smallBall").style.transitionDelay = `${delay}s`;
    document.querySelector(".smallBall").style.transform = `translate(${position}px,${40}px)`;
  }
  const smallBallPosition = (position) => {
    setSmallBallPosition(position);
    smallBallTransition(position);
  }

  const isActive = (path) => {
    // Check if the current path matches the provided path
    return location.pathname === path;
  };

  useEffect(() => {
    if (localStorage.getItem("width")) {
      setNavWidth(localStorage.getItem("width"));
    }
    else {
      localStorage.setItem("width", document.querySelector(".nav-Container").clientWidth)
      setNavWidth(document.querySelector(".nav-Container").clientWidth);
    }

    window.scrollTo(0, 0);
    const isActive = (path) => {
      return location.pathname === path;
    };
    const currentPosition = (position, sec = "0.3") => {
      setSmallBallPosition(position);
      smallBallTransition(position, sec);
    }

    if (isActive('/') || isActive('/home')) {
      currentPosition(NavWidth / 17, "0.5", 0);
    }
    else if (isActive('/services')) {
      currentPosition(NavWidth / 4);
    }
    else if (isActive('/work')) {
      currentPosition(NavWidth / 2.25);
    }
    else if (isActive('/about')) {
      currentPosition(NavWidth / 1.65);
    }
    else if (isActive('/contact')) {
      currentPosition(NavWidth / 1.26);
    }
  }, [location.pathname, NavWidth]);

  useEffect(() => {
    // setNavWidth(document.querySelector(".nav-Container").clientWidth);
    const flashlight = document.querySelector('.flashlight');
    let screenwidth = window.innerWidth;
    if (screenwidth > 768) {
      document.querySelector(".header-section").addEventListener('mousemove', (e) => {
        const x = e.layerX - 60;
        const y = e.layerY - 10;
        flashlight.style.transform = "translate(" + x + "px," + y + "px)";
      });
    }
  })
  const ClickHandle = () => {
    localStorage.setItem("width", document.querySelector(".nav-Container").clientWidth)
    setNavWidth(document.querySelector(".nav-Container").clientWidth);
  }

  return (
    <div>

      <div className='header-section'>
        <div className='nav-Container'>
          <div className='nav-items-section'>
            <h2 className={`home nav-items ${isActive('/') || isActive('/home') ? 'active' : ''}`} onClick={() => { navigate('/'); ClickHandle(); }}  >Home</h2>
            <h2 className={`services nav-items ${isActive('/services') ? 'active' : ''}`} onClick={() => { navigate('/services'); ClickHandle(); }}  >Services</h2>
            <h2 className={`work nav-items ${isActive('/work') ? 'active' : ''}`} onClick={() => { navigate('/work'); ClickHandle(); }} >Work</h2>
            <h2 className={`about nav-items ${isActive('/about') ? 'active' : ''}`} onClick={() => { navigate('/about'); ClickHandle(); }}>About</h2>
            <h2 className={`contact nav-items ${isActive('/contact') ? 'active' : ''}`} onClick={() => { navigate('/contact'); ClickHandle(); }}  >Contact</h2>
            <h2 className='smallBall'>
            </h2>
          </div>
          <div className="flashlight"></div>
        </div>
      </div>

    </div>
  )
}

export default Navbar