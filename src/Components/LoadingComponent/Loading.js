import React from "react";
import "./Loading.css";
import LoadingVideo from '../../assets/LoadingVideo.mp4'

function Loading() {
    return (
        <div className="loading-container">
            <video className='video2' autoPlay muted loop>
                <source src={LoadingVideo} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Loading;
