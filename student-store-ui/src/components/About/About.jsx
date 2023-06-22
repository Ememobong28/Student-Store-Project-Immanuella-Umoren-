import React from 'react';
import './About.css';

export default function About() {
  return (
    <>
      <h3 className="about-heading">About</h3>
      <div className="about-container">
        <div className="about-description">
          <p>
            The CodePath Student Store offers a wide range of products at affordable prices, curated by our dedicated team with a passion for quality.
          </p>
          <p>
            We have carefully selected items that cater to the diverse interests of students, ensuring there's something for everyone in one convenient place.
          </p>
          <p>
            All proceeds from your purchases contribute to providing high-quality CS education to college students across the country.
          </p>
        </div>
        <div className="about-image-container">
          <img
            className="about-image"
            src="/Codepath-Logo.png"
            alt="CodePath Logo"
          />
        </div>
      </div>
    </>
  );
}
