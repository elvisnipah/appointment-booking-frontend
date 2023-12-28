import { useDispatch } from "react-redux";
import { acceptBooking, declineBooking } from "../reducers/bookingReducer";
import { useState } from "react";

const BookingItem = ({ item }) => {
  const dispatch = useDispatch();

  const confirm = () => {
    dispatch(acceptBooking(item.id, { ...item, status: "confirmed" }));
  };

  const decline = () => {
    dispatch(declineBooking(item.id, { ...item, status: "declined" }));
  };

  return (
    <div className="flex flex-col border-2 border-primary p-4 ">
      {item.status === "confirmed" ? (
        <div>confirmed</div>
      ) : (
        <p>not confirmed</p>
      )}
      <p>
        Name: {item.firstName} {item.lastName}
      </p>
      <p>{item.email}</p>
      <p>{item.phoneNumber}</p>
      <p>Time: {new Date(item.appointmentTime).toUTCString()}</p>
      <div className="flex gap-4">
        <button className="btn btn-sm btn-success" onClick={confirm}>
          Confirm
        </button>
        <button className="btn btn-sm btn-outline btn-error" onClick={decline}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingItem;
