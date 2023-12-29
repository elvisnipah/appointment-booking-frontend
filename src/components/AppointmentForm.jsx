import React, { useEffect, useState } from "react";
import Label from "./ui/Label";
import DateInput from "./DateInput";
import CustomInput from "./ui/CustomInput";
import { useDispatch } from "react-redux";
import { addBooking } from "../reducers/bookingReducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNotification } from "../reducers/notificationReducer";

const AppointmentForm = () => {
  const appointments = useSelector(({ bookings }) => bookings);
  // useEffect(() => {}, [appointments]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const initialState = {
    appointmentTime: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    comment: "",
    type: "consultation",
  };

  const [appointment, setAppointment] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  const handleDateInputChange = (value) => {
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      appointmentTime: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addBooking(appointment))
      .then(() => {
        setAppointment(initialState);
        navigate("/confirm");
        console.log("worked");
      })
      .catch((err) => {
        dispatch(setNotification(err.response.data.error));
        console.log(err.response.data.error);
      });
  };

  return (
    <div className="page p-4 max-w-[500px] md:max-w-[800px] self-center">
      <form
        className="flex flex-col md:grid md:grid-cols-2 gap-3 border-4 border-primary rounded-md p-4"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="md:col-span-2 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-secondary ">
            Book An Appointment
          </h1>
          <p className="font-bold text-xs text-info">
            * Kindly note that all appointments will have to be confirmed
          </p>
        </div>

        <DateInput
          date={appointment.appointmentTime}
          handleDateInputChange={handleDateInputChange}
        />

        <Label>
          First Name:
          <CustomInput
            type="text"
            name="firstName"
            value={appointment.firstName}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Last Name:
          <CustomInput
            type="text"
            name="lastName"
            value={appointment.lastName}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Email:
          <CustomInput
            type="email"
            name="email"
            value={appointment.email}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Phone number:
          <CustomInput
            type="tel"
            name="phoneNumber"
            value={appointment.phoneNumber}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Select an appointment type:
          <select
            name="type"
            onChange={handleInputChange}
            value={appointment.type}
            className="select select-primary w-full max-w-xs"
          >
            <option value="consultation">Consultation</option>
            <option value="fitting">Fitting</option>
          </select>
        </Label>
        <Label colspan>
          Leave a comment:
          <textarea
            className="textarea textarea-primary max-h-[200px] font-normal"
            name="comment"
            cols="30"
            rows="10"
            value={appointment.comment}
            onChange={handleInputChange}
          />
        </Label>

        <button type="submit" className="btn btn-secondary md:col-span-2">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
