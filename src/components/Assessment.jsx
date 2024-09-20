import React from 'react';
import './styles/Assessment.css';

const Assessment = ( {assessments} ) => {
  return (
    <div className="assessment-card">
      <div className="assessment-info">
        
        <p>Skill: {assessments.skill}</p>
        <p>Duration: {assessments.duration}</p>
        <p>Marks: {assessments.marks}</p>
        <p>Score: {assessments.score}</p>
        {assessments.downloadLink && (
            <>
              <a href={assessments.downloadLink} className="download-link">Download Report</a>
              <div className="download-description">{assessments.downloadDescription}</div>
            </>
          )}
      </div>
      <div className="assessment-video">
        <video style={{ width: "100%", height: "auto", maxWidth: "100%" }} controls>
          <source src={assessments.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Assessment;
