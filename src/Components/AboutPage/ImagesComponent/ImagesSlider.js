import React from 'react';
import './ImagesSlider.css';
import TeamImage1 from '../../../assets/AboutPage/TeamImage1.png';
import TeamImage2 from '../../../assets/AboutPage/TeamImage2.png';
import TeamImage3 from '../../../assets/AboutPage/TeamImage3.png';
import Building from '../../../assets/AboutPage/Building.png';
import TeamImage11 from '../../../assets/AboutPage/TeamImage1-1.png';
import TeamImage22 from '../../../assets/AboutPage/TeamImage2-2.png';
import TeamImage33 from '../../../assets/AboutPage/TeamImage3-3.png';
import Building1 from '../../../assets/AboutPage/Building1.png';

function ImagesSlider() {
  return (
    <div>
      <div className='about-page-images-section'>
        <div>
          <div>
            <img src={TeamImage1} className='team-image' alt='vishesh-team-members' />
          </div>
          <div className='image-section-first-second'>
            <div>
              <img src={TeamImage2} className='team-image' alt='vishesh-team-members' />
            </div>
            <div>
              <img src={TeamImage3} className='team-image' alt='vishesh-team-members' />
            </div>
          </div>
        </div>
        <div>
          <img src={Building} className='team-image' alt='vishesh-team-members' />
        </div>
      </div>

      <div className='about-page-images-section2'>
        <div>
          <img src={TeamImage11} className='team-image' alt='vishesh-team-members' />
        </div>
        <div className='about-image-mobile'>
          <img src={TeamImage22} className='team-image1' alt='vishesh-team-members' />
          <img src={TeamImage33} className='team-image1' alt='vishesh-team-members' />
        </div>
        <div>
          <img src={Building1} className='team-image' alt='vishesh-team-members' />
        </div>
      </div>
    </div>
  );
}

export default ImagesSlider;
