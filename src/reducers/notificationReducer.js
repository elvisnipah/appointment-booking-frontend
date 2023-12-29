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
    document.getElementById("my_modal_2").showModal();
    setTimeout(() => {
      dispatch(remove());
      document.getElementById("my_modal_2").close();
    }, 5000);
  };
};

export default notificationSlice.reducer;
