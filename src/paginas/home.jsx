import Banner from "../components/Banner/Banner";
import Trending from "../components/trending/Trending";
import bannerImage from "../components/Banner/banner.jpg";

const Home = () => {
  return (
    <>
      <main>
        <Banner
          path={bannerImage}
          name={"God of War"}
          price={"29.99€"}
        ></Banner>
        <Trending />
      </main>
    </>
  );
};

export default Home;
