import { useEffect } from "react";
import { useSelector } from "react-redux";

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
    <div style={{ backgroundColor: "white" }}>
      <p>You have read {userStats["numBooks"]} books.</p>
      <p>You have read a total of {userStats["pages"]} pages.</p>
      <p>
        Your strongest month so far is{" "}
        {determineStrongestMonth(userStats["byMonth"])}.
      </p>
    </div>
  );
};

export default UserStats;
