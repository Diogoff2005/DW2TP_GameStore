import "./Banner.css";

const Banner = ({ path }) => {
  return (
    <figure className="bannerFigure">
      <img className="banner" src={path} alt="Banner" />
      <div>
        <div>
          <h2 className="Bannerh2">
            God of war <br></br>
            <span className="bannerPrice">29.99€</span>
          </h2>
        </div>
      </div>
    </figure>
  );
};

export default Banner;
