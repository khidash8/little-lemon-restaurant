import { useReducer } from "react";
import { fetchAPI } from "../sections/BookinApi";
import BookingForm from "../BookingForm";

const Reservations = () => {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <div>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </div>
  );
};

export default Reservations;
