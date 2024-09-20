import React from 'react';
import './styles/ScreeningInterview.css';

const ScreeningInterview = ( {interview} ) => {
  return (
    <div className="interview-card">
      <div className="interview-info">
        <p>{interview.title}</p>
        <p>Skill: {interview.skill}</p>
        <p>Duration:  {interview.duration}</p>
      </div>
      <div className="interview-video">
        <video style={{ width: "100%", height: "auto", maxWidth: "100%" }} controls>
          <source src={interview.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ScreeningInterview;
