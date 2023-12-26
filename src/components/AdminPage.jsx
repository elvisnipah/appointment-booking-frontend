import { useEffect, useState } from "react";
import React from "react";
import LoginForm from "./LoginForm";
import { useSelector, useDispatch } from "react-redux";
import bookingService from "../services/bookings";

import { showAllBookings } from "../reducers/bookingReducer";

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

  const Booking = ({ item }) => {
    return (
      <div className="flex flex-col border-2 border-primary p-4 ">
        <p>
          Name: {item.firstName} {item.lastName}
        </p>
        <p>{item.email}</p>
        <p>{item.phoneNumber}</p>
        <p>Time: {new Date(item.appointmentTime).toUTCString()}</p>
      </div>
    );
  };

  const BookingsList = () => {
    return (
      <div className="my-4 self-start">
        <h1 className="font-bold text-2xl py-2">Appointments</h1>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
          {bookings &&
            bookings.map((item) => <Booking key={item.id} item={item} />)}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 flex flex-col">
      <div className="text-green-500 font-bold">{user.username} logged in</div>
      <BookingsList />
    </div>
  );
};

export default AdminPage;
