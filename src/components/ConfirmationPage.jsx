import { useSelector } from "react-redux";

const ConfirmationPage = () => {
  const appointment = useSelector(({ bookings }) => bookings);

  console.log(appointment);

  if (!appointment) {
    return <div>Nothing to see here</div>;
  }

  return (
    <div>
      Your appointment is scheduled. Appointment ID is ${appointment.id}
    </div>
  );
};

export default ConfirmationPage;
