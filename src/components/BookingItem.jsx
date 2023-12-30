import { useDispatch } from "react-redux";
import { acceptBooking, declineBooking } from "../reducers/bookingReducer";

const BookingItem = ({ item }) => {
  const dispatch = useDispatch();

  const confirm = () => {
    dispatch(acceptBooking(item.id, { ...item, status: "confirmed" }));
  };

  const decline = () => {
    dispatch(declineBooking(item.id, { ...item, status: "declined" }));
  };

  const itemStatus = () => {
    switch (item.status) {
      case "confirmed":
        return "Accepted";
      case "declined":
        return "Declined";
      case "waiting":
        return "Pending";
    }
  };

  const itemStatusStyle = () => {
    switch (itemStatus()) {
      case "Accepted":
        return "p-2 inline-flex rounded-lg font-bold h-8 text-center text-sm bg-green-500 text-white";
      case "Declined":
        return "p-2 inline-flex rounded-lg font-bold h-8 text-center text-sm bg-red-500 text-white";
      case "Pending":
        return "p-2 inline-flex rounded-lg font-bold h-8 text-center text-sm bg-gray-500 text-white";
    }
  };

  return (
    <div className="flex flex-col border-2 border-primary p-4">
      {/* <p className="self-end">hello</p> */}
      <div className="flex justify-between">
        <p>
          {item.firstName} {item.lastName}
        </p>
        <p className={itemStatusStyle()}>{itemStatus()}</p>
      </div>
      <p>{item.email}</p>
      <p>{item.phoneNumber}</p>
      <p>{new Date(item.appointmentTime).toUTCString()}</p>
      {/* prettier-ignore */}
      <div className="flex gap-4 mt-auto">
        {(itemStatus() === "Declined" || itemStatus() === "Pending") && (
            <button className="btn btn-sm btn-success" onClick={confirm}>
              Accept
            </button>)
        }
        {(itemStatus() === "Pending" || itemStatus() === "Accepted") && (
            <button
              className="btn btn-sm btn-outline btn-error"
              onClick={decline}
            >
              Decline
            </button>
          )
        }
      </div>
    </div>
  );
};

export default BookingItem;
