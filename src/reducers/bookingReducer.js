import { createSlice } from "@reduxjs/toolkit";
import bookingService from "../services/bookings";

const bookingSlice = createSlice({
  name: "bookings",
  initialState: [],
  reducers: {
    setBooking(state, action) {
      return state.concat(action.payload);
    },
    getAllBookings(state, action) {
      return action.payload;
    },
  },
});

export const { setBooking, getAllBookings } = bookingSlice.actions;

export const addBooking = (data) => {
  return async (dispatch) => {
    const result = await bookingService.create(data);
    dispatch(setBooking(result));
  };
};

export const showAllBookings = () => {
  return async (dispatch) => {
    const result = await bookingService.getAll();
    dispatch(getAllBookings(result));
  };
};

export default bookingSlice.reducer;
