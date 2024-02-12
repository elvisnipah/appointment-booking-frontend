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

  const isAppointmentPast = new Date(item.appointmentTime) < new Date();

  let itemStatus = "";

  switch (item.status) {
    case "confirmed":
      itemStatus = "Accepted";
      break;
    case "declined":
      itemStatus = "Declined";
      break;
    case "waiting":
      switch (isAppointmentPast) {
        case true:
          itemStatus = "No Action";
          break;
        case false:
          itemStatus = "Pending";
          break;
      }
      break;
  }

  let itemStatusStyle = "";

  switch (itemStatus) {
    case "Accepted":
      itemStatusStyle = "text-green-600";
      break;
    case "Declined":
      itemStatusStyle = "text-red-600";
      break;
    case "Pending":
      itemStatusStyle = "text-sky-600";
      break;
    case "No Action":
      itemStatusStyle = "text-gray-500";
      break;
  }

  return (
    <div className="flex flex-col border-2 border-primary p-4">
      {/* <p className="self-end">hello</p> */}
      <div className="flex justify-between items-center gap-3">
        <p className="font-bold">
          {item.firstName} {item.lastName}
        </p>
        <p className={`font-bold text-sm ${itemStatusStyle}`}>{itemStatus}</p>
      </div>
      <p>{item.email}</p>
      <p>{item.phoneNumber}</p>
      <p>{new Date(item.appointmentTime).toDateString()}</p>
      <p>{new Date(item.appointmentTime).toLocaleTimeString()}</p>
      {/* prettier-ignore */}

      {!isAppointmentPast && (
        <div className="flex gap-4 mt-auto">
          {(itemStatus === "Declined" || itemStatus === "Pending") && (
            <button className="btn btn-sm btn-success" onClick={confirm}>
              Accept
            </button>
          )}
          {(itemStatus === "Pending" || itemStatus === "Accepted") && (
            <button
              className="btn btn-sm btn-outline btn-error"
              onClick={decline}
            >
              Decline
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingItem;
