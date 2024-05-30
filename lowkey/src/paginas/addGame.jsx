import React, { useState, useEffect } from "react";
import BackOfficeComp from "../components/backOfficeComp/BackOfficeComp";
import { supabase } from "../components/supabase";
import { useNavigate } from "react-router-dom";

const AddGame = () => {
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [bannerImageFile, setBannerImageFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;
      if (user && user.user_metadata.admin) {
      } else {
        navigate("/");
      }
    };
    getUser();
  }, [navigate]);

  const handleImageUpload = async (file, type) => {
    const uniqueName = `${type}-${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("Imgs")
      .upload(uniqueName, file);

    if (error) {
      console.error(`Error uploading ${type}:`, error);
      return null;
    }

    return data.path;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const data = {
      name: formData.get("name"),
      developer: formData.get("developer"),
      publisher: formData.get("publisher"),
      price: formData.get("price"),
      genre: formData.get("genre"),
      releaseDate: formData.get("releaseDate"),
      minimum: formData.get("minSpecs"),
      recommended: formData.get("recSpecs"),
      aboutGame: formData.get("about"),
    };
    const coverImageUrl = await handleImageUpload(
      formData.get("coverImg"),
      "cover"
    );
    if (coverImageUrl) {
      data.coverImg = coverImageUrl;
    }

    const bannerImageUrl = await handleImageUpload(
      formData.get("backgroundImg"),
      "banner"
    );
    if (bannerImageUrl) {
      data.backgroundImg = bannerImageUrl;
    }

    console.log(data);

    const { error } = await supabase.from("games").insert([data]);

    if (error) {
      console.error("Error adding game:", error);
    } else {
      console.log("Game added successfully!");
      navigate(`/backOffice`);
    }
  };

  return (
    <main>
      <BackOfficeComp
        submit={handleSubmit}
        onCoverImageChange={setCoverImageFile}
        onBannerImageChange={setBannerImageFile}
      />
    </main>
  );
};

export default AddGame;
