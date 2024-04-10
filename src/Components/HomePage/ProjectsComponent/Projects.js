import React from 'react'
import './Projects.css'
import ProjectVideo1 from "../../../assets/HomePage/Sri Chaitanya Video.mp4"
import ProjectVideo2 from '../../../assets/HomePage/Ultimates Video.mp4'
import ProjectVideo3 from '../../../assets/HomePage/LG Video.mp4'
import PlusIcon from '../../../assets/HomePage/PlusIcon.png'
import { useNavigate } from 'react-router-dom'

function Projects() {
    const navigate = useNavigate();

    return (
        <div className='home-projects-section'>
            <h2 className='home-about-heading'>Featured Projects</h2>
            <p className='home-project-text'>We have achieved success in multiple projects, backed by evidence found in our portfolio of case studies.</p>

            <div className='home-feature-projects'>
                <div className='home-feature-projects-sec'>
                    <video className='feature-project-video1' loop playsinline disablepictureinpicture preload="metadata" autoPlay muted>
                        <source src={ProjectVideo1} type='video/mp4' />
                        <meta itemprop="name" content="visheshProject1.mp4" />
                    </video>
                    <div className='feature-project-content'>
                        <h2 className='service-team-heading'>Hospital Website</h2>
                        <div className='feature-project-content-btns'>
                            <button className='feature-project-content-btn'>Branding</button>
                            <button className='feature-project-content-btn'>UI/UX</button>
                            <button className='feature-project-content-btn'>Web Development</button>
                            <button className='feature-project-content-btn'>Graphic Design</button>
                        </div>
                        <div className='feature-project-content-btns1'>
                            <div style={{ marginTop: "1rem" }}>
                                <button className='feature-project-content-btn'>Branding</button>
                                <button className='feature-project-content-btn'>UI/UX</button>
                                <button className='feature-project-content-btn'>Web Development</button>
                            </div>
                            <div style={{ marginTop: "0.5rem" }}>
                                <button className='feature-project-content-btn'>Graphic Design</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-feature-projects-sec'>
                    <video className='feature-project-video1' loop playsinline disablepictureinpicture preload="metadata" autoPlay muted>
                        <source src={ProjectVideo2} type='video/mp4' />
                        <meta itemprop="name" content="visheshProject2.mp4" />
                    </video>
                    <div className='feature-project-content'>
                        <h2 className='service-team-heading'>Roofing Website</h2>
                        <div className='feature-project-content-btns'>
                            <button className='feature-project-content-btn'>Branding</button>
                            <button className='feature-project-content-btn'>UI/UX</button>
                            <button className='feature-project-content-btn'>Web Development</button>
                            <button className='feature-project-content-btn'>Mobile App</button>
                        </div>
                        <div className='feature-project-content-btns1'>
                            <div style={{ marginTop: "1rem" }}>
                                <button className='feature-project-content-btn'>Branding</button>
                                <button className='feature-project-content-btn'>UI/UX</button>
                                <button className='feature-project-content-btn'>Web Development</button>
                            </div>
                            <div style={{ marginTop: "0.5rem" }}>
                                <button className='feature-project-content-btn'>Mobile App</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-feature-projects'>
                <div className='home-feature-projects-sec'>
                    <video className='feature-project-video1' loop playsinline disablepictureinpicture preload="metadata" autoPlay muted>
                        <source src={ProjectVideo3} type='video/mp4' />
                        <meta itemprop="name" content="visheshProject3.mp4" />
                    </video>
                    <div className='feature-project-content1'>
                        <h2 className='service-team-heading'>Construction Logo</h2>
                        <div className='feature-project-content-btns'>
                            <button className='feature-project-content-btn'>Branding</button>
                            <button className='feature-project-content-btn'>Creative Design</button>
                        </div>
                        <div className='feature-project-content-btns1'>
                            <div style={{ marginTop: "1rem" }}>
                                <button className='feature-project-content-btn'>Branding</button>
                                <button className='feature-project-content-btn'>Creative Design</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => { navigate('/work') }} className='home-project4'>
                    <img src={PlusIcon} className='projects-view-icon' alt='plus-icon' />
                    <h5 className='view-all-projects-h5'>View All</h5>
                </div>
                <div className='home-project5'>
                    <button onClick={() => { navigate('/case-studies') }} className='about-us-btn'>View All</button>
                </div>
            </div>

            <div className='home-feature-projects1'>
                <div className='home-feature-projects-sec'>
                    <div className='feature-project-content'>
                        <h2 className='service-team-heading'>Construction Logo</h2>
                        <div className='feature-project-content-btns'>
                            <button className='feature-project-content-btn'>Branding</button>
                            <button className='feature-project-content-btn'>Creative Design</button>
                        </div>
                    </div>
                </div>
                <div className='home-feature-projects-sec'></div>
            </div>
        </div>
    )
}

export default Projects
