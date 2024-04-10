import React from 'react'
import './WorkWithUs.css'
import video2 from '../../../assets/HomePage/video2.mp4';
import video3 from '../../../assets/HomePage/video3.mp4';
import { useNavigate } from 'react-router-dom';

function WorkWithUs() {
    const navigate = useNavigate();
    return (
        <div className='team-heading-sections'>
            <div className='work-section-heading'>
                <div className='work-text-lines'> As
                    <div className='video-container4'>
                        <video className='video4' loop playsinline disablepictureinpicture preload="metadata" autoPlay muted>
                            <source src={video2} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div> aspiring enthusiasts,
                </div>
                <div className='work-text-lines'> we combined our professional </div>
                <div className='work-text-lines'> skills, empathy, and shared </div>
                <div className='work-text-lines'>
                    values to build a unique
                    <div className='video-container5'>
                        <video className='video5' loop playsinline disablepictureinpicture preload="metadata" autoPlay muted>
                            <source src={video3} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className='work-text-lines'> collaborative environment.</div>
            </div>

            {/**        Mobile View */}
            <div className='work-text-lines2'>
                As aspiring enthusiasts, we combined our professional skills, empathy, and shared values to build a unique collaborative environment.
            </div>

            <div className='work-with-us-btn'>
                <button onClick={() => { navigate('/contact') }} className='about-us-btn'>Work With Us</button>
            </div>
        </div>
    )
}

export default WorkWithUs



