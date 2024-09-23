import styled from 'styled-components';
import { Modal,Button as AntdButton } from 'antd';
/* ------------------ Assessment Styles ------------------ */
export const AssessmentCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;

  p{
    font-family: Basis Grotesque Pro;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;

  }

`;

export const AssessmentInfo = styled.div`
  flex: 1;
`;

/* ------------------ Modal Styles ------------------ */

export const StyledButton = styled(AntdButton)`
  background-color: rgb(20,125,100,.75); 
  color: black; 
  border: none; 
  margin-top:10px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px; 
  transition: background-color 0.3s; 
  &:hover {
    background-color: #40a9ff; 
    color: rgba(100,100,100,1);
  }
  `;
export const ModalContainer = styled(Modal)`
  width: 100%;
  height: 100%;
  gap: 0px;
  border: 1px 1px 1px 1px;
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
  gap: 1rem;
  text-align: center;

  p {
    text-align: center;
    gap: 2rem;
  }

  h2 {
    margin: 1px 0;
  }
`;
export const LastSeen = styled.h4`
text-align: left;
padding: 7px;
border-radius: 8px 8px 8px 8px;
border: 1px;
background-color : #e4e8ec;
font-weight: 700;
margin: 0;
align-self: center;
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
  font-weight: 500;
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
display: flex;
flex-direction: column;
max-width: 400px;
margin: 0 auto;
`;

export const InfoItem = styled.div`
display: flex;
justify-content: space-between;
padding: 8px 0;
border-top: 1px solid rgba(200, 202, 204, 1)
`;

export const Label = styled.span`
font-weight: bold;
flex-basis: 50%;
text-align: left;
padding-right: 20px;
`;

export const Value = styled.span`
flex-basis: 50%;
text-align: right;
`;

/* ------------------ Project Styles ------------------ */
export const ProjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  
  p{
    font-family: Basis Grotesque Pro;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;

  }
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

  p{
    font-family: Basis Grotesque Pro;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;

  }
`;

export const InterviewInfo = styled.div`
  flex: 1;
`;

