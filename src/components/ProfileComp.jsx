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
  LastSeen,
  InfoItem,
  Label,
  Value
} from "./Styled.jsx";

const ProfileComp = ({ profile }) => {
  const getInitials = (name) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    return initials.toUpperCase();
  };

  return (
    <Profile>
      <ProfileHeader>
        {profile.imageUrl ? (
          <ProfileImage src={profile.imageUrl} alt="Profile" />
        ) : (
          <ProfileInitials>{getInitials(profile.name)}</ProfileInitials>
        )}
      </ProfileHeader>
      <ProfileInfo>
        <LastSeen>Previously Seen on {profile.lastSeen}</LastSeen>
        <h2>{profile.name}</h2>
        <ProfileButtons>
          <ApproveButton>Approve</ApproveButton>
          <RejectButton>Reject</RejectButton>
          <ResumeButton>View Resume</ResumeButton>
        </ProfileButtons>
        <ProfileDetails>
          <InfoItem>
            <Label>Contact No:</Label>
            <Value>+91-xxxxxxx</Value>
            </InfoItem>
          <InfoItem>
            <Label>Email Address:</Label>
            <Value>xxxxx@xxxxx.com</Value>
            </InfoItem>
          <InfoItem>
            <Label>Experience:</Label>
            <Value>3 yrs 5 mos</Value>
            </InfoItem>
          <InfoItem>
            <Label>Salary:</Label>
            <Value>$24/hr</Value>
            </InfoItem>
          
          <InfoItem>
            <Label>Resume Score:</Label>
            <Value>92%</Value>
            </InfoItem>
        </ProfileDetails>
      </ProfileInfo>
    </Profile>
  );
};

export default ProfileComp;
