import React from "react";
import "./Career.css";
import { Row, Col, Image } from "react-bootstrap";
import CareerAccordion from "./CareerAccordion/CareerAccordion";
import CareerForm from "./CareerForm/CareerForm";
import icon1 from "../../assets/CareerPage/profile-2user.png";
import icon2 from "../../assets/CareerPage/trend-up.png";
import icon3 from "../../assets/CareerPage/blur.png";
import icon4 from "../../assets/CareerPage/shapes.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import Header from "../HeaderComponent/Header";
import GroupPic from '../../assets/CareerPage/careerpage_img.png'

function Career() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed of transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true, // Set to true for vertical scrolling
  };

  return (
    <div>
      <Helmet>
        <title>Vishesh Country Cache - Career</title>
        <link rel="canonical" href="https://visheshcountrycache.com/career" />
        <meta name='description' content='Unlock the potential of top-tier software solutions with Vishesh Country Cache Private Limited. Based in Tanuku, India, we bring together diverse talents to deliver excellence in software development, testing, design, data analytics, and digital marketing services. Explore career opportunities and innovative solutions now.' />
        <meta name='keywords' content='vishesh country cache Private Limited, software companies in village,software development company, top 10 software companies in india, software solutions company, software engineering companies, vacancies in small software companies for freshers, software development companies near me, 
        data software research company, software company jobs, best companies for software engineers, best software development company, internship in software company, software consulting companies, vishesh country cache software company, vishesh country cache private limited in undrajavaram, software company, 
        software company near me, vishesh software company in tanuku, software companies in tanuku, best digital marketing company near me, best digital marketing company in tanuku, website development company, best marketing analysis company in tanuku, best software company in city out cuts, top software companies in tanuku, 
        best logo design agency,logo design,best video editing near me, graphic desingers,best graphic design agencies,top marketing analytics companies best data analyst jobs,top data analytics companies,web developer jobs for freshers,jobs in web development for freshers,fornted developers near me,best backend developers near me' />
        <meta name="author" content="Vishesh Country Cache" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>

      <Header />

      <div className="career_banner">
        <img src={GroupPic} className="career-image-css" alt="vishesh-group" />
      </div>
      <div className="div-margins">
        <Row className="career-page-row-section">
          <Col md={6}>
            <p className="smallText">
              A great place to{" "}
              <Slider {...settings} className="slider_style">
                <div>
                  <span>Work</span>
                </div>
                <div>
                  <span>Design</span>
                </div>
                <div>
                  <span>Develop</span>
                </div>
                <div>
                  <span>be</span>
                </div>
              </Slider>
            </p>
            <h5 className="mediumText">
              If our values resonate with you as well, then we ought to be
              together.
            </h5>
          </Col>
          <Col md={6}>
            <Row className="career-page-row-section">
              <Col xs={6} md={6}>
                <p className="smallText" style={{ textAlign: "center" }}>
                  <Image src={icon1} className="career-icons" />
                  <br />
                  Collaborative
                  <br />
                  Excellence
                </p>
              </Col>
              <Col xs={6} md={6}>
                <p className="smallText" style={{ textAlign: "center" }}>
                  <Image src={icon2} className="career-icons" />
                  <br />
                  Continuous Growth <br />
                  and Learning
                </p>
              </Col>
            </Row>
            <Row style={{ paddingTop: "5vw" }} className="career-page-row-section">
              <Col xs={6} md={6}>
                <p className="smallText" style={{ textAlign: "center" }}>
                  <Image src={icon3} className="career-icons" />
                  <br />
                  Innovation and <br />
                  Creativity
                </p>
              </Col>
              <Col xs={6} md={6}>
                <p className="smallText" style={{ textAlign: "center" }}>
                  <Image src={icon4} className="career-icons" />
                  <br />
                  Diversity and <br />
                  Inclusion
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="div-margins">
        <h4 className="bigText">What You’ll Get</h4>
        <Row style={{ marginTop: "2%", padding: "10px" }} className="career-page-row-section">
          <Col className="career-page-text-section">
            <h6 className="normalText">Inspirational and Unique Environment</h6>
          </Col>
          <Col md={5} className="career-page-text-section">
            <p className="smallText" style={{ maxWidth: "754px" }}>
              We offer you the chance to thrive in an inspiring setting where
              your creative thinking and innovation will be valued.
            </p>
          </Col>
          <hr style={{ margin: "0px" }} />
        </Row>
        <Row style={{ padding: "10px" }} className="career-page-row-section">
          <Col className="career-page-text-section">
            <h6 className="normalText">Training</h6>
          </Col>
          <Col md={5} className="career-page-text-section">
            <p className="smallText" style={{ maxWidth: "754px" }}>
            Our training programs help you grow by providing expert guidance and personalized learning.
            </p>
          </Col>
          <hr style={{ margin: "0px" }} />
        </Row>
        <Row style={{ padding: "10px" }} className="career-page-row-section">
          <Col className="career-page-text-section">
            <h6 className="normalText">Professional Development</h6>
          </Col>
          <Col md={5} className="career-page-text-section">
            <p className="smallText" style={{ maxWidth: "754px" }}>
              You'll unlock your potential in unique projects. Our priority:
              your growth, learning, and career.
            </p>
          </Col>
          <hr style={{ margin: "0px" }} />
        </Row>
        <Row style={{ padding: "10px" }} className="career-page-row-section">
          <Col className="career-page-text-section">
            <h6 className="normalText">Friendly Team</h6>
          </Col>
          <Col md={5} className="career-page-text-section">
            <p className="smallText" style={{ maxWidth: "754px" }}>
              Join our close-knit, friendly team where every contribution
              matters. Together, we accomplish and celebrate significant success
              with joy.
            </p>
          </Col>
          <hr style={{ margin: "0px" }} />
        </Row>
        <Row style={{ padding: "10px" }} className="career-page-row-section">
          <Col className="career-page-text-section">
            <h6 className="normalText">Knowledge Hub</h6>
          </Col>
          <Col md={5} className="career-page-text-section">
            <p className="smallText" style={{ maxWidth: "754px" }}>
            We have a wide-ranging library filled with valuable technical books.
            </p>
          </Col>
          <hr style={{ margin: "0px" }} />
        </Row>
        <Row style={{ padding: "10px" }} className="career-page-row-section">
          <Col className="career-page-text-section">
            <h6 className="normalText">Fun Saturdays</h6>
          </Col>
          <Col md={5} className="career-page-text-section">
            <p className="smallText" style={{ maxWidth: "754px" }}>
              Diverse indoor games provide a stress-relief escape from work,
              enhancing relaxation and enjoyment.
            </p>
          </Col>
          <hr />
        </Row>
      </div>
      <div style={{ marginTop: "5%" }}>
        <CareerAccordion />
      </div>
      <div className="career-page-form-section-div">
        <CareerForm />
      </div>
    </div>
  );
}

export default Career;
