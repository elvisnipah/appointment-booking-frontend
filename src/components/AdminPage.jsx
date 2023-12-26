import { useEffect, useState } from "react";
import React from "react";
import LoginForm from "./LoginForm";
import { useSelector, useDispatch } from "react-redux";
import bookingService from "../services/bookings";

import { showAllBookings } from "../reducers/bookingReducer";

const AdminPage = () => {
  const user = useSelector(({ user }) => user);
  const bookings = useSelector(({ bookings }) => bookings);
  const dispatch = useDispatch();

  // const [bookings, setBookings] = useState([]);

  useEffect(() => {
    dispatch(showAllBookings());
  }, []);

  // console.log(bookings);

  if (!user) {
    return (
      <div className="p-4">
        <LoginForm />
      </div>
    );
  }

  const Booking = ({ item }) => {
    console.log(item.firstName);
    return (
      <div className="flex flex-col border-2 border-primary p-4">
        <p>
          Name: {item.firstName} {item.lastName}
        </p>
        <p>{item.email}</p>
        <p>{item.phoneNumber}</p>
        <p>Time: {new Date(item.appointmentTime).toUTCString()}</p>
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="text-green-500 font-bold">{user.username} logged in</div>
      <div className="my-4">
        <h1 className="font-bold text-2xl">Appointments</h1>
        {bookings &&
          bookings.map((item) => <Booking key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default AdminPage;
