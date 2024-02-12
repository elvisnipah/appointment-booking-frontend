import React, { useState } from "react";
import BookingItem from "../BookingItem";

const BookingList = ({ bookings }) => {
  const [selected, setSelected] = useState("all");

  const showAll = () => {
    setSelected("all");
  };

  const showConfirmed = () => {
    setSelected("confirmed");
  };

  const showDeclined = () => {
    setSelected("declined");
  };

  const showPending = () => {
    setSelected("waiting");
  };

  const confirmedTodos = bookings.filter((item) => item.status === "confirmed");

  const declinedTodos = bookings.filter((item) => item.status === "declined");

  const pendingTodos = bookings.filter((item) => item.status === "waiting");

  let view;

  switch (selected) {
    case "all":
      view = bookings;
      break;
    case "confirmed":
      view = confirmedTodos;
      break;
    case "declined":
      view = declinedTodos;
      break;
    case "waiting":
      view = pendingTodos;
      break;
    default:
      view = bookings;
  }

  return (
    <div className="my-4 self-center flex flex-col">
      <h1 className="font-bold text-2xl py-2">Appointments</h1>
      <div className="self-center">
        <ul className="flex gap-4 font-bold text-gray-400 py-4">
          <li
            className={`${
              selected === "all" && "text-gray-800"
            } cursor-pointer`}
            onClick={showAll}
          >
            All
          </li>
          <li
            className={`${
              selected === "confirmed" && "text-gray-800"
            } cursor-pointer`}
            onClick={showConfirmed}
          >
            Accepted
          </li>
          <li
            className={`${
              selected === "declined" && "text-gray-800"
            } cursor-pointer`}
            onClick={showDeclined}
          >
            Declined
          </li>
          <li
            className={`${
              selected === "waiting" && "text-gray-800"
            } cursor-pointer`}
            onClick={showPending}
          >
            Pending
          </li>
        </ul>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {view.map((item) => (
          <BookingItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BookingList;
