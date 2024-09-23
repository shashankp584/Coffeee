import React from 'react';
import { InterviewCard,InterviewInfo } from '../Styled';

const ScreeningInterview = ( {interview} ) => {
  return (
    <InterviewCard>
      <InterviewInfo>
        <p>{interview.title}</p>
        <p>Skill: {interview.skill}</p>
        <p>Duration:  {interview.duration}</p>
      </InterviewInfo>
      <div className="interview-video">
        <video style={{ width: "100%", height: "auto", maxWidth: "100%" }} controls>
          <source src={interview.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </InterviewCard>
  );
};

export default ScreeningInterview;
