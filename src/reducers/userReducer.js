import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/users";
import bookingService from "../services/bookings";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    getUserFromLocalStorage(state, action) {
      const { tokenInJSON, res } = action.payload;
      if (res.usable) {
        const returnedUser = JSON.parse(tokenInJSON);
        bookingService.setToken(returnedUser.token);
        return returnedUser;
      } else {
        signOutUser();
        return null;
      }
    },
    assignUser(state, action) {
      const user = action.payload;
      bookingService.setToken(user.token);
      return user;
    },
    signOutUser(state, action) {
      bookingService.setToken(null);
      window.localStorage.removeItem("loggedInUser");
      return null;
    },
  },
});

export const { getUserFromLocalStorage, assignUser, signOutUser } =
  userSlice.actions;

export const getUser = () => {
  return async (dispatch) => {
    const tokenInJSON = window.localStorage.getItem("loggedInUser");
    if (tokenInJSON) {
      const res = await userService.checkLogin(JSON.parse(tokenInJSON).token);
      dispatch(getUserFromLocalStorage({ tokenInJSON, res }));
    }
  };
};

export const setUser = (user) => {
  return (dispatch) => {
    dispatch(assignUser(user));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(signOutUser());
  };
};

export default userSlice.reducer;
