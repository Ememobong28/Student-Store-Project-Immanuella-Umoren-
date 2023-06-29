import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id= "about">
      <h3 className="about-heading">About</h3>
      <div className="about-container">
        <div className="about-description">
          <p>
            The CodePath Student Store offers great products at great price from a great team and for a great cause.
          </p>
          <p>
            We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
          </p>
          <p>
            All proceeds go towards bringing high quality CS education to college students around the country.
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
    </section>
  );
}
