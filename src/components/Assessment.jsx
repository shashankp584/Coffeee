import React from "react";
import { AssessmentCard, AssessmentInfo,  } from "../Styled.jsx";

const Assessment = ({ assessments }) => {
  return (
    <AssessmentCard>
      <AssessmentInfo>
        <p>Skill: {assessments.skill}</p>
        <p>Duration: {assessments.duration}</p>
        <p>Marks: {assessments.marks}</p>
        <p>Score: {assessments.score}</p>
        {assessments.downloadLink && (
          <a href={assessments.downloadLink} className="download-link">
            Download Report
          </a>
        )}
      </AssessmentInfo>
      <div className="ass-vid">
        <video controls>
        <source src={assessments.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
    </AssessmentCard>
  );
};

export default Assessment;
