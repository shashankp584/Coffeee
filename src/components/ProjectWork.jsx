import React from 'react';
import { ProjectCard,ProjectInfo } from '../Styled';

const ProjectWork = ( {project} ) => {
  return (
    <ProjectCard>
      <ProjectInfo>
        <p>{project.title}</p>
        <p>Skill: {project.skill}</p>
        <p>Duration:  {project.duration}</p>
        {project.downloadLink && (
            <>
              <a href={project.downloadLink} className="download-link">Download Report</a>
              <div className="download-description">{project.downloadDescription}</div>
            </>
          )}
      </ProjectInfo>
      <div className="assessment-video">
        <video style={{ width: "100%", height: "auto", maxWidth: "100%" }} controls>
          <source src={project.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </ProjectCard>
  );
};

export default ProjectWork;
