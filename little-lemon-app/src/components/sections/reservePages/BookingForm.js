import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { submitAPI } from "../../../bookingsAPI";

export default function BookingFrom(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState("");
  const [finalTime, setFinalTime] = useState(
    props?.availableTimes?.map((times) => <option>{times}</option>)
  );

  const navigate = useNavigate();
  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props?.availableTimes?.map((times) => <option>{times}</option>));
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = {
      fName,
      lName,
      email,
      tel,
      people,
      date,
      time: document.getElementById("time").value,
      occasion,
      preferences,
      comments,
    };

    if (!fName || !date || !finalTime.length || !preferences || !email || !tel) {
      setError("Please fill out all required fields marked with* !!");
      return;
    } else if (new Date(date) < new Date()) {
      setError("Please select current / future date !!");
    } else {
      const response = await submitAPI(formData);
      if (response) {
        localStorage.setItem("formData", JSON.stringify(formData))//JSON string to avoid [object Object]
        navigate("/confirmation")
      }
    }
  }

  return (
    <form className="reservation-form" role="form" aria-label="Booking Form">
      <div className="form-grid">
        <div>
          <label htmlFor="fName">First Name*</label> <br></br>
          <input
            className="field-style"
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

        <div>
          <label htmlFor="lName">Last Name</label> <br></br>
          <input
            className="field-style"
            type="text"
            id="lName"
            placeholder="Last Name"
            minLength={2}
            maxLength={50}
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email*</label> <br></br>
          <input
            className="field-style"
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

        <div>
          <label htmlFor="phonenum">Phone Number*</label> <br></br>
          <input
            type="tel"
            className="field-style"
            id="phonenum"
            placeholder="(xxx)-xxx-xxxx"
            value={tel}
            required
            minLength={10}
            maxLength={25}
            onChange={(e) => setTel(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="people">Number of People</label> <br></br>
          <input
            className="field-style"
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

        <div>
          <label htmlFor="date" id="date-label">Select Date*</label> <br></br>
          <input
            className="field-style"
            type="date"
            id="date"
            required
            value={date}
            onChange={handleDateChange}
            aria-labelledby="date-label"
            aria-required="true"
          ></input>
        </div>
      </div>
      <div className="dropdown-form">
        <div>
          <label htmlFor="time">Select Time*</label> <br></br>
          <select className="field-style" id="time" required>
            {finalTime}
          </select>
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label> <br></br>
          <select
            className="field-style"
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

        <div>
          <label htmlFor="preferences">Seating preferences*</label> <br></br>
          <select
            className="field-style"
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
      </div>
      <div>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          className="field-style"
          id="comments"
          rows={6}
          cols={45}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
      <div>
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <div className="error-message">{error}</div>
        <Link onClick={(e) => submitForm(e)} className="action-button" to="/confirmation"
          role="button" aria-label="Book Table">
          Book Table
        </Link>

      </div>
    </form>
  );
}
