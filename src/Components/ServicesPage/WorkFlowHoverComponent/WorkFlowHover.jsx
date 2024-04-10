import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import "./WorkFlowHover.css"

function WorkFlowHover(props) {

    const [getClicks, SetClicks] = useState([1, 0, 0, 0, 0]);

    const handlClicks = (index) => {
        var temp = [0, 0, 0, 0, 0];
        temp[index] = 1;
        SetClicks([...temp]);
    }

    return (
        <Container className='WorkFlowHover-Container' fluid >
            <div className='WorkFlowHover-Row-Container'>
                <div className='WorkFlowHover-row' onClick={() => { handlClicks(0); }} onMouseOver={() => { handlClicks(0); }}>
                    <div className='WorkFlowHover-Background' >
                        <Row style={{ backgroundColor: "var(--Grey-800, #1D2939)" }}>
                            <div className='WorkFlowHover-row-col'><h4 className='WorkFlowHover-h4 '>Discover</h4></div>
                            <div className='WorkFlowHover-row-col'><h4 className='WorkFlowHover-h4-number'>01</h4></div>
                        </Row>
                    </div>
                    <div className='WorkFlowHover-Toogle WorkFlowHover-Toogle-height' style={{ height: (getClicks[0] ? 120 : 0) }}>
                        <p className='home-project-text WorkFlowHover-p'>We'll work to understand your goals, strategy, and mission to develop a strategy for success.</p>
                    </div>
                </div>
                <div className='WorkFlowHover-row' onClick={() => { handlClicks(1); }} onMouseOver={() => { handlClicks(1); }} >
                    <div className='WorkFlowHover-Background' >
                        <Row style={{ backgroundColor: "var(--Grey-800, #1D2939)" }}>
                            <div className='WorkFlowHover-row-col'><h4 className='WorkFlowHover-h4'>Design</h4></div>
                            <div className='WorkFlowHover-row-col'><h4 className='WorkFlowHover-h4-number'>02</h4></div>
                        </Row>
                    </div>
                    <div className='WorkFlowHover-Toogle WorkFlowHover-Toogle-height ' style={{ height: (getClicks[1] ? 120 : 0) }}>
                        <p className='home-project-text WorkFlowHover-p'>Our team will create an intuitive user experience that will bring your product to life.</p>
                    </div>
                </div>
                <div className='WorkFlowHover-row' onClick={() => { handlClicks(2); }} onMouseOver={() => { handlClicks(2); }}>
                    <div className='WorkFlowHover-Background' >
                        <Row style={{ backgroundColor: "var(--Grey-800, #1D2939)" }}>
                            <div className='WorkFlowHover-row-col'><h4 className='WorkFlowHover-h4'>Develop</h4></div>
                            <div className='WorkFlowHover-row-col'><h4 className='WorkFlowHover-h4-number'>03</h4></div>
                        </Row>
                    </div>
                    <div className='WorkFlowHover-Toogle WorkFlowHover-Toogle-height' style={{ height: (getClicks[2] ? 120 : 0) }}>
                        <p className='home-project-text WorkFlowHover-p'>We work in agile sprints to ensure you're always up to speed with the status of your project.</p>
                    </div>
                </div>
                <div className='WorkFlowHover-row' onClick={() => { handlClicks(3); }} onMouseOver={() => { handlClicks(3); }}>
                    <div className='WorkFlowHover-Background' >
                        <Row style={{ backgroundColor: "var(--Grey-800, #1D2939)" }}>
                            <div className='WorkFlowHover-row-col'><h4 className='WorkFlowHover-h4'>Deliver</h4></div>
                            <div className='WorkFlowHover-row-col'><h4 className='WorkFlowHover-h4-number'>04</h4></div>
                        </Row>
                    </div>
                    <div className='WorkFlowHover-Toogle WorkFlowHover-Toogle-height' style={{ height: (getClicks[3] ? 120 : 0) }}>
                        <p className='home-project-text WorkFlowHover-p'>We efficiently hand over project results to intended recipients, ensuring stakeholder satisfaction.</p>
                    </div>
                </div>
                <div className='WorkFlowHover-row' onClick={() => { handlClicks(4); }} onMouseOver={() => { handlClicks(4); }}>
                    <div className='WorkFlowHover-Background' >
                        <Row style={{ backgroundColor: "var(--Grey-800, #1D2939)" }}>
                            <div className='WorkFlowHover-row-col'><h4 className='WorkFlowHover-h4'>Support</h4></div>
                            <div className='WorkFlowHover-row-col'><h4 className='WorkFlowHover-h4-number'>05</h4></div>
                        </Row>
                    </div>
                    <div className='WorkFlowHover-Toogle WorkFlowHover-Toogle-height' style={{ height: (getClicks[4] ? 120 : 0) }}>
                        <p className='home-project-text WorkFlowHover-p'>Our team will work diligently to maintain the optimal performance and current status of your core IT assets through support.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default WorkFlowHover;