import React, { useEffect, useState, useRef } from 'react';
import './HomePage.css';
import VideoWeb from '../../assets/HomePage/VideoWeb.mp4';
import VideoMobileVersion from '../../assets/HomePage/VideoMobile.mp4';
import OurServices from './OurServicesComponent/OurServices';
import ClientLogos from './ClientLogosComponent/ClientLogos';
import WorkWithUs from './WorkWithUsComponent/WorkWithUs';
import AboutUs from './AboutUsComponent/AboutUs';
import CardsComponent from './CardsComponent/CardsComponent';
import { Helmet } from 'react-helmet';
import Projects from './ProjectsComponent/Projects';
import Mute from '../../assets/HomePage/Mute.svg'
import Sound from '../../assets/HomePage/Sound.svg'
import Header1 from '../HeaderComponent1/Header1';
import Header from '../HeaderComponent/Header';

function HomePage() {

  const [isMuted, setIsMuted] = useState(true);
  const [header, setHeader] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videos = videoRef.current;
    videos.addEventListener('loadedmetadata', () => {
      videos.controls = false;
    });
    window.scrollTo(0, 0);

    if (window.innerWidth > 1000) {
      setHeader(true)
    }
    // Listen for scroll events to toggle video mute status
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMute = () => {
    const videoElement = document.querySelector('.video1');
    videoElement.muted = !videoElement.muted;
    setIsMuted(videoElement.muted);
  };

  const handleScroll = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const videoRect = videoElement.getBoundingClientRect();
      if (videoRect.bottom < 0 || videoRect.top > window.innerHeight) {
        // Video is out of view, mute it
        if (!isMuted) {
          videoElement.muted = true;
          setIsMuted(true);
        }
      } else {
        // Video is in view, unmute it if it was previously muted
        if (isMuted) {
          videoElement.muted = false;
          setIsMuted(false);
        }
      }
    }
  };  

  return (
    <div>
      <Helmet>
        <title>Vishesh Country Cache - Home</title>
        <link rel="canonical" href="https://visheshcountrycache.com/" />
        <meta name='description' content='Unlock the potential of top-tier software solutions with Vishesh Country Cache Private Limited. Based in Tanuku, India, we bring together diverse talents to deliver excellence in software development, testing, design, data analytics, and digital marketing services. Explore career opportunities and innovative solutions now.' />
        <meta name='keywords' content='vishesh country cache Private Limited, software companies in village,software development company, top 10 software companies in india, software solutions company, software engineering companies, vacancies in small software companies for freshers, software development companies near me, 
        data software research company, software company jobs, best companies for software engineers, best software development company, internship in software company, software consulting companies, vishesh country cache software company, vishesh country cache private limited in undrajavaram, software company, 
        software company near me, vishesh software company in tanuku, software companies in tanuku, best digital marketing company near me, best digital marketing company in tanuku, website development company, best marketing analysis company in tanuku, best software company in city out cuts, top software companies in tanuku, 
        best logo design agency,logo design,best video editing near me, graphic desingers,best graphic design agencies,top marketing analytics companies best data analyst jobs,top data analytics companies,web developer jobs for freshers,jobs in web development for freshers,fornted developers near me,best backend developers near me' />
        <meta name="author" content="Vishesh Country Cache" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>

      {header ? <Header1 /> : <Header />}

      {/**    Video Section       */}
      <div className="video-container">
        <div className="control-icon-div">
          {isMuted ? (
            <img src={Mute} alt="play-icons" className="control-icon" onClick={toggleMute} />
          ) : (
            <img src={Sound} alt="play-icons" className="control-icon" onClick={toggleMute} />
          )}
        </div>
        <video ref={videoRef} className='video1' loop playsinline disablepictureinpicture preload="metadata" autoPlay muted>
          {window.innerWidth >= 1600 ? <source src={VideoWeb} type='video/mp4' /> :
            <source src={VideoMobileVersion} type='video/mp4' />}
          <meta itemprop="name" content="visheshHome.mp4" />
        </video>
      </div>

      {/**    Our Services Section */}
      <OurServices />

      {/**    About Us Section     */}
      <AboutUs />

      {/**    Why Us Cards Section */}
      <CardsComponent />

      {/**    logo slider          */}
      <ClientLogos />

      {/* Featured Projects Section  */}
      <Projects />

      {/**    Work with us section         */}
      <WorkWithUs />

    </div>
  );
}

export default HomePage;
