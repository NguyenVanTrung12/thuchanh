import React from 'react';
import '../Css/contact.css';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <img src="./img/g3.jpg" alt="Contact Banner" className="contact-banner" style={{ width: '100%' }} />
        <nav className="breadcrumb">
          <Link class="nav-link" to="/"><span style={{ color: 'red' }}>Home</span>
            <span> » </span>
            <span>Contact</span></Link>
        </nav>
        <hr />
        <h2>Contact</h2>
        <p>
          What makes our service stand out from other units? Today, AE FITNESS will share with readers the benefits
          of going to the gym to exercise every day.
        </p>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6267803875458!2d105.78059437597011!3d21.04761438712936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab32dd484c53%3A0x4201b89c8bdfd968!2zMjM4IEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBD4buVIE5odeG6vywgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1726459438142!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>Contact Information</h2>
            <p style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Prestige - Quality Create Success</p>
            <p style={{ fontWeight: 'bold' }}>238 Hoang Quoc Viet - Cau Giay - Ha Noi - Viet Nam</p>
            <ul>
              <li><span style={{ color: "black" }}>Phone: </span>(+84)34 307 5987</li>
              <li><span style={{ color: "black" }}>Mail: </span>duongeptrai317@gmail.com</li>
              <li>
                <span style={{ color: "black" }}>Fanpage: </span>
                <a href="https://www.facebook.com/duongdeptraikhoaito?locale=vi_VN" target="_blank" rel="noopener noreferrer">
                  https://www.facebook.com/duongdeptraikhoaito?locale=vi_VN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
