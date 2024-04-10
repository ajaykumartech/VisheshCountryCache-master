import React from 'react';
import "./ApplyNowNav.css"
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ApplyNowNav(props) {
    const navigate = useNavigate();
    return (
        <Container fluid className='ApplyNowNav-container'>
            <Row>
                <div className='ApplyNowNav-col-1'>
                    <div>
                        <h5 className='ApplyNowNav-h5'>
                            Can’t See the Role for You?
                        </h5>
                    </div>
                    <div>
                        <p className='StoryVisionFuture-p'>
                            Use our open application, maybe you’ll be just the <br className='about-page-br-css' />person we’re looking for!
                        </p>
                    </div>
                </div>
                <div className='ApplyNowNav-col-2'>
                    <div className='ApplyNowNav-button-background'>

                        <button className='about-us-btn' onClick={() => { navigate('/career') }}>
                            Apply Here
                        </button>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default ApplyNowNav;