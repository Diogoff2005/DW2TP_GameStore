import NavBar from "../components/navBar/NavBar";
import Banner from "../components/Banner/Banner";
import bannerImage from "../components/Banner/banner.jpg";
import Footer from "../components/footer/Footer";

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
      </main>

      <Footer />
    </>
  );
};

export default Home;
