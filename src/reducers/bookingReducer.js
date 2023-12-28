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
    confirmBooking(state, action) {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload.result : item
      );
    },
    cancelBooking(state, action) {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload.result : item
      );
    },
  },
});

export const { setBooking, getAllBookings, confirmBooking, cancelBooking } =
  bookingSlice.actions;

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

export const acceptBooking = (id, data) => {
  return async (dispatch) => {
    const result = await bookingService.update(id, data);
    dispatch(confirmBooking({ id, result }));
  };
};

export const declineBooking = (id, data) => {
  return async (dispatch) => {
    const result = await bookingService.update(id, data);
    dispatch(confirmBooking({ id, result }));
  };
};

export default bookingSlice.reducer;
