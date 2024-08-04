import HeroImage from "../../assets/restaurant.jpg";
import { Link } from "react-router-dom";
export default function Confirmation() {
  const formDataJSON = localStorage.getItem("formData")
  const formData = JSON.parse(formDataJSON); // Parse the JSON string into an object

  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h1>Hi {formData?.fName} Your Reservation is Confirmed on {formData?.date} at {formData?.time}! </h1>
        <h4>Message has been sent to email and phone. Show the confirmation message when you visit.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>

      <section className="redirect-buttons">
        <a
          className="redirect-button"
          href={require("../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Browse Menu
        </a>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
