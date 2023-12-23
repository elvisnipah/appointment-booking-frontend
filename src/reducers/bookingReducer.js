import { createSlice } from "@reduxjs/toolkit";
import bookingService from "../services/bookings";

const bookingSlice = createSlice({
  name: "bookings",
  initialState: null,
  reducers: {
    setBooking(state, action) {
      return action.payload;
    },
  },
});

export const { setBooking } = bookingSlice.actions;

export const addBooking = (data) => {
  return async (dispatch) => {
    const result = await bookingService.create(data);
    dispatch(
      setBooking({
        ...result,
      })
    );
  };
};

export default bookingSlice.reducer;
