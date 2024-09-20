import React from 'react';
import './styles/ProjectWork.css';

const ProjectWork = ( {project} ) => {
  return (
    <div className="assessment-card">
      <div className="assessment-info">
        <p>{project.title}</p>
        <p>Skill: {project.skill}</p>
        <p>Duration:  {project.duration}</p>
        {project.downloadLink && (
            <>
              <a href={project.downloadLink} className="download-link">Download Report</a>
              <div className="download-description">{project.downloadDescription}</div>
            </>
          )}
      </div>
      <div className="assessment-video">
        <video style={{ width: "100%", height: "auto", maxWidth: "100%" }} controls>
          <source src={project.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ProjectWork;
