import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import "./ToolsToggle.css";
import CreativeDesignTools from './ToolsComponents/CreativeDesign/CreativeDesignTools';
import UIUXTools from './ToolsComponents/UI_Ux/UIUXTools';
import DigitalMarketingTools from './ToolsComponents/DigitalMarketing/DigitalMarketingTools';
import FullStackDevelopmentTools from './ToolsComponents/FullStackDevelopment/FullStackDevelopmentTools';
import MarketingAnalysisTools from './ToolsComponents/MarketingAnalysis/MarketingAnalysisTools';

function ToolsToggle(props) {
    const Ref = useRef(null);
    const [TeamClicks, setTeamClisks] = useState([1, 0, 0, 0, 0]);
    const [ToolsLogos, setToolsLogos] = useState(<CreativeDesignTools />);

    const scrolling = (index, value) => {
        const scrollPosition = Ref.current.scrollLeft;
        if (TeamClicks.indexOf(1) > index) {
            document.querySelector(".ToolsToggle-Row-1").scrollTo({
                left: -value + scrollPosition,
                behavior: 'smooth'
            });
        }
        else if (TeamClicks.indexOf(1) < index) {
            document.querySelector(".ToolsToggle-Row-1").scrollTo({
                left: value + scrollPosition,
                behavior: 'smooth'
            });
        }
    }

    const handlClicks = (index) => {
        var temp = [0, 0, 0, 0, 0];
        temp[index] = 1;
        setTeamClisks([...temp]);
        switch (index) {
            case 0: setToolsLogos(<CreativeDesignTools />); scrolling(index, 150); break;
            case 1: setToolsLogos(<UIUXTools />); scrolling(index, 100); break;
            case 2: setToolsLogos(<FullStackDevelopmentTools />); scrolling(index, 150); break;
            case 3: setToolsLogos(<DigitalMarketingTools />); scrolling(index, 150); break;
            case 4: setToolsLogos(<MarketingAnalysisTools />); scrolling(index, 200); break;
            default: ;
        }

    }
    return (
        <Container fluid className='ToolsToggle-container'>

            <div className='ToolsToggle-Row-1' ref={Ref}>
                <div className='ToolsToggle-Row-1-col'>
                    <div className={"ToolsToggle-Row-1-col-div " + (TeamClicks[0] && " ToolsToggle-active")} onClick={() => { handlClicks(0) }}>
                        <h6 className='ToolsToggle-h6 Creative'>
                            Creative Design
                        </h6>
                    </div>
                </div>
                <div className='ToolsToggle-Row-1-col'>
                    <div className={"ToolsToggle-Row-1-col-div " + (TeamClicks[1] && " ToolsToggle-active")} onClick={() => { handlClicks(1) }}>
                        <h6 className='ToolsToggle-h6'>
                            UI/UX
                        </h6>
                    </div>
                </div>
                <div className='ToolsToggle-Row-1-col'>
                    <div className={"ToolsToggle-Row-1-col-div " + (TeamClicks[2] && " ToolsToggle-active")} onClick={() => { handlClicks(2) }}>
                        <h6 className='ToolsToggle-h6 FullStack'>
                            Full Stack Development
                        </h6>
                    </div>
                </div>
                <div className='ToolsToggle-Row-1-col'>
                    <div className={"ToolsToggle-Row-1-col-div " + (TeamClicks[3] && " ToolsToggle-active")} onClick={() => { handlClicks(3) }}>
                        <h6 className='ToolsToggle-h6  digital'>
                            Digital Marketing
                        </h6>
                    </div>
                </div>
                <div className='ToolsToggle-Row-1-col'>
                    <div className={"ToolsToggle-Row-1-col-div " + (TeamClicks[4] && " ToolsToggle-active")} onClick={() => { handlClicks(4) }}>
                        <h6 className='ToolsToggle-h6 MarketingAnalysis'>
                            Marketing Analysis
                        </h6>
                    </div>
                </div>
            </div>
            <div className='ToolsToggle-Row-2'>
                {ToolsLogos}
            </div>

        </Container>
    );
}

export default ToolsToggle;