import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage.js'
import ServicesPage from './Components/ServicesPage/ServicesPage.js'
import WorkPage from './Components/WorkPage/WorkPage.js'
import AboutPage from './Components/AboutPage/AboutPage.js'
import ContactPage from './Components/ContactPage/ContactPage.js'
import Footer from './Components/FooterComponent/Footer.js';
import PrivacyPolicy from './Components/PrivacyPolicyPage/PrivacyPolicy.js';
import Career from './Components/CareerPage/Career.js';
import { Helmet } from 'react-helmet';
import Navbar from './Components/NavbarComponent/Navbar.js'

function App() {

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://visheshcountrycache.com/"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://visheshcountrycache.com/services"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": "Work",
      "item": "https://visheshcountrycache.com/work"
    }, {
      "@type": "ListItem",
      "position": 4,
      "name": "About",
      "item": "https://visheshcountrycache.com/about"
    }, {
      "@type": "ListItem",
      "position": 5,
      "name": "Contact",
      "item": "https://visheshcountrycache.com/contact"
    }, {
      "@type": "ListItem",
      "position": 6,
      "name": "Career",
      "item": "https://visheshcountrycache.com/career"
    }]
  }

  return (
    <BrowserRouter>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <title>Vishesh Country Cache - Home</title>
        <link rel="canonical" href="https://visheshcountrycache.com/" />
        <meta name='description' content='Foster intellect with Vishesh Country Cache – Your destination for innovative solutions. We specialize in creative design, digital marketing, data analysis, full stack development, and UI/UX. Elevate your online presence with our cutting-edge services.' />
        <meta name='keywords' content='vishesh country cache Private Limited, software companies in village,software development company, top 10 software companies in india, software solutions company, software engineering companies, vacancies in small software companies for freshers, software development companies near me, 
    data software research company, software company jobs, best companies for software engineers, best software development company, internship in software company, software consulting companies, vishesh country cache software company, vishesh country cache private limited in undrajavaram, software company, 
    software company near me, vishesh software company in tanuku, software companies in tanuku, best digital marketing company near me, best digital marketing company in tanuku, website development company, best marketing analysis company in tanuku, best software company in city out cuts, top software companies in tanuku, 
    best logo design agency,logo design,best video editing near me, graphic desingers,best graphic design agencies,top marketing analytics companies best data analyst jobs,top data analytics companies,web developer jobs for freshers,jobs in web development for freshers,fornted developers near me,best backend developers near me' />
        <meta name="author" content="Vishesh Country Cache" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='home' Component={HomePage} />
        <Route path='services' Component={ServicesPage} />
        <Route path='work' Component={WorkPage} />
        <Route path='about' Component={AboutPage} />
        <Route path='contact' Component={ContactPage} />
        <Route path='career' Component={Career} />
        <Route path='privacy-policy' Component={PrivacyPolicy} />
        <Route path='*' Component={HomePage} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
