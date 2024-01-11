import { useDispatch } from "react-redux";
import { authenticate } from "../../store/session";
import achievements from "../utils/achievements";

const checkConsecutiveMonths = (months) => {
  let monthsInYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = 0; i < monthsInYear.length - 2; i++) {
    let month1 = monthsInYear[i];
    let month2 = monthsInYear[i + 1];
    let month3 = monthsInYear[i + 2];

    if (
      months[month1.toString()] >= 1 &&
      months[month2.toString()] >= 1 &&
      months[month3.toString()] >= 1
    ) {
      return true;
    }
  }
  return false;
};

const getMissingBadges = (stats, badges) => {
  let numBooks = stats["numBooks"];
  let numPages = stats["pages"];
  let byMonth = stats["byMonth"];

  let validBadges = [];

  if (numBooks >= 1) {
    validBadges.push("Beginner Bookie");
  }

  if (
    byMonth["January"] > 1 ||
    byMonth["February"] > 1 ||
    byMonth["March"] > 1 ||
    byMonth["April"] > 1 ||
    byMonth["May"] > 1 ||
    byMonth["June"] > 1 ||
    byMonth["July"] > 1 ||
    byMonth["August"] > 1 ||
    byMonth["September"] > 1 ||
    byMonth["October"] > 1 ||
    byMonth["November"] > 1 ||
    byMonth["December"] > 1
  ) {
    validBadges.push("Apprentice Bookkeeper");
  }

  if (numPages > 500) {
    validBadges.push("Pagemaster in Training");
  }

  if (checkConsecutiveMonths(stats["byMonth"])) {
    validBadges.push("Certified Book Fiend");
  }

  if (numPages > 1000) {
    validBadges.push("Grand Pagemaster");
  }

  if (byMonth["January"] >= 1) {
    validBadges.push("January 2024");
  }

  if (byMonth["February"] >= 1) {
    validBadges.push("February 2024");
  }

  if (byMonth["March"] >= 1) {
    validBadges.push("March 2024");
  }

  if (byMonth["April"] >= 1) {
    validBadges.push("April 2024");
  }

  if (byMonth["May"] >= 1) {
    validBadges.push("May 2024");
  }

  if (byMonth["June"] >= 1) {
    validBadges.push("June 2024");
  }

  if (byMonth["July"] >= 1) {
    validBadges.push("July 2024");
  }

  if (byMonth["August"] >= 1) {
    validBadges.push("August 2024");
  }

  if (byMonth["September"] >= 1) {
    validBadges.push("September 2024");
  }

  if (byMonth["October"] >= 1) {
    validBadges.push("October 2024");
  }

  if (byMonth["November"] >= 1) {
    validBadges.push("November 2024");
  }

  if (byMonth["December"] >= 1) {
    validBadges.push("December 2024");
  }

  const allMissing = [];
  for (let i = 0; i < validBadges.length; i++) {
    let currBadge = validBadges[i];
    let filtered = badges.filter((badge) => badge.title === currBadge);
    if (!filtered.length) {
      allMissing.push(currBadge);
    }
  }

  console.log(allMissing);
  return allMissing;
};

const BadgeChecker = ({ userBadges, userStats }) => {
  const dispatch = useDispatch();
  const updateMissing = async (current, missing) => {
    let userBadgesCopy = [...current];
    for (let i = 0; i < missing.length; i++) {
      userBadgesCopy.push(missing[i]);
    }
    const response = await fetch("/api/badges/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ toAdd: userBadgesCopy }),
    });

    if (response.ok) {
      dispatch(authenticate());
    }
  };
  // check user's reading stats
  let missingBadges = getMissingBadges(userStats, userBadges);

  if (missingBadges.length) {
    updateMissing(userBadges, missingBadges);
  }

  //   const handleButtonClick = async () => {
  //     await fetch("/api/badges/update", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ toAdd: missingBadges }),
  //     });
  //   };
  // for each stat, check whether the user SHOULD have a certain badge
  // if they SHOULD have a badge, but DON'T have it:
  //   1. initialize copy of user's current badges
  //   2. push the new badge(s) into it
  //   3. dispatch action to update user's badges in backend
  return <div></div>;
};

export default BadgeChecker;
