import React from "react";
import "./styles/Profile.css"; 
const Profile = ({ profile }) => {
  const getInitials = (name) => {
    const initials = name.split(" ").map((n) => n[0]).join("");
    return initials.toUpperCase();
  };

  return (
    <div className="profile">
      <div className="profile-header">
        {profile.imageUrl ? (
          <img src={profile.imageUrl} alt="Profile" className="profile-image" />
        ) : (
          <div className="profile-initials">
            {getInitials(profile.name)}
          </div>
        )}
      </div>
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <div className="profile-buttons">
          <button className="approve-btn">Approve</button>
          <button className="reject-btn">Reject</button>
          <button className="resume-btn">View Resume</button>
        </div>
        <div className="profile-details">
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
