import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBadges } from "../../store/badges";
import achievements from "../utils/achievements";

const Tooltip = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: "white",
        zIndex: 12000,
      }}
    >
      {showTooltip && <div className="tooltip">{content}</div>}
      {!showTooltip && <div className="tooltip-hidden">{content}</div>}
      {children}
    </div>
  );
};

const UserBadges = () => {
  const dispatch = useDispatch();
  const userBadges = useSelector((state) => state.badges);

  useEffect(() => {
    dispatch(fetchUserBadges());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div id="user-badges-holder">
        {userBadges.length > 0 ? (
          userBadges.map((badge) => (
            <Tooltip content={achievements[badge].description}>
              <img
                src={achievements[badge].url}
                alt={achievements[badge].description}
                style={{
                  height: achievements[badge].height,
                  width: achievements[badge].width,
                }}
              />
            </Tooltip>
          ))
        ) : (
          <p>You don't have any badges yet! Add some books to earn them.</p>
        )}
      </div>
    </div>
  );
};

export default UserBadges;
