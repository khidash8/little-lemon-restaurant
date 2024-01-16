import { render, fireEvent, test } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("BookingForm", () => {
  render(<BookingForm />);
  render(<BookingForm availableTimes={[]} />);
});
