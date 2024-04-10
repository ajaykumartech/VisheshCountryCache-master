import React, { useEffect } from 'react'
import ContactHeader from './ContactHeaderComponent/ContactHeader'
import ContactForm from './ContactFormComponent/ContactForm'
import ContactUs from './ContactUsComponent/ContactUs'
import { Helmet } from 'react-helmet'
import Header from '../HeaderComponent/Header'

function ContactPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Vishesh Country Cache - Contact</title>
        <link rel="canonical" href="https://visheshcountrycache.com/contact" />
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

      {/* Contact Header Text */}
      <ContactHeader />

      {/** Contact form */}
      <ContactForm />

      {/* Contact US  */}
      <ContactUs />

      <div className='height-2'></div>
    </div>
  )
}

export default ContactPage