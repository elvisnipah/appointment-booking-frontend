import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./reducers/bookingReducer";
import notificationReducer from "./reducers/notificationReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    bookings: bookingReducer,
    notification: notificationReducer,
    user: userReducer,
  },
});

export default store;
