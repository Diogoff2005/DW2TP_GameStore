import "./Banner.css";
import banner from "./banner.jpg";

const Banner = () => {
  return (
    <figure className="bannerFigure">
      <img className="banner" src={banner} alt="Banner" />
      <div>
        <div>
          <h2>
            God of war <br></br>
            <span className="bannerPrice">29.99€</span>
          </h2>
        </div>
      </div>
    </figure>
  );
};

export default Banner;
