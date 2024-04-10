import React from 'react';
import "./CareersNav.css"
import { Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CareersNav(props) {
    const navigate = useNavigate();
    return (
        <Container fluid className='CareersNav-container'>
            <Row className='CareersNav-container-Row-1'>
                <Col>
                    <div className='CareersBackground'><h3 className='CareersNav-h3'>CAREERS</h3></div>
                </Col>
            </Row>
            <Row className='CareersNav-container-Row' onClick={() => { navigate('/career') }} >
                <div className='CareersNav-container-row-col-1'>
                    <Row>
                        <div className='CareersNav-container-row-col-1-row-col'>
                            <h5 className='CareersNav-h5'>UI/UX Designer</h5>
                        </div>
                        <div className='CareersNav-container-row-col-1-row-col'>
                            <div>
                                <p className='StoryVisionFuture-p'>With 3 Years of minimum experience in Web Design, Product Design.</p>
                            </div>
                        </div>
                    </Row>
                </div>
                <div className='CareersNav-container-row-col-2'>
                    <div className='CareersNav-Arrow'>
                        <img className='Arrow-Icon' src='' alt=''></img>
                    </div>
                </div>
            </Row>
            <Row className='CareersNav-container-Row' onClick={() => { navigate('/career') }} >
                <div className='CareersNav-container-row-col-1'>
                    <Row>
                        <div className='CareersNav-container-row-col-1-row-col'>
                            <h5 className='CareersNav-h5'>Full Stack Developer</h5>
                        </div>
                        <div className='CareersNav-container-row-col-1-row-col'>
                            <div>
                                <p className='StoryVisionFuture-p'>With 2 Years of minimum experience in Front & Back-end.</p>
                            </div>
                        </div>
                    </Row>
                </div>
                <div className='CareersNav-container-row-col-2'>
                    <div className='CareersNav-Arrow'>
                        <img className='Arrow-Icon' src='' alt=''></img>
                    </div>
                </div>
            </Row>
            <Row className='CareersNav-container-Row' onClick={() => { navigate('/career') }} >
                <div className='CareersNav-container-row-col-1'>
                    <Row>
                        <div className='CareersNav-container-row-col-1-row-col'>
                            <h5 className='CareersNav-h5'>Graphic Designer</h5>
                        </div>
                        <div className='CareersNav-container-row-col-1-row-col'>
                            <div>
                                <p className='StoryVisionFuture-p'> Graphic Designer With 1 Year of minimum experience in Adobe Suite.</p>
                            </div>
                        </div>
                    </Row>
                </div>

                <div className='CareersNav-container-row-col-2'>
                    <div className='CareersNav-Arrow'>
                        <img className='Arrow-Icon' src='' alt=''></img>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default CareersNav;