import React, { useState } from "react";
import Label from "./ui/Label";
import DateInput from "./DateInput";
import CustomInput from "./ui/CustomInput";

const AppointmentForm = () => {
  const initialState = {
    date: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
      date: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(appointment);
    setAppointment(initialState);
  };

  return (
    <form
      className="flex flex-col gap-3 border-2 border-gray-300 rounded-lg p-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold">Book An Appointment</h1>
      <p className="font-bold text-center text-sm text-purple-600">
        Kindly note that all appointments will have to be confirmed
      </p>

      <DateInput
        date={appointment.date}
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
          name="phone"
          value={appointment.phone}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Select an appointment type:
        <select
          name="type"
          onChange={handleInputChange}
          value={appointment.type}
          className="p-1"
        >
          <option value="consultation">Consultation</option>
          <option value="fitting">Fitting</option>
        </select>
      </Label>
      <Label>
        Leave a comment:
        <textarea
          className="p-1"
          name="comment"
          cols="30"
          rows="10"
          value={appointment.comment}
          onChange={handleInputChange}
        ></textarea>
      </Label>

      <button
        type="submit"
        className="bg-sky-400 border-2 rounded-lg w-[180px] self-center text-white p-2 font-bold"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
