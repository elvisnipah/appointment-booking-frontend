import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../reducers/userReducer";
import { showAllBookings } from "../reducers/bookingReducer";

import BookingList from "./ui/BookingList";
import LoginForm from "./LoginForm";

const AdminPage = () => {
  const dispatch = useDispatch();

  const user = useSelector(({ user }) => user);
  const bookings = useSelector(({ bookings }) => bookings);

  useEffect(() => {
    if (user) {
      dispatch(showAllBookings());
    }
  }, [user]);

  if (!user) {
    return (
      <div className="p-4">
        <LoginForm />
      </div>
    );
  }

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="p-4 flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-green-500 font-bold">{user.username} logged in</p>
        <button className="btn btn-sm" onClick={handleLogout}>
          logout
        </button>
      </div>

      <BookingList bookings={bookings} />
    </div>
  );
};

export default AdminPage;
