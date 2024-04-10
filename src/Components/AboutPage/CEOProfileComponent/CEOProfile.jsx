import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./CEOProfile.css"
import CEOPhotosAvif from "../../../assets/AboutPage/Harsha Sir.png"
import Quatation from "../../../assets/AboutPage/quotes-ltr.png"

function CEOProfile(props) {
    return (
        <Container className={'CEOProfileContainer'}>
            <Row>
                <div className='CEOImageContainer-col-1'>
                    <div >
                        <img src={CEOPhotosAvif} alt="visheshCEOPhoto" className='CEOPhoto' />
                    </div>
                </div>
                <div className='CEOInfoContainer-col-2'>
                    <div><h5 className='CEOName'>Sri Harsha Mallina</h5></div>
                    <div><h6 className='CEOQualification'>M.S. Computer Science (U.S.A)</h6></div>
                    <div><h6 className='Founder'>Founder & CEO</h6></div>
                    <div><img src={Quatation} alt="visheshabout.png" className='QuatationsSym' /></div>
                    <div>
                        <p className='CEODesciption'>Picture this: A tech revolution brewing in the heart of Undrajavaram!</p>
                        <p className='CEODesciption'>I'm thrilled to lead our mission of bringing top-notch software services straight from the countryside. We're all about embracing diversity and talent knows no bounds here! Join us on this epic journey, where innovation meets laughter, and global standards are just another day in the countryside!</p>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default CEOProfile;