import React from 'react';
import '../styles/landingPage.css';
import { year } from '../config/env';

const LandingPage = () => {
  const tYear = new Date().getFullYear();
  const currentYear = year < tYear ? tYear : year;

  return (
    <div className="landing-page">
      <h1 className="landing-page-title">TOP CODER COMPETITION {currentYear}</h1>
    </div>
  );
};

export default LandingPage;
