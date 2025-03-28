import React from "react";

function About() {
  return (
    <div>
      <div className="container">
        <h1>About Us</h1>
        <p>
          Welcome to our furniture store, where craftsmanship meets elegance. We
          take pride in offering high-quality, timeless pieces that enhance your
          living spaces.
        </p>
        <p>
          Our mission is to bring you furniture that combines comfort, style,
          and durability, ensuring your home reflects your unique taste.
        </p>
        <div className="team">
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Founder &amp; Designer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Marketing Head</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
