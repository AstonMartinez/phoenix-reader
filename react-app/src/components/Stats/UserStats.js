import { useSelector } from "react-redux";
import "./UserStats.css";

const UserStats = () => {
  const userStats = useSelector((state) => state.stats);
  const determineStrongestMonth = (data) => {
    let strongestMonth;
    let currMax = -Infinity;
    for (let month in data) {
      if (data[month] > currMax) {
        currMax = data[month];
        strongestMonth = month;
      }
    }
    return strongestMonth;
  };
  return (
    <div id="user-stats-wrapper" style={{ backgroundColor: "white" }}>
      <div className="user-stat-box">
        <p className="stats-text-sm">You have read</p>
        <p className="stats-text-lg">{userStats["numBooks"]}</p>
        <p className="stats-text-sm">
          {userStats["numBooks"] > 1 ? "books" : "book"} in total.
        </p>
      </div>
      <div className="user-stat-box">
        <p className="stats-text-sm">You have read</p>
        <p className="stats-text-lg">{userStats["pages"]}</p>
        <p className="stats-text-sm">pages in total.</p>
      </div>
      <div className="user-stat-box">
        <p className="stats-text-sm">Your strongest month so far is</p>
        <p className="stats-text-lg">
          {determineStrongestMonth(userStats["byMonth"])}
        </p>
      </div>
    </div>
  );
};

export default UserStats;
