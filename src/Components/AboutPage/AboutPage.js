import React, { useEffect } from 'react'
import './AboutPage.css'
import StoryVisionFuture from './StoryVisionFutureComponent/StoryVisionFuture'
import Numbers from './NumbersComponent/Numbers'
import CEOProfile from './CEOProfileComponent/CEOProfile'
import Members from './MembersComponent/Members'
import ContactUsNav from './ContactUsNavComponent/ContactUsNav'
import CareersNav from './CareersNavComponent/CareersNav'
import ApplyNowNav from './ApplyNowNavComponent/ApplyNowNav'
import { Helmet } from 'react-helmet'
import Header from '../HeaderComponent/Header'
import ImagesSlider from './ImagesComponent/ImagesSlider'

function AboutPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Vishesh Country Cache - About</title>
        <link rel="canonical" href="https://visheshcountrycache.com/about" />
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

      <div className='about-page-images-section1'>
        <div className='about-page-heading'>
          Individuals from diverse backgrounds, each with their unique story, come together as a unified team, bound by a commitment to delivering excellence.
        </div>
      </div>

      <ImagesSlider />

      <div style={{ position: "relative", zIndex: 1 }}>
        <StoryVisionFuture />
        <Numbers />
        <div className='height-4' id='CEO'></div>
        <CEOProfile />
        <div className='height-4'></div>
        <Members />
        <ContactUsNav />
        <div className='height-4'></div>
        <CareersNav />
        <div className='height-4'></div>
        <ApplyNowNav />
        <div className='height-2'></div>
      </div>
    </div>
  )
}

export default AboutPage