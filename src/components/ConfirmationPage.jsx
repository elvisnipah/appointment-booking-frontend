import { useSelector } from "react-redux";

const ConfirmationPage = () => {
  const appointment = useSelector(({ bookings }) => bookings);

  if (!appointment) {
    return <div>Nothing to see here</div>;
  }

  return (
    <div>
      Your appointment is scheduled. Appointment ID is {appointment.id}
      <br />
      You can contact +2345345345345 to make enquiries.
    </div>
  );
};

export default ConfirmationPage;
