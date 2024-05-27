import React, { useEffect, useState } from "react";
import "./ProfileDetails.css";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

const ProfileDetails = ({ PFP, username, email, creationDate, icon }) => {
  const [profilePic, setProfilePic] = useState(PFP);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

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

  const handleProfileIconClick = () => {
    setShowPopup(true);
  };

  const handleConfirmDeletion = async () => {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    const user = userData?.user;

    if (user && user.user_metadata && user.user_metadata.profilePic) {
      const { error: deleteError } = await supabase.storage
        .from("Imgs")
        .remove([user.user_metadata.profilePic]);

      if (deleteError) {
        console.error("Error deleting file:", deleteError);
        return;
      }

      const { error: updateError } = await supabase.auth.updateUser({
        data: { profilePic: null },
      });

      if (updateError) {
        console.error("Error updating user metadata:", updateError);
      } else {
        setProfilePic(null);
        setShowPopup(false);
        console.log("Profile picture deleted successfully");
      }
    }

    const { data, error } = await supabase.auth.admin.deleteUser(user.id);
    if (error) {
      console.error(error);
    } else {
      console.log(data);
      navigate("/login");
    }
  };

  const handleCancelDeletion = () => {
    setShowPopup(false);
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
          <div
            className="ProfileIcon col-0-5"
            style={{ width: "15%" }}
            onClick={handleProfileIconClick}
          >
            <figure>
              <img className="editIcon" src={icon} alt="Edit Icon" />
            </figure>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete your account?</p>
            <button className="button" onClick={handleConfirmDeletion}>
              Yes
            </button>
            <button className="button" onClick={handleCancelDeletion}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDetails;
