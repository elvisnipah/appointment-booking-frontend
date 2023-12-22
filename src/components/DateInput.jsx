import ReactDatePicker from "react-datepicker";
import * as dateFns from "date-fns";
import Label from "./ui/Label";

import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ date, handleDateInputChange }) => {
  const dates = [
    "2023-12-11T16:00:00",
    "2023-11-10T12:00:00",
    "2023-12-15T14:00:00",
    "2023-12-13T12:00:00",
  ];

  const convertedDates = dates.map((date) => new Date(date));

  const filterUnavailableTimes = (time) => {
    for (let i = 0; i < convertedDates.length; i++) {
      const result = checkIfDateAvailable(time, convertedDates[i]);
      if (result === false) {
        return false;
      }
    }
    return true;
  };

  const checkIfDateAvailable = (calendarTime, unvailableTime) => {
    const selectedDate = new Date(calendarTime);
    const currentDate = new Date();
    if (selectedDate.getTime() < currentDate.getTime()) {
      return false;
    }
    return selectedDate.getTime() !== unvailableTime.getTime();
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
        className="input input-bordered input-primary w-full max-w-xs font-normal"
        dateFormat="MMMM d, yyyy h:mm aa"
        showTimeSelect
        selected={date}
        filterTime={filterUnavailableTimes}
        filterDate={isWeekday}
        minDate={new Date()}
        name="date"
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
