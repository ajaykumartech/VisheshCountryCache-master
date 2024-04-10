import React, { useState } from 'react'
import './CardsComponent.css'

const cardData = [
    { head: "We are Experts", text: "You'll collaborate with a highly skilled, agile team with extensive experience dedicated to the entire project.", bgColor: "#A8DAF4" },
    { head: "Our Ability to Adapt", text: "Adapting to your needs and constraints, we maintain unwavering responsiveness for a tailored and effective solution.", bgColor: "#F5A091" },
    { head: "We are Cost Effective", text: "We prioritize cost-effectiveness, optimizing your resources while maintaining quality, to deliver exceptional value and ensure your financial goals are met.", bgColor: "#B2DECA" },
    { head: "For Brands of All Sizes", text: "Tailored solutions and expert guidance, catering to the diverse needs of brands across all scales, ensuring effective strategies for growth and success.", bgColor: "#ABAEDB" },
    { head: "We Deliver Innovative Solutions", text: "We leverage advanced tech and creative strategies to make your brand stand out and succeed.", bgColor: "#E1E3C5" }
]

function CardsComponent() {
    const [activeCard, setActiveCard] = useState(1);

    const handleCardClick = (index) => {
        if (activeCard !== 1)
            if (activeCard === index)
                index = index - 1;
        setActiveCard(index);
    };
    return (
        <div className='cards-us-section'>
            <div className='why-us-section'>
                <h2 className='home-about-heading'>Why Us</h2>
            </div>
            {/**        Web View         */}
            <div className='cards-section-css'>
                <div className={`cards-sections-us ${activeCard === 1 ? 'cards-sections-us11' : ''}`} onClick={() => handleCardClick(1)} style={{ backgroundColor: '#A8DAF4' }}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h2 className='cards-section-us-heading'>{cardData[0].head}</h2>
                        <p className='cards-section-us-text'>{cardData[0].text}</p>
                    </div>
                    <h2 className='cards-section-us-number'>01</h2>
                </div>
                <div className={`cards-sections-us1 ${activeCard >= 2 ? 'cards-sections-us12' : ''}`} onClick={() => handleCardClick(2)} style={{ backgroundColor: '#F5A091' }}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h2 className='cards-section-us-heading'>{cardData[1].head}</h2>
                        <p className='cards-section-us-text'>{cardData[1].text}</p>
                    </div>
                    <h2 className='cards-section-us-number'>02</h2>
                </div>
                <div className={`cards-sections-us2 ${activeCard >= 3 ? 'cards-sections-us23' : ''}`} onClick={() => handleCardClick(3)} style={{ backgroundColor: '#B2DECA' }}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h2 className='cards-section-us-heading'>{cardData[2].head}</h2>
                        <p className='cards-section-us-text'>{cardData[2].text}</p>
                    </div>
                    <h2 className='cards-section-us-number'>03</h2>
                </div>
                <div className={`cards-sections-us3 ${activeCard >= 4 ? 'cards-sections-us34' : ''}`} onClick={() => handleCardClick(4)} style={{ backgroundColor: '#ABAEDB' }}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h2 className='cards-section-us-heading'>{cardData[3].head}</h2>
                        <p className='cards-section-us-text'>{cardData[3].text}</p>
                    </div>
                    <h2 className='cards-section-us-number'>04</h2>
                </div>
                <div className={`cards-sections-us4 ${activeCard === 5 ? 'cards-sections-us45' : ''}`} onClick={() => handleCardClick(5)} style={{ backgroundColor: '#E1E3C5' }}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h2 className='cards-section-us-heading'>{cardData[4].head}</h2>
                        <p className='cards-section-us-text'>{cardData[4].text}</p>
                    </div>
                    <h2 className='cards-section-us-number'>05</h2>
                </div>
            </div>

            {/**        Mobile View      */}
            <div className='cards-section-css1'>
                <div className='cards-sections-us-mobile' onClick={() => handleCardClick(1)} style={{ backgroundColor: '#A8DAF4' }}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h2 className='cards-section-us-heading'>{cardData[0].head}</h2>
                        <p className='cards-section-us-text'>{cardData[0].text}</p>
                    </div>
                    <h2 className='cards-section-us-number'>01</h2>
                </div>
                <div className={`cards-sections-us-mobile1 ${activeCard >= 2 ? 'cards-sections-us-mobile12' : ''}`} onClick={() => handleCardClick(2)} style={{ backgroundColor: '#F5A091' }}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h2 className='cards-section-us-heading'>{cardData[1].head}</h2>
                        <p className='cards-section-us-text'>{cardData[1].text}</p>
                    </div>
                    <h2 className='cards-section-us-number'>02</h2>
                </div>
                <div className={`cards-sections-us-mobile2 ${activeCard >= 3 ? 'cards-sections-us-mobile23' : ''}`} onClick={() => handleCardClick(3)} style={{ backgroundColor: '#B2DECA' }}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h2 className='cards-section-us-heading'>{cardData[2].head}</h2>
                        <p className='cards-section-us-text'>{cardData[2].text}</p>
                    </div>
                    <h2 className='cards-section-us-number'>03</h2>
                </div>
                <div className={`cards-sections-us-mobile3 ${activeCard >= 4 ? 'cards-sections-us-mobile34' : ''}`} onClick={() => handleCardClick(4)} style={{ backgroundColor: '#ABAEDB' }}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h2 className='cards-section-us-heading'>{cardData[3].head}</h2>
                        <p className='cards-section-us-text'>{cardData[3].text}</p>
                    </div>
                    <h2 className='cards-section-us-number'>04</h2>
                </div>
                <div className={`cards-sections-us-mobile4 ${activeCard === 5 ? 'cards-sections-us-mobile45' : ''}`} onClick={() => handleCardClick(5)} style={{ backgroundColor: '#E1E3C5' }}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <h2 className='cards-section-us-heading'>{cardData[4].head}</h2>
                        <p className='cards-section-us-text'>{cardData[4].text}</p>
                    </div>
                    <h2 className='cards-section-us-number'>05</h2>
                </div>
            </div>
        </div>
    )
}

export default CardsComponent