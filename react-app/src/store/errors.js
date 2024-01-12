const UPDATE_USER_ERROR = "errors/updateUser";

const updateUser = (data) => ({
  type: UPDATE_USER_ERROR,
  payload: data,
});

export const updateUserError = () => async (dispatch) => {
  dispatch(
    updateUser(
      "An error occured while updating your information. Please try again."
    )
  );
};

const initialState = {};

export default function errorsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_ERROR:
      return { updateUser: action.payload };
    default:
      return state;
  }
}
