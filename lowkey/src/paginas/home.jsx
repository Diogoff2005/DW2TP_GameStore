import NavBar from "../components/navBar/NavBar";
import Banner from "../components/Banner/Banner";
import Trending from "../components/trending/Trending";
import bannerImage from "../components/Banner/banner.jpg";

const Home = () => {
  return (
    <>
      <main
        style={{
          margin: "0px",
          padding: "0px",
        }}
      >
        <Banner path={bannerImage}></Banner>
        <Trending />
      </main>
    </>
  );
};

export default Home;
