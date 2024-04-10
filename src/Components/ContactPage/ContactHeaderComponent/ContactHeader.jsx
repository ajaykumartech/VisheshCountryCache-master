import React from 'react';
import { Container } from 'react-bootstrap';
import "./ContactHeader.css"

function ContactHeader(props) {
    return (
        <Container fluid className='WorkPageHeader-container'>
            <div>
                <h3 className='about-page-heading ContactHeader-h3'>
                    Let’s talk about you, your company, your product and your goals.
                </h3>
            </div>
        </Container>
    );
}

export default ContactHeader;