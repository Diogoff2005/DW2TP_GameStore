import React, { useEffect, useState } from "react";
import "./ProfileDetails.css";
import { supabase } from "../supabase";

const ProfileDetails = ({ PFP, username, email, creationDate, icon }) => {
  const [profilePic, setProfilePic] = useState(PFP);

  useEffect(() => {
    const fetchUserProfilePic = async () => {
      const { data, error } = await supabase.auth.getUser();
      const user = data?.user;

      if (error) {
        console.error("Error fetching user:", error);
      } else if (user && user.user_metadata && user.user_metadata.profilePic) {
        console.log("User metadata:", user.user_metadata);
        const { data, error } = supabase.storage
          .from("Imgs")
          .getPublicUrl(user.user_metadata.profilePic);
        if (error) {
          console.error("Error fetching public URL:", error);
        } else {
          setProfilePic(data.publicUrl);
          console.log("Profile picture URL:", data);
        }
      } else {
        console.log("User metadata does not contain profilePic");
      }
    };

    fetchUserProfilePic();
  }, []);

  const handleProfilePicChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      const user = userData?.user;

      if (userError) {
        console.error("Error fetching user:", userError);
        return;
      }

      // Delete the existing profile picture if it exists
      if (user && user.user_metadata && user.user_metadata.profilePic) {
        const { error: deleteError } = await supabase.storage
          .from("Imgs")
          .remove([user.user_metadata.profilePic]);

        if (deleteError) {
          console.error("Error deleting file:", deleteError);
          return;
        }
      }

      // Upload the new profile picture
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error: uploadError } = await supabase.storage
        .from("Imgs")
        .upload(fileName, file);

      if (uploadError) {
        console.error("Error uploading file:", uploadError);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);

      // Update user metadata with the new profile picture
      if (user) {
        const { error: updateError } = await supabase.auth.updateUser({
          data: { profilePic: fileName },
        });

        if (updateError) {
          console.error("Error updating user metadata:", updateError);
        } else {
          console.log("Profile picture changed successfully");
        }
      }
    }
  };

  return (
    <>
      <section className="grid-container wit">
        <div className="row">
          <div className="col-1">
            <figure className="ProfilePFP circle">
              <img
                className="ProfilePFP"
                src={profilePic || "default-profile-pic-url"}
                alt="Profile"
              />
              <input
                type="file"
                className="file-input"
                onChange={handleProfilePicChange}
                id="profilePicInput"
                accept="image/*"
              />
              <label htmlFor="profilePicInput" className="hover-label">
                Change Picture
              </label>
            </figure>
          </div>
          <div className="ProfileData col-4">
            <p>
              <strong>Account Username: </strong>
              {username}
            </p>
            <p>
              <strong>Email: </strong>
              {email}
            </p>
            <p>
              <strong>Creation Date: </strong>
              {creationDate}
            </p>
          </div>
          <div className="ProfileIcon col-0-5" style={{ width: "15%" }}>
            <figure>
              <img className="editIcon" src={icon} alt="Edit Icon" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDetails;
