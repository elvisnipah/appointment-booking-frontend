import { useSelector } from "react-redux";

const ConfirmationPage = () => {
  const appointment = useSelector(({ bookings }) => bookings);

  console.log(appointment[0]);

  if (!appointment[0]) {
    return <div>Nothing to see here</div>;
  }

  return (
    <div className="p-4">
      Your appointment is scheduled. Appointment ID is {appointment[0].id}
      <br />
      You can contact +2345345345345 to make enquiries.
    </div>
  );
};

export default ConfirmationPage;
