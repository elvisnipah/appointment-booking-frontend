import ReactDatePicker from "react-datepicker";
import * as dateFns from "date-fns";
import Label from "./ui/Label";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ date, handleDateInputChange }) => {
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const isWeekday = (date) => {
    const day = new Date(date).getUTCDay();
    return day !== 0 && day !== 6;
  };

  const handleChange = (value) => {
    const isoDate = new Date(value).toISOString();
    if (isoDate.split("T")[1] === "00:00:00.000Z") {
      return handleDateInputChange(
        dateFns.setHours(dateFns.setMinutes(value, 0), 12)
      );
    }

    handleDateInputChange(value);
  };

  return (
    <Label>
      Select a date and time:
      <ReactDatePicker
        className="w-[100%] p-1"
        dateFormat="MMMM d, yyyy h:mm aa"
        showTimeSelect
        selected={date}
        filterTime={filterPassedTime}
        filterDate={isWeekday}
        minDate={new Date()}
        timeIntervals={60}
        placeholderText="Select a weekday"
        onChange={(date) => handleChange(date)}
        includeTimes={[
          dateFns.setHours(dateFns.setMinutes(new Date(), 0), 12),
          dateFns.setHours(dateFns.setMinutes(new Date(), 0), 13),
          dateFns.setHours(dateFns.setMinutes(new Date(), 0), 14),
          dateFns.setHours(dateFns.setMinutes(new Date(), 0), 15),
          dateFns.setHours(dateFns.setMinutes(new Date(), 0), 16),
        ]}
      />
    </Label>
  );
};

export default DateInput;
