import React from "react";
import { Row, Image, Container } from "react-bootstrap";
import "./principles.css"
import image1 from "../../../assets/ServicePage/principles/Expertise.png";
import image2 from "../../../assets/ServicePage/principles/Provident.png";
import image3 from "../../../assets/ServicePage/principles/Effectiveness.png";
import image4 from "../../../assets/ServicePage/principles/Results-driven.png";
import image5 from "../../../assets/ServicePage/principles/Time-To-Market.png";
import image6 from "../../../assets/ServicePage/principles/People-first.png";


function principles() {
  return (
    <Container fluid className="principlesp-container">
      <h3 className="principles">Our Principles</h3>
      {/* <div className="height-4"></div> */}
      <Row className="principles-Row">
        <div className="principles-Col-1">
          <div>
            <Image src={image1} className="icon" alt="visheshServices.png" />
            <h5 className="heading-principals">Expertise</h5>
            <p className=" home-project-text sub_text_principals  ">Drawing from our extensive expertise across diverse industries, we offer research-driven solutions.</p>
          </div>
        </div>

        <div className="principles-Col-2">
          <div>
            <Image src={image2} className="icon" alt="visheshServices.png" />
            <h5 className="heading-principals">Provident</h5>
            <p className="home-project-text sub_text_principals ">We'll understand your business needs and attract the right specialists for you.</p>
          </div>
        </div>

        <div className="principles-Col-3">
          <div>
            <Image src={image3} className="icon" alt="visheshServices.png" />
            <h5 className="heading-principals">Effectiveness</h5>
            <p className="home-project-text sub_text_principals ">Our projects are always successful and delivered on time at a cost-effective price.</p>
          </div>
        </div>
      </Row>
      <Row className="principles-Row">
        <div className="principles-Col-1">
          <div>
            <Image src={image4} className="icon" alt="visheshServices.png" />
            <h5 className="heading-principals">Results-driven</h5>
            <p className="home-project-text sub_text_principals ">We'll enhance customer numbers and loyalty through improved accessibility, quicker onboarding, and added services..</p>
          </div>
        </div>

        <div className="principles-Col-2">
          <div>
            <Image src={image5} className="icon" alt="visheshServices.png" />
            <h5 className="heading-principals">Time to Market</h5>
            <p className="home-project-text sub_text_principals ">The in-house team's scalability allows us to tailor it to the project's requirements and business objectives.</p>
          </div>
        </div>

        <div className="principles-Col-3">
          <div>
            <Image src={image6} className="icon" alt="visheshServices.png" />
            <h5 className="heading-principals">People-first</h5>
            <p className="home-project-text sub_text_principals ">Our team comprises exceptional specialists with equally great personalities, ensuring honest, open collaboration.</p>
          </div>
        </div>

      </Row>
      <div className="height-3"></div>
    </Container>
  );
}

export default principles;
