import React, { useEffect } from "react";
import "./ServicesPage.css";
import Principles from "./Principles/principles";
import { Helmet } from "react-helmet";
import ToolsToggle from "./ToolsToggle/ToolsToggle";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import WorkFlowHover from "./WorkFlowHoverComponent/WorkFlowHover";
import Header from '../HeaderComponent/Header'

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Vishesh Country Cache - Services</title>
        <link rel="canonical" href="https://visheshcountrycache.com/services" />
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

      <WhatWeOffer />


      <div style={{ margin: '3% 3%' }}>
        <p className="home-project-text" style={{ textAlign: "left" }}>
          Whether you’ve defined your tech stack or need something new, our
          team is well-versed in a variety of platforms and we’re equipped
          with the tools and know-how to tackel your project.
        </p>
      </div>
      <ToolsToggle />
      <h3 className="heading-work">Workflow</h3>
      <div>
        <WorkFlowHover />
      </div>
      <div>
        <Principles />
      </div>{" "}
    </div>
  );
}

export default ServicesPage;
