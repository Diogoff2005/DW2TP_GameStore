import "./ProfileDetails.css";

const ProfileDetails = ({ PFP, username, email, creationDate, icon }) => {
  return (
    <>
      <section className="profileDetails grid-container">
        <div className="row">
          <div className="col-1-5">
            <figure class="ProfilePFP circle ">
              <img class="ProfilePFP" src={PFP} alt="" />
            </figure>
          </div>
          <div className="ProfileData col-3">
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
          <div className="ProfileIcon col-0-5">
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
