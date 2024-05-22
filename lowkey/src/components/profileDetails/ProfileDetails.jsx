import "./ProfileDetails.css";

const ProfileDetails = ({ PFP, username, email, creationDate, icon }) => {
  return (
    <>
      <section className=" grid-container wit">
        <div className="row ">
          <div className="col-1">
            <figure class="ProfilePFP circle ">
              <img className="ProfilePFP" src={PFP} alt="" />
            </figure>
          </div>
          <div className="ProfileData col-4">
            <p>
              <strong>Account Username: </strong>
              {username} .
            </p>
            <p>
              <strong>Email: </strong>
              {email} .
            </p>
            <p>
              <strong>Data de Criação: </strong>
              {creationDate} .
            </p>
          </div>
          <div className="ProfileIcon col-0-5" style={{ width: "15%" }}>
            <figure>
              <img className="editIcon" src={icon} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDetails;
