import styled from 'styled-components';

/* ------------------ Assessment Styles ------------------ */
export const AssessmentCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;

`;

export const AssessmentInfo = styled.div`
  flex: 1;
`;

/* ------------------ Modal Styles ------------------ */
export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  border: 1px solid rgba(239, 239, 240, 1);
`;

/* ------------------ Heading Styles ------------------ */
export const Heading = styled.h1`
  font-family: 'Basis Grotesque Pro', sans-serif;
  width: 320px;
  height: 21px;
  top: 705px;
  left: 215px;
  gap: 0px;
  opacity: 0px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  color: rgba(255, 44, 145, 1);
`;

export const HeadingDescription = styled.p`
  font-family: 'Basis Grotesque Pro', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(147, 149, 153, 1);
`;

/* ------------------ Profile Styles ------------------ */
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileHeader = styled.div`
  width: 200px;
  height: 200px;
  gap: 0px;
  border: 4px 0px 0px 0px;
  opacity: 0px;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInitials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0e0e0;
  color: #333;
  font-size: 32px;
  font-weight: bold;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  p {
    text-align: center;
    gap: 2rem;
  }

  h2 {
    margin: 1px 0;
  }
`;

export const ProfileButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  height: 40px;
  width: 80px;
  display: flex;
  flex-direction: row;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 550;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const ApproveButton = styled(Button)`
  background-color: rgba(27, 73, 234, 1);
  color: white;
  align-items: center;
  justify-content: center;
`;

export const RejectButton = styled(Button)`
  background-color: #f44336;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const ResumeButton = styled(Button)`
  border: 1px solid rgba(27, 73, 234, 1);
  background-color: rgba(255, 255, 255, 1);
  color: rgba(27, 73, 234, 1);
  align-items: center;
  justify-content: center;
`;

export const ProfileDetails = styled.div`
  text-align: left;

  p {
    margin: 5px 0;
  }

  strong {
    color: #555;
  }
`;

/* ------------------ Project Styles ------------------ */
export const ProjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const ProjectInfo = styled.div`
  flex: 1;
`;

/* ------------------ Interview Styles ------------------ */
export const InterviewCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const InterviewInfo = styled.div`
  flex: 1;
`;

