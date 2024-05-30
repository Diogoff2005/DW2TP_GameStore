import React, { useState, useEffect } from "react";
import BackOfficeComp from "../components/backOfficeComp/BackOfficeComp";
import { supabase } from "../components/supabase";
import { useNavigate } from "react-router-dom";

const EditGame = () => {
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [bannerImageFile, setBannerImageFile] = useState(null);
  const [gameData, setGameData] = useState({});
  const navigate = useNavigate();
  const [id, setId] = useState(null);

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

  useEffect(() => {
    const url = window.location.href;
    const match = url.match(/\/editgame\/([0-9a-fA-F-]+)/);
    if (match) {
      setId(match[1]);
    } else {
      console.error("No game ID found in the URL");
    }

    const fetchGameData = async () => {
      if (id) {
        const { data, error } = await supabase
          .from("games")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          console.error("Error fetching data:", error);
        } else {
          setGameData(data);
        }
      }
    };
    fetchGameData();
  }, [id]);

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

    const coverImageFile = formData.get("coverImg");
    const bannerImageFile = formData.get("backgroundImg");

    if (coverImageFile && coverImageFile.size > 0) {
      const coverImageUrl = await handleImageUpload(coverImageFile, "cover");
      if (coverImageUrl) {
        data.coverImg = coverImageUrl;
      }
    }

    if (bannerImageFile && bannerImageFile.size > 0) {
      const bannerImageUrl = await handleImageUpload(bannerImageFile, "banner");
      if (bannerImageUrl) {
        data.backgroundImg = bannerImageUrl;
      }
    }

    const { error } = await supabase.from("games").update([data]).eq("id", id);

    if (error) {
      console.error("Error updating game:", error);
    } else {
      console.log("Game updated successfully!");
      navigate(`/backOffice`);
    }
  };

  return (
    <main>
      <BackOfficeComp
        submit={handleSubmit}
        onCoverImageChange={setCoverImageFile}
        onBannerImageChange={setBannerImageFile}
        initialGameData={gameData} // Pass initial game data to BackOfficeComp
      />
    </main>
  );
};

export default EditGame;
