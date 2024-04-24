import "./Banner.css";

const Banner = ({ path, name, price }) => {
  return (
    <figure className="bannerFigure">
      <img className="banner" src={path} alt="Banner" />
      <div>
        <div>
          <h2>
            {name} <br></br>
            <span className="bannerPrice">{price}</span>
          </h2>
        </div>
      </div>
    </figure>
  );
};

export default Banner;
