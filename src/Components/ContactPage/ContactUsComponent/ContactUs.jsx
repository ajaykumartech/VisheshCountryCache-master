import React from 'react';
import "./ContactUs.css"

function ContactUs(props) {

    return (
        <div>
            <div><h4 className='ContactUs-h4'>Contact Us</h4></div>
            <div className='ContactUs-container'>
                <div className='contact-us-text-sec'>
                    <div className='contact-us-info'>
                        <div><h6 className='ContactUs-h6'>E-mail</h6></div>
                        <div><p className='ContactUs-p'><a style={{ color: "#33353A", textDecoration: "none" }} href="mailto:hello@visheshcountrycache.com">hello@visheshcountrycache.com</a></p></div>
                        <div><h6 className='ContactUs-h6'>Call</h6></div>
                        <div><p className='ContactUs-p'><a style={{ backgroundColor: "transparent", color: "#33353A", textDecoration: "none" }} href="tel:+919589958924">+91 9589958924</a></p></div>
                    </div>
                    <div className='contact-us-info'>
                        <div><h6 className='ContactUs-h6'>Address</h6></div>
                        <div><p className='ContactUs-p ContactUs-Address-p'>Near Chakrapani Petrol Bunk, Undrajavaram, Tanuku, East Godavari District, Andhra Pradesh, India-534216</p></div>
                    </div>
                    <div className='contact-us-info1'>
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15279.370861603531!2d81.69647885!3d16.78449905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b82cb5a90ca9%3A0x7b843614527a6cf4!2sUndarajavaram%2C%20Andhra%20Pradesh%20534216!5e0!3m2!1sen!2sin!4v1712226517498!5m2!1sen!2sin" className='contact-page-map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;