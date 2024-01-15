import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Footers.css";

const LoggedInFooter = () => {
  return (
    <div className="footer-style-1">
      <div className="footer-1-inner">
        <div id="footer-1-left" className="one-third-footer">
          <div id="left-inner">
            <ul>
              <li>
                <NavLink className="footer-link" exact to="/about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-link" exact to="/request">
                  Request a Feature
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-link" exact to="/bugs">
                  Report a Bug
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div id="footer-1-mid" className="one-third-footer">
          <img
            src="https://i.ibb.co/g7S0xLw/readinglogo-Photo-Room.png"
            alt="readinglogo"
            border="0"
            id="footer-logo"
          />
        </div>
        <div id="footer-1-right" className="one-third-footer">
          <div id="right-inner">
            <button id="support-bttn">
              <a
                id="support-link"
                href="https://www.buymeacoffee.com/astonmartinez"
              >
                Support
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInFooter;
