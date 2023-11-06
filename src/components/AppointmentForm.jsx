import React, { useState } from "react";
import Label from "./ui/Label";
import DateInput from "./DateInput";
import CustomInput from "./ui/CustomInput";

const AppointmentForm = () => {
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [appointmentType, setAppointmentType] = useState("consultation");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      date: date,
      firstName: firstName,
      lastName: lastName,
      email,
      phone,
      comment,
      appointmentType,
    });
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

      <DateInput date={date} setDate={setDate} />

      <Label>
        First Name:
        <CustomInput
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </Label>
      <Label>
        Last Name:
        <CustomInput
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </Label>
      <Label>
        Email:
        <CustomInput
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Label>
      <Label>
        Phone number:
        <CustomInput
          type="tel"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </Label>
      <Label>
        Select an appointment type:
        <select
          name="type"
          onChange={(event) => setAppointmentType(event.target.value)}
          value={appointmentType}
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
          value={comment}
          onChange={(event) => setComment(event.target.value)}
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
