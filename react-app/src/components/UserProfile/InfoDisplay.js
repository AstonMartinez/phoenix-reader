const InfoDisplay = ({ userInfo }) => {
  return (
    <div id="info-display-wrapper">
      <section>
        <p>First Name: {userInfo.firstName ? userInfo.firstName : ""}</p>
      </section>
      <section>
        <p>Last Name: {userInfo.lastName ? userInfo.lastName : ""}</p>
      </section>
      <section>
        <p>Username: {userInfo.username ? userInfo.username : ""}</p>
      </section>
      <section>
        <p>Email: {userInfo.email ? userInfo.email : ""}</p>
      </section>
    </div>
  );
};

export default InfoDisplay;
