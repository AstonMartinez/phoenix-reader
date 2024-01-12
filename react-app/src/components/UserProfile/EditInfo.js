import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../store/session";

const EditInfo = ({ userInfo, onFinish }) => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    firstName: userInfo.firstName ? userInfo.firstName : "",
    lastName: userInfo.lastName ? userInfo.lastName : "",
    username: userInfo.username,
    email: userInfo.email,
  });

  const handleInputChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const reset = () => {
    setInputs({
      firstName: userInfo.firstName ? userInfo.firstName : "",
      lastName: userInfo.lastName ? userInfo.lastName : "",
      username: userInfo.username,
      email: userInfo.email,
    });
  };

  const handleSubmit = async () => {
    await dispatch(
      updateUserInfo({
        first_name: inputs.firstName || "",
        last_name: inputs.lastName || "",
        username: inputs.username,
        email: inputs.email,
      })
    );

    reset();
    onFinish();
  };

  return (
    <div id="ei-wrapper">
      <section className="ei-grid-row">
        <div className="ei-grid-cell label-cell">
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="ei-grid-cell">
          <input
            type="text"
            name="firstName"
            id="first-name"
            className="ei-input"
            value={inputs.firstName}
            onChange={handleInputChange}
          />
        </div>
      </section>
      <section className="ei-grid-row">
        <div className="ei-grid-cell label-cell">
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="ei-grid-cell">
          <input
            type="text"
            name="lastName"
            id="last-name"
            className="ei-input"
            value={inputs.lastName}
            onChange={handleInputChange}
          />
        </div>
      </section>
      <section className="ei-grid-row">
        <div className="ei-grid-cell label-cell">
          <label htmlFor="username">Username</label>
        </div>
        <div className="ei-grid-cell">
          <input
            type="text"
            name="username"
            id="username"
            className="ei-input"
            value={inputs.username}
            onChange={handleInputChange}
          />
        </div>
      </section>
      <section className="ei-grid-row">
        <div className="ei-grid-cell label-cell">
          <label htmlFor="email">Email</label>
        </div>
        <div className="ei-grid-cell">
          <input
            type="text"
            name="email"
            id="email"
            className="ei-input"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </div>
      </section>
      <section id="ei-submit-bttn-holder">
        <button id="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </section>
    </div>
  );
};

export default EditInfo;
