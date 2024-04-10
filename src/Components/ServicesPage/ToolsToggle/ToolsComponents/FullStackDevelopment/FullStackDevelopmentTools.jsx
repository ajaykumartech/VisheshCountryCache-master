import React from 'react';
import "./FullStackDevelopmentTools.css"
import image1 from "../../../../../assets/ServicePage/Html.png"
import image2 from "../../../../../assets/ServicePage/css.png"
import image3 from "../../../../../assets/ServicePage/JavaScript.png"
import image4 from "../../../../../assets/ServicePage/Angular.png"
import image5 from "../../../../../assets/ServicePage/React.png"
import image6 from "../../../../../assets/ServicePage/Nodejs.png"
import image7 from "../../../../../assets/ServicePage/JQuery.png"
import image8 from "../../../../../assets/ServicePage/MongoDB.png"
import image9 from "../../../../../assets/ServicePage/Next.png"
import image10 from "../../../../../assets/ServicePage/python.png"
import image11 from "../../../../../assets/ServicePage/MySql.png"
import image12 from "../../../../../assets/ServicePage/Expressjs.png"
import image13 from "../../../../../assets/ServicePage/PHP.png"
import image14 from "../../../../../assets/ServicePage/react-native.png"
import image15 from "../../../../../assets/ServicePage/Redux.png"
import image16 from "../../../../../assets/ServicePage/java.png"
import image17 from "../../../../../assets/ServicePage/spring boot.png"
import image18 from "../../../../../assets/ServicePage/Heroku.png"
import image19 from "../../../../../assets/ServicePage/Hostinger.png"
import image20 from "../../../../../assets/ServicePage/GoDaddy.png"


const images = [
    { image: image1, name: "Html" }, { image: image2, name: "CSS" }, { image: image3, name: "JavaScript" }, { image: image4, name: "Angular" }, { image: image5, name: "" }, { image: image6, name: "" },
    { image: image7, name: "" }, { image: image8, name: "" }, { image: image9, name: "" }, { image: image10, name: "" }, { image: image11, name: "" }, { image: image12, name: "" },
    { image: image13, name: "" }, { image: image14, name: "" }, { image: image15, name: "" }, { image: image16, name: "" }, { image: image17, name: "" }, { image: image18, name: "" },
    { image: image19, name: "" }, { image: image20, name: "" }
];

function FullStackDevelopmentTools(props) {
    return (
        <div className='fullstack-logos-sections'>
            <div className='fullstack-logos-section'>
                {images.map((tool, index) => (
                    <div className='fullstack-logos-section-col'>
                        <img key={index} src={tool.image}
                            alt="visheshFullstack.png" className={index < 4 || index === 12 || index === 10 ? 'fullstack-logos-img1' : 'fullstack-logos-img'} />
                        <div className='TableData-Text' style={{ color: "var(--text-icon-light-body, #33353A)", textAlign: "center" }}>{tool.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FullStackDevelopmentTools;