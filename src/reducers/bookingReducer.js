import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "bookings",
  initialState: {},
  reducers: {
    setBooking(state, action) {
      return action.payload;
    },
  },
});

export const { setBooking } = bookingSlice.actions;

export const addBooking = (data) => {
  return (dispatch) => {
    dispatch(setBooking({ ...data, date: data.date.toString() }));
  };
};

export default bookingSlice.reducer;
