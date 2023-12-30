import { useEffect, useState } from "react";
import React from "react";
import LoginForm from "./LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../reducers/userReducer";

import { showAllBookings } from "../reducers/bookingReducer";
import BookingItem from "./BookingItem";

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

  const BookingsList = () => {
    return (
      <div className="my-4 self-start">
        <h1 className="font-bold text-2xl py-2">Appointments</h1>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
          {bookings &&
            bookings.map((item) => <BookingItem key={item.id} item={item} />)}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-green-500 font-bold">{user.username} logged in</p>
        <button className="btn btn-sm" onClick={handleLogout}>
          logout
        </button>
      </div>

      <BookingsList />
    </div>
  );
};

export default AdminPage;
