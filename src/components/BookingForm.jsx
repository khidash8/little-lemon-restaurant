import { useState } from "react";
import ReserveButton from "./Utils/ReserveButton";
import PropTypes from "prop-types";

const BookingForm = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => (
      <option key={crypto.randomUUID()}>{times}</option>
    )),
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    let stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(
      props.availableTimes.map((times) => (
        <option key={crypto.randomUUID()}>{times}</option>
      )),
    );
  }

  return (
    <form className="flex flex-col items-center space-y-5 p-5 text-left lg:p-20">
      <div className="container mx-auto space-y-4 rounded-md border-2 p-2 shadow-lg">
        <div className="mb-5 flex space-x-6 p-4 shadow">
          <label htmlFor="fName">First Name</label> <br></br>
          <input
            type="text"
            id="fName"
            placeholder="First Name"
            required
            minLength={2}
            maxLength={50}
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          ></input>
        </div>

        <div className="mb-5 flex space-x-6 p-2 shadow">
          <label htmlFor="lName">Last Name</label> <br></br>
          <input
            type="text"
            id="lName"
            placeholder="Last Name"
            minLength={2}
            maxLength={50}
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          ></input>
        </div>

        <div className="mb-5 flex space-x-6 p-2 shadow">
          <label htmlFor="email">Email</label> <br></br>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            required
            minLength={4}
            maxLength={200}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="mb-5 flex space-x-6 p-2 shadow">
          <label htmlFor="phonenum">Phone Number</label> <br></br>
          <input
            type="tel"
            id="phonenum"
            placeholder="(xxx)-xxx-xxxx"
            value={tel}
            required
            minLength={10}
            maxLength={25}
            onChange={(e) => setTel(e.target.value)}
          ></input>
        </div>

        <div className="mb-5 flex space-x-6 p-2 shadow">
          <label htmlFor="people">Number of People</label> <br></br>
          <input
            type="number"
            id="people"
            placeholder="Number of People"
            value={people}
            required
            min={1}
            max={100}
            onChange={(e) => setPeople(e.target.value)}
          ></input>
        </div>

        <div className="mb-5 flex space-x-6 p-2 shadow">
          <label htmlFor="date">Select Date</label> <br></br>
          <input
            type="date"
            id="date"
            required
            value={date}
            onChange={handleDateChange}
          ></input>
        </div>

        <div className="mb-5 flex space-x-6 p-2 shadow">
          <label htmlFor="time">Select Time</label> <br></br>
          <select id="time" required>
            {finalTime}
          </select>
        </div>

        <div className="mb-5 flex space-x-6 p-2 shadow">
          <label htmlFor="occasion">Occasion</label> <br></br>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-5 flex space-x-6 p-2 shadow">
          <label htmlFor="preferences">Seating preferences</label> <br></br>
          <select
            id="preferences"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          >
            <option>None</option>
            <option>Indoors</option>
            <option>Outdoor (Patio)</option>
            <option>Outdoor (Sidewalk)</option>
          </select>
        </div>
        {/* <div className="space-y-4 p-2 shadow">
          <label htmlFor="comments">Additional Comments</label> <br></br>
          <textarea
            id="comments"
            rows={8}
            placeholder="Additional Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div> */}
      </div>

      <div className="space-y-4 text-xl text-gray-600">
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>

        {/* confirmation button */}
        <ReserveButton prop={"Reserve a Table"} link={"/confirmation"} />
      </div>
    </form>
  );
};

export default BookingForm;

// ? validfation
BookingForm.propTypes = {
  updateTimes: PropTypes.func,
  availableTimes: PropTypes.array,
};
