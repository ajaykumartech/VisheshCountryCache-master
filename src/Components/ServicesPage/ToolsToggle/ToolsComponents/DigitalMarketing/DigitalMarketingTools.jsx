import React from 'react';
import "./DigitalMarketingTools.css"
import image1 from "../../../../../assets/ServicePage/Hubspot.png";
import image2 from "../../../../../assets/ServicePage/WordPress.png";
import image3 from "../../../../../assets/ServicePage/Oracle.png";
import image4 from "../../../../../assets/ServicePage/MailChimp.png";
import image5 from "../../../../../assets/ServicePage/Google Analytics.png";
import image6 from "../../../../../assets/ServicePage/Google Ads.png";
import image7 from "../../../../../assets/ServicePage/Meta.png";
import image8 from "../../../../../assets/ServicePage/google search console.png";
import image9 from "../../../../../assets/ServicePage/semrush-seo-marketing.png";
import image10 from "../../../../../assets/ServicePage/LinkedIn.png";
import image11 from "../../../../../assets/ServicePage/Webflow.png";
import image12 from "../../../../../assets/ServicePage/Wix.png";

const images = [
    { image: image1, name: "" }, { image: image2, name: "" }, { image: image3, name: "" }, { image: image7, name: "Meta" }, { image: image5, name: "Google Analytics" }, { image: image6, name: "Google Ads" },
    { image: image4, name: "MailChimp" }, { image: image8, name: "" }, { image: image9, name: "" }, { image: image10, name: "" }, { image: image11, name: "" }, { image: image12, name: "" },

]

function DigitalMarketingTools(props) {
    return (
        <div style={{marginBottom: "8%"}}>
            <div className='digital-logos-sections'>
                <div className='digital-logos-section'>
                    {images.slice(0, 4).map((tool, index) => (
                        <div className='digital-logos-section-col' >
                            <img key={index} src={tool.image}
                                className={index > 2 ? 'digital-logos-img1' : 'digital-logos-img'}
                                alt="visheshDigitalMarketing.png" />
                            <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", textAlign: "center" }}>{tool.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='digital-logos-sections'>
                <div className='digital-logos-section2 digital-logos-section3'>
                    {images.slice(8).map((tool, index) => (
                        <div className='digital-logos-section-col' >
                            <img key={index} src={tool.image}
                                className={index !== 3 ? (index < 2 ? 'digital-logos-image3' : "webflow") : (" wix")}
                                alt="visheshDigitalMarketing.png" />
                            <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", textAlign: "center" }}>{tool.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='digital-logos-sections'>
                <div className='digital-logos-section2'>
                    {images.slice(4, 8).map((tool, index) => (
                        <div className='digital-logos-section-col-2'>
                            <img key={index} src={tool.image}
                                className={index !== 3 ? 'digital-logos-img1' : 'googleConsole'}
                                alt="visheshDigitalMarketing.png" />
                            <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", textAlign: "center" }}>{tool.name}</div>
                        </div>
                    ))}
                </div>
            </div>


        </div>

    );
}

export default DigitalMarketingTools;
