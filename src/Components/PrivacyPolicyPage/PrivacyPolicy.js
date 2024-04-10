import React, { useEffect } from "react";
import "./PrivacyPolicy.css";
import { Helmet } from "react-helmet";
import Header from "../HeaderComponent/Header";

function PrivacyPolicy() {
  useEffect(() => {
    window.scroll(0, 0)
  })

  return (
    <div>
      <Helmet>
        <title>Vishesh Country Cache - Privacy-Policy</title>
        <link rel="canonical" href="https://visheshcountrycache.com/privacy-policy" />
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

      <div style={{ marginTop: "5%" }}>
        <h4 className="PrivacyPage-Header-Name">Privacy Policy</h4>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading">Introduction</p>
        <p className="privacy-subText">
          Vishesh Country Cache ("we," "us," or "our") values your privacy and
          is committed to protecting your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard your data when you
          use our website and services.
        </p>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading">Information We Collect</p>
        <p className="privacy-subHeading2">Personal Information</p>
        <p className="privacy-subText">
          We may collect personal information, including but not limited to:
        </p>
        <ul className="privacy-subText">
          <li>Name</li>
          <li> Email address</li>
          <li> Contact information</li>
          <li>Company details</li>
          <li> User preferences</li>
        </ul>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">Non-personal Information</p>
        <p className="privacy-subText">
          We also collect non-personal information, such as:
        </p>
        <ul className="privacy-subText">
          <li>Browser type</li>
          <li> Device information</li>
          <li>IP address</li>
          <li> Cookies and usage data</li>
        </ul>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">How We Use Your Information</p>
        <p className="privacy-subText">
          We use the collected information for the following purposes:
        </p>
        <ul className="privacy-subText">
          <li>To provide and maintain our services</li>
          <li> To improve our website and services</li>
          <li> To communicate with you</li>
          <li> To personalize your experience</li>
          <li> To comply with legal obligations</li>
        </ul>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">Data Security</p>
        <p className="privacy-subText">
          We prioritize the security of your data and implement
          industry-standard measures to protect against unauthorized access,
          disclosure, or alteration.
        </p>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">Cookies</p>
        <p className="privacy-subText">
          We use cookies to enhance your experience on our website. You can
          manage your cookie preferences through your browser settings.
        </p>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">Third-party Links</p>
        <p className="privacy-subText">
          Our website may contain links to third-party sites. We are not
          responsible for the privacy practices of these sites. We recommend
          reviewing their privacy policies.
        </p>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">Your Choices</p>
        <p className="privacy-subText">You have the right to:</p>
        <ul className="privacy-subText">
          <li>Access, correct, or delete your personal information</li>
          <li> Opt-out of marketing communications</li>
          <li> Disable cookies</li>
        </ul>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading">Changes to this Privacy Policy</p>
        <p className="privacy-subText">
          We may update our Privacy Policy to reflect changes in our practices.
          We encourage you to review this page periodically for the latest
          information.
        </p>
      </div>
      <div className="privacy-container" style={{ marginBottom: "10%" }}>
        <p className="privacy-subHeading">Contact Us</p>
        <p className="privacy-subText">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at{" "}
          <span className="privacy-email"><a style={{ color: "#f5a091", textDecoration: "none" }} href="mailto:hello@visheshcountrycache.com">hello@visheshcountrycache.com</a></span>
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;