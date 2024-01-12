const GET_USER_BADGES = "badges/getUser";
const UPDATE_USER_BADGES = "badges/updateUser";

const getUser = (data) => ({
  type: GET_USER_BADGES,
  payload: data,
});

const updateUser = (data) => ({
  type: UPDATE_USER_BADGES,
  payload: data,
});

export const fetchUserBadges = () => async (dispatch) => {
  try {
    const response = await fetch("/api/badges/user");

    if (response.ok) {
      const data = await response.json();
      dispatch(getUser(data));
      return data;
    } else {
      const errors = await response.json();
      return errors;
    }
  } catch (error) {
    const errors =
      error && error.json ? await error.json() : { message: error.toString() };
    return errors;
  }
};

export const updateUserBadges = (updatedBadges) => async (dispatch) => {
  try {
    const response = await fetch("/api/badges/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBadges),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(updateUser(data));
      return data;
    } else {
      const errors = response.json();
      return errors;
    }
  } catch (error) {
    const errors =
      error && error.json ? await error.json() : { message: error.toString() };
    return errors;
  }
};

const initialState = [];

export default function badgeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_BADGES:
    case UPDATE_USER_BADGES:
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
}
