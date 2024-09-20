import React from "react";
import {
  Profile,
  ProfileHeader,
  ProfileImage,
  ProfileInitials,
  ProfileInfo,
  ProfileButtons,
  ApproveButton,
  RejectButton,
  ResumeButton,
  ProfileDetails,
} from './Styled.jsx';
 
const ProfileComp = ({ profile }) => {
  const getInitials = (name) => {
    const initials = name.split(" ").map((n) => n[0]).join("");
    return initials.toUpperCase();
  };

  return (
    <Profile>
      <ProfileHeader>
        {profile.imageUrl ? (
          <ProfileImage src={profile.imageUrl} alt="Profile"/ >
        ) : (
          <ProfileInitials>
            {getInitials(profile.name)}
          </ProfileInitials>
        )}
      </ProfileHeader>
      <ProfileInfo>
        <h2>{profile.name}</h2>
        <ProfileButtons>
          <ApproveButton>Approve</ApproveButton>
          <RejectButton>Reject</RejectButton>
          <ResumeButton>View Resume</ResumeButton>
        </ProfileButtons>
        <ProfileDetails>
          <p>
            <strong>Contact No: </strong>
            {profile.contact}
          </p>
          <p>
            <strong>Email Address: </strong> {profile.email}
          </p>
          <p>
            <strong>Experience: </strong> {profile.exp}
          </p>
          <p>
            <strong>Salary: </strong> {profile.salary}
          </p>
          <p>
            <strong>Resume Score: </strong> {profile.score}%
          </p>
        </ProfileDetails>
      </ProfileInfo>
    </Profile>
  );
};

export default ProfileComp;
