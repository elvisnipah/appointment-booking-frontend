import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    append(state, action) {
      return action.payload;
    },
    remove(state, action) {
      return "";
    },
  },
});

export const { append, remove } = notificationSlice.actions;

export const setNotification = (message) => {
  return (dispatch) => {
    dispatch(append(message));
    setTimeout(() => {
      dispatch(remove());
    }, 5000);
  };
};

export default notificationSlice.reducer;
