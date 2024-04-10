import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import "./WhatWeOffer.css"
import Services1 from '../../../assets/ServicePage/Creative Design.mp4';
import Services2 from '../../../assets/ServicePage/UI-UX Design.mp4';
import Services3 from '../../../assets/ServicePage/FullStack Dev.mp4';
import Services4 from '../../../assets/ServicePage/Digital Marketing.mp4';
import Services5 from '../../../assets/ServicePage/Marketing Analysis.mp4';


const CreativeDesign = ({ transitionClass, DisplayMode }) => {
    return (
        <div className={'WhatWeOffer-Slide ' + (transitionClass ? " TransitionLeft" : "TransitionRight")} style={{ display: DisplayMode ? "none" : "block" }}>
            <div className='WhatWeOffer-Slide-Video-Container'>
                <video loop playsinline disablepictureinpicture preload="metadata" autoPlay muted className='WhatWeOffer-Slide-Video' >
                    <source src={Services1} type='video/mp4' />
                    <meta itemprop="name" content="vishesh CreativeDesign.mp4" />
                </video>
            </div>
            <div className='WhatWeOffer-Slide-text-Container'>
                <Row style={{ backgroundColor: "transparent" }}>
                    <div className='WhatWeOffer-Slide-text'>Logo Design</div>
                    <div className='WhatWeOffer-Slide-text'>Banner and Signage Design</div>
                    <div className='WhatWeOffer-Slide-text'>Video Creation & Editing</div>
                    <div className='WhatWeOffer-Slide-text'>Display Advertising</div>
                    <div className='WhatWeOffer-Slide-text'>Business Card Design</div>
                    <div className='WhatWeOffer-Slide-text'>Product Labelling</div>
                    <div className='WhatWeOffer-Slide-text'>Packaging Design</div>
                    <div className='WhatWeOffer-Slide-text'>Social Media Post and Ad Design</div>
                    <div className='WhatWeOffer-Slide-text'>Branding and Identity Design</div>
                    <div className='WhatWeOffer-Slide-text'>Print Design (Brochures & Flyers)</div>
                    <div className='WhatWeOffer-Slide-text'>Infographics</div>
                    <div className='WhatWeOffer-Slide-text'>Social Media Posters</div>
                </Row>
            </div>
        </div>
    )
}

const UIUXDesign = ({ transitionClass, DisplayMode }) => {
    return (
        <div className={'WhatWeOffer-Slide ' + (transitionClass ? " TransitionLeft" : " TransitionRight")} style={{ display: DisplayMode ? "none" : "block" }}>
            <div className='WhatWeOffer-Slide-Video-Container'>
                <video loop playsinline disablepictureinpicture preload="metadata" autoPlay muted className='WhatWeOffer-Slide-Video'>
                    <source src={Services2} type='video/mp4' />
                    <meta itemprop="name" content="vishesh UIUXDesign.mp4" />
                </video>
            </div>
            <div className='WhatWeOffer-Slide-text-Container'>
                <Row style={{ backgroundColor: "transparent" }}>
                    <div className='WhatWeOffer-Slide-text'>User Research</div>
                    <div className='WhatWeOffer-Slide-text'>Prototyping and Testing</div>
                    <div className='WhatWeOffer-Slide-text'>User Experience (UX) Design</div>
                    <div className='WhatWeOffer-Slide-text'>Web UX/UI Design</div>
                    <div className='WhatWeOffer-Slide-text'>User Interface (UI) Design</div>
                    <div className='WhatWeOffer-Slide-text'>Mobile App UX/UI Design</div>

                </Row>
            </div>
        </div>
    )
}
const FullStack = ({ transitionClass, DisplayMode }) => {
    return (
        <div className={'WhatWeOffer-Slide ' + (transitionClass ? " TransitionLeft" : " TransitionRight")} style={{ display: DisplayMode ? "none" : "block" }}>
            <div className='WhatWeOffer-Slide-Video-Container'>
                <video loop playsinline disablepictureinpicture preload="metadata" autoPlay muted className='WhatWeOffer-Slide-Video'>
                    <source src={Services3} type='video/mp4' />
                    <meta itemprop="name" content="vishesh FullStack.mp4" />
                </video>
            </div>
            <div className='WhatWeOffer-Slide-text-Container'>
                <Row style={{ backgroundColor: "transparent" }}>
                    <div className='WhatWeOffer-Slide-text'>Front-end Development</div>
                    <div className='WhatWeOffer-Slide-text'>Mobile App Development</div>
                    <div className='WhatWeOffer-Slide-text'>Back-end Development</div>
                    <div className='WhatWeOffer-Slide-text'>Content Management System (CMS)</div>
                    <div className='WhatWeOffer-Slide-text'>Database Management</div>
                    <div className='WhatWeOffer-Slide-text'>Web Services / API Development</div>

                </Row>
            </div>
        </div>
    )
}

const DigitalMarketing = ({ transitionClass, DisplayMode }) => {
    return (
        <div className={'WhatWeOffer-Slide ' + (transitionClass ? " TransitionLeft" : " TransitionRight")} style={{ display: DisplayMode ? "none" : "block" }}>
            <div className='WhatWeOffer-Slide-Video-Container'>
                <video loop playsinline disablepictureinpicture preload="metadata" autoPlay muted className='WhatWeOffer-Slide-Video'>
                    <source src={Services4} type='video/mp4' />
                    <meta itemprop="name" content="vishesh DigitalMarketing.mp4" />
                </video>
            </div>
            <div className='WhatWeOffer-Slide-text-Container'>
                <Row style={{ backgroundColor: "transparent" }}>
                    <div className='WhatWeOffer-Slide-text'>Social Media Marketing</div>
                    <div className='WhatWeOffer-Slide-text'>Pay-Per-Click (PPC) Advertising</div>
                    <div className='WhatWeOffer-Slide-text'>HTML Emails & Newsletters</div>
                    <div className='WhatWeOffer-Slide-text'>Video Marketing</div>
                    <div className='WhatWeOffer-Slide-text'>Content Marketing</div>
                    <div className='WhatWeOffer-Slide-text'>Local SEO and Marketing</div>
                    <div className='WhatWeOffer-Slide-text'>Brand Development</div>
                    <div className='WhatWeOffer-Slide-text'>Analytics and Data Analysis</div>
                    <div className='WhatWeOffer-Slide-text'>Landing Pages</div>
                    <div className='WhatWeOffer-Slide-text'>Market Research</div>
                    <div className='WhatWeOffer-Slide-text'>Brand Development</div>
                    <div className='WhatWeOffer-Slide-text'>Conversion Rate Optimization (CRO)</div>

                </Row>
            </div>
        </div>
    )
}

const MarketingAnalysis = ({ transitionClass, DisplayMode = true }) => {
    return (
        <div className={'WhatWeOffer-Slide ' + (transitionClass ? " TransitionLeft" : " TransitionRight")} style={{ display: DisplayMode ? "none" : "block" }}>
            <div className='WhatWeOffer-Slide-Video-Container'>
                <video loop playsinline disablepictureinpicture preload="metadata" autoPlay muted className='WhatWeOffer-Slide-Video'>
                    <source src={Services5} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='WhatWeOffer-Slide-text-Container'>
                <Row style={{ backgroundColor: "transparent" }}>
                    <div className='WhatWeOffer-Slide-text'>Data Analysis & Reports</div>
                    <div className='WhatWeOffer-Slide-text'>Excel Dashboards & Pivot Tables</div>
                    <div className='WhatWeOffer-Slide-text'>Data Collection and Integration</div>
                    <div className='WhatWeOffer-Slide-text'>Market Research</div>
                    <div className='WhatWeOffer-Slide-text'>Data Cleaning and Preparation</div>
                    <div className='WhatWeOffer-Slide-text'>Custom Reporting and Insights</div>
                    <div className='WhatWeOffer-Slide-text'>Data Visualization</div>
                    <div className='WhatWeOffer-Slide-text'>Data Scraping</div>
                    <div className='WhatWeOffer-Slide-text'>Power BI Dashboard/Reports</div>
                    <div className='WhatWeOffer-Slide-text'>Data Modelling</div>
                    <div className='WhatWeOffer-Slide-text'>Customer Segmentation</div>
                    <div className='WhatWeOffer-Slide-text'>Competitor Analysis</div>

                </Row>
            </div>
        </div>
    )
}

function WhatWeOffer(props) {
    const [getClicks, setClicks] = useState([1, 0, 0, 0, 0]);
    const [getToggle, setToggle] = useState([0, 0, 0, 0, 0]);

    const [transitionClass, setTransitionClass] = useState(false);



    const handlClicks = (index) => {
        var temp = [0, 0, 0, 0, 0];
        temp[index] = 1;
        setClicks([...temp]);

        if (getClicks.indexOf(1) > index) {
            setTransitionClass(true);
        }
        else if (getClicks.indexOf(1) < index) {
            setTransitionClass(false);
        }

    }

    const handlToggle = (index) => {

        var temp = [0, 0, 0, 0, 0];
        if (getToggle[index] === 0) {

            temp[index] = 1;
            setToggle([...temp]);
        }
        else {
            setToggle([...temp]);
        }


    }
    return (
        <Container fluid className='WhatWeOffer-Container' >
            <div className='WhatWeOffer-Container-row'>
                <Row style={{ backgroundColor: "transparent" }}>
                    <div className='WhatWeOffer-col-1'>
                        <div style={{ backgroundColor: "transparent" }}>
                            <h3 className="WhatWeOffer-h3">What We Offer</h3>
                        </div>
                        <div className='WhatWeOffer-h5-Container' onClick={() => { handlClicks(0) }}>
                            <h5 className={getClicks[0] ? "WhatWeOffer-h5-active" : "WhatWeOffer-h5"}>Creative Design </h5>
                            <span className={"WhatWeOffer-arrow " + (getClicks[0] && "WhatWeOffer-arrow-active")} >&rarr;</span>
                        </div>
                        <div className='WhatWeOffer-h5-Container' onClick={() => { handlClicks(1) }}>
                            <h5 className={getClicks[1] ? "WhatWeOffer-h5-active" : "WhatWeOffer-h5"}>UI/UX Design</h5>
                            <span className={"WhatWeOffer-arrow " + (getClicks[1] && "WhatWeOffer-arrow-active")}>&rarr;</span>
                        </div>
                        <div className='WhatWeOffer-h5-Container' onClick={() => { handlClicks(2) }}>
                            <h5 className={getClicks[2] ? "WhatWeOffer-h5-active" : "WhatWeOffer-h5"}>Full Stack Development</h5>
                            <span className={"WhatWeOffer-arrow " + (getClicks[2] && "WhatWeOffer-arrow-active")}>&rarr;</span>
                        </div>
                        <div className='WhatWeOffer-h5-Container' onClick={() => { handlClicks(3) }}>
                            <h5 className={getClicks[3] ? "WhatWeOffer-h5-active" : "WhatWeOffer-h5"}>Digital Marketing</h5>
                            <span className={"WhatWeOffer-arrow " + (getClicks[3] && "WhatWeOffer-arrow-active")}>&rarr;</span>
                        </div>
                        <div className='WhatWeOffer-h5-Container' onClick={() => { handlClicks(4) }}>
                            <h5 className={getClicks[4] ? "WhatWeOffer-h5-active" : "WhatWeOffer-h5"}>Marketing Analysis</h5>
                            <span className={"WhatWeOffer-arrow " + (getClicks[4] && "WhatWeOffer-arrow-active")}>&rarr;</span>
                        </div>
                    </div>
                    <div className='WhatWeOffer-col-2'>
                        <div className='WhatWeOffer-Slider-Container'>

                            <CreativeDesign DisplayMode={getClicks[0] ? false : true} transitionClass={transitionClass} />

                            <UIUXDesign DisplayMode={getClicks[1] ? false : true} transitionClass={transitionClass} />

                            <FullStack DisplayMode={getClicks[2] ? false : true} transitionClass={transitionClass} />

                            <DigitalMarketing DisplayMode={getClicks[3] ? false : true} transitionClass={transitionClass} />

                            <MarketingAnalysis DisplayMode={getClicks[4] ? false : true} transitionClass={transitionClass} />

                        </div>
                    </div>
                </Row>
            </div>

            <div className='WhatWeOffer-Container-Mobile'>
                <div className='WhatWeOffer-col-1'>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h3 className="WhatWeOffer-h3">What We Offer</h3>
                    </div>


                    <div className='WhatWeOffer-col-2'>
                        <div className='WhatWeOffer-Slider-Container'>

                            <CreativeDesign DisplayMode={getClicks[0] ? false : true} transitionClass={transitionClass} />

                            <UIUXDesign DisplayMode={getClicks[1] ? false : true} transitionClass={transitionClass} />

                            <FullStack DisplayMode={getClicks[2] ? false : true} transitionClass={transitionClass} />

                            <DigitalMarketing DisplayMode={getClicks[3] ? false : true} transitionClass={transitionClass} />

                            <MarketingAnalysis DisplayMode={getClicks[4] ? false : true} transitionClass={transitionClass} />

                        </div>
                    </div>


                    <div className='WhatWeOffer-Mobile-h5-Container' onClick={() => { handlClicks(0); handlToggle(0) }}>
                        <div className='WhatWeOffer-Mobile-h5-row'>
                            <h5 className={getClicks[0] ? "WhatWeOffer-Mobile-h5-active" : "WhatWeOffer-Mobile-h5"}>Creative Design </h5>
                            <span className={"WhatWeOffer-arrow " + (getToggle[0] && "WhatWeOffer-arrow-active")} >&rarr;</span>
                        </div>
                        <div className={'WhatWeOffer-Mobile-Slide-text-Container'} style={{ height: (getToggle[0] ? 250 : 0) }}>
                            <Row style={{ backgroundColor: "transparent" }}>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Logo Design</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Banner and Signage Design</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Video Creation & Editing</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Display Advertising</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Business Card Design</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Product Labelling</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Packaging Design</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Social Media Post and Ad Design</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Branding and Identity Design</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Print Design (Brochures & Flyers)</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Infographics</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '> Social Media Posters</div>
                            </Row>
                        </div>
                    </div>
                    <div className='WhatWeOffer-Mobile-h5-Container' onClick={() => { handlClicks(1); handlToggle(1) }}>
                        <div className='WhatWeOffer-Mobile-h5-row'>
                            <h5 className={getClicks[1] ? "WhatWeOffer-Mobile-h5-active" : "WhatWeOffer-Mobile-h5"}>UI/UX Design</h5>
                            <span className={"WhatWeOffer-arrow " + (getToggle[1] && "WhatWeOffer-arrow-active")}>&rarr;</span>
                        </div>
                        <div className={'WhatWeOffer-Mobile-Slide-text-Container'} style={{ height: (getToggle[1] ? 250 : 0) }}>
                            <Row style={{ backgroundColor: "transparent" }}>
                                <div className='WhatWeOffer-Mobile-Slide-text '>User Research</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Prototyping and Testing</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>User Experience (UX) Design</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Web UX/UI Design</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>User Interface (UI) Design</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Mobile App UX/UI Design</div>

                            </Row>
                        </div>
                    </div>
                    <div className='WhatWeOffer-Mobile-h5-Container' onClick={() => { handlClicks(2); handlToggle(2) }}>
                        <div className='WhatWeOffer-Mobile-h5-row'>
                            <h5 className={getClicks[2] ? "WhatWeOffer-Mobile-h5-active" : "WhatWeOffer-Mobile-h5"}>Full Stack Development</h5>
                            <span className={"WhatWeOffer-arrow " + (getToggle[2] && "WhatWeOffer-arrow-active")}>&rarr;</span>
                        </div>
                        <div className={'WhatWeOffer-Mobile-Slide-text-Container'} style={{ height: (getToggle[2] ? 250 : 0) }}>
                            <Row style={{ backgroundColor: "transparent" }}>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Front-end Development</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Mobile App Development</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Back-end Development</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Content Management System (CMS)</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Database Management</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Web Services / API Development</div>
                            </Row>
                        </div>
                    </div>
                    <div className='WhatWeOffer-Mobile-h5-Container' onClick={() => { handlClicks(3); handlToggle(3) }}>
                        <div className='WhatWeOffer-Mobile-h5-row'>
                            <h5 className={getClicks[3] ? "WhatWeOffer-Mobile-h5-active" : "WhatWeOffer-Mobile-h5"}>Digital Marketing</h5>
                            <span className={"WhatWeOffer-arrow " + (getToggle[3] && "WhatWeOffer-arrow-active")}>&rarr;</span>

                        </div>
                        <div className={'WhatWeOffer-Mobile-Slide-text-Container'} style={{ height: (getToggle[3] ? 250 : 0) }}>
                            <Row style={{ backgroundColor: "transparent" }}>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Social Media Marketing</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Pay-Per-Click (PPC) Advertising</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>HTML Emails & Newsletters</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Video Marketing</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Content Marketing</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Local SEO and Marketing</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Brand Development</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Analytics and Data Analysis</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Landing Pages</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Market Research</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Brand Development</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Conversion Rate Optimization (CRO)</div>

                            </Row>
                        </div>
                    </div>
                    <div className='WhatWeOffer-Mobile-h5-Container' onClick={() => { handlClicks(4); handlToggle(4) }}>
                        <div className='WhatWeOffer-Mobile-h5-row'>
                            <h5 className={getClicks[4] ? "WhatWeOffer-Mobile-h5-active" : "WhatWeOffer-Mobile-h5"}>Marketing Analysis</h5>
                            <span className={"WhatWeOffer-arrow " + (getToggle[4] && "WhatWeOffer-arrow-active")}>&rarr;</span>
                        </div>
                        <div className={'WhatWeOffer-Mobile-Slide-text-Container'} style={{ height: (getToggle[4] ? 250 : 0) }}>
                            <Row style={{ backgroundColor: "transparent" }}>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Data Analysis & Reports</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Excel Dashboards & Pivot Tables</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Data Collection and Integration</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Market Research</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Data Cleaning and Preparation</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Custom Reporting and Insights</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Data Visualization</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Data Scraping</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Power BI Dashboard/Reports</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Data Modelling</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Customer Segmentation</div>
                                <div className='WhatWeOffer-Mobile-Slide-text '>Competitor Analysis</div>

                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    );
}

export default WhatWeOffer;
