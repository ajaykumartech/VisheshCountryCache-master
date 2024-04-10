import React from 'react';
import "./ContactUsNav.css";
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ContactUsNav(props) {
    const navigate = useNavigate();
    return (
        <Container fluid className='ContactUsNav-container'>
            <Row>
                <div className='ContactUsNav-col-1'>
                    <div>
                        <h5 className='ContactUsNav-h5'>
                            We're the team that thrives on diving in headfirst and creating a big impact. Let's discover the incredible results we can achieve together!
                        </h5>
                    </div>
                </div>
                <div className='ContactUsNav-col-2'>
                    <div className='ContactUsNav-button'>
                        <button onClick={() => { navigate('/contact') }} className='about-us-btn'>Get in Touch</button>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default ContactUsNav;