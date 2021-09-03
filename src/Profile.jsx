import React from "react";
import Button from "./Button";
const Profile = ({ fullName, bio, imgSrc, profession }) => {
  return (
    <div className="profile">
      <div className="profilePicture">
        <img src={imgSrc} alt={fullName} />
        <h2>{fullName}</h2>
      </div>
      <hr />
      <div className="info">
        <h3>Profession : {profession}</h3>
        <h4>Bio : {bio}</h4>
      </div>
    </div>
  );
};
export default Profile;
