import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./WorkPageHeader.css"

function WorkPageHeader(props) {
    return (
        <Container fluid className='WorkPageHeader-container'>
            <Row >
                <div className='WorkPageHeader-container-row-col-1'>
                    <h4 className='services-heading ' style={{ textAlign: 'left' }}>We take pride in our work</h4>
                </div>
                <div className='WorkPageHeader-container-row-col-2'>
                    <h6 className='home-project-text ServicesPage-Header-Sub' style={{ textAlign: "right", margin: 0, paddingTop: "3%" }}>We proudly embrace a distinctive and one-of-a-kind aesthetic philosophy in our approach to work, and we are dedicated to forging meaningful connections with clients who resonate with our core values.</h6>
                </div>
            </Row>
        </Container>
    );
}

export default WorkPageHeader;