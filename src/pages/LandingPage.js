import React from 'react';
import '../styles/landingPage.css';

const LandingPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="landing-page">
      <h1 className="landing-page-title">TOP CODER COMPETITION {currentYear}</h1>
    </div>
  );
};

export default LandingPage;
