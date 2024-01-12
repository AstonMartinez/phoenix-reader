import "./UserProfile.css";
import { LuPencil } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import EditInfo from "./EditInfo";
import InfoDisplay from "./InfoDisplay";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../store/session";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  return (
    <div id="up-wrapper">
      <h1 id="dash-header">Your Profile</h1>
      <div className="user-profile-main">
        <div className="up-button-holder">
          {isEditing && (
            <IoClose
              id="up-close-bttn"
              height={18}
              width={18}
              onClick={() => setIsEditing(false)}
            />
          )}
          {!isEditing && (
            <LuPencil
              id="up-edit-bttn"
              height={18}
              width={18}
              onClick={() => setIsEditing(true)}
            />
          )}
        </div>
        <div>
          {isEditing && (
            <EditInfo
              userInfo={currentUser}
              onFinish={() => {
                setIsEditing(false);
                dispatch(authenticate());
              }}
            />
          )}
          {!isEditing && <InfoDisplay userInfo={currentUser} />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
