import React from 'react';
import "./CreativeDesignTools.css"
import { Container, Image, Row } from 'react-bootstrap';
import image1 from "../../../../../assets/ServicePage/Photoshop.png"
import image2 from "../../../../../assets/ServicePage/InDesign.png"
import image3 from "../../../../../assets/ServicePage/illustrator.png"
import image4 from "../../../../../assets/ServicePage/Premiere Pro.png"
import image5 from "../../../../../assets/ServicePage/Dimension.png"
import image6 from "../../../../../assets/ServicePage/Canva.png"
import image7 from "../../../../../assets/ServicePage/After Effects.png"
import image8 from "../../../../../assets/ServicePage/Davinci Resolve.crop.png"

function CreativeDesignTools(props) {
    return (
        <Container className='CreativeDesignTools-container'>
            <Row className='CreativeDesignTools-Row'>
                <div className='CreativeDesignTools-image'>
                    <Image src={image1} alt='visheshcreative.png' style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)" }}>Photoshop</div>
                </div>
                <div className='CreativeDesignTools-image'>
                    <Image src={image2} alt="visheshcreative.png" style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)" }}> InDesign</div>
                </div>
                <div className='CreativeDesignTools-image'>
                    <Image src={image3} alt="visheshcreative.png" style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)" }}> illustrator</div>
                </div>
                <div className='CreativeDesignTools-image'>
                    <Image src={image4} alt="visheshcreative.png" style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)" }}> Premiere Pro</div>
                </div>
                <div className='CreativeDesignTools-image'>
                    <Image src={image5} alt="visheshcreative.png" style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)" }}> Dimension</div>
                </div>
                <div className='CreativeDesignTools-image'>
                    <Image src={image6} alt="visheshcreative.png" style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)" }}> Canva</div>
                </div>
                <div className='CreativeDesignTools-image'>
                    <Image src={image7} alt="visheshcreative.png" style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)" }}> After Effects</div>
                </div>
                <div className='CreativeDesignTools-image'>
                    <Image src={image8} alt="visheshcreative.png" style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)" }}> Davinci Resolve</div>
                </div>

            </Row>
        </Container>
    );
}

export default CreativeDesignTools;