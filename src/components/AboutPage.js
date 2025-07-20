// src/components/AboutPage.js
import React from 'react';
import './AboutPage.css';
import UserNavbar from './UserNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const AboutPage = () => {
  return (
    <div className="about-page">
      <UserNavbar />
      <h1>About Meditech 24x7</h1>

      <section className="about-details">
        <h2>Inventory Details</h2>
        <p>
          Our platform provides comprehensive inventory management, allowing you to easily track stock levels, manage medical supplies, and ensure timely restocking of essential items.
        </p>
        <p>
          Key features include real-time updates, low-stock alerts, and detailed reporting to help streamline your inventory operations.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please feel free to contact us:</p>
        <p>Email: <a href="mailto:meditech@gmail.com">meditech@gmail.com</a></p>
        <p>Phone: 9789562137</p>
        <div className="contact-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://wa.me/9789562137" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
