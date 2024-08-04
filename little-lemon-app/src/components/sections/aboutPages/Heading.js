import HeroImage from "../../../assets/restaurant.jpg";
export default function Heading() {
  return (
    <>
      <header className="reserve-table">
        <img
          className="header-reserve"
          src={HeroImage}
          alt="Little Lemon Ingredients"
        ></img>
        <div className="reserve-header-text">
          <h1>About us</h1>
        </div>
      </header>
      <main className="about-us-page">
        <h1> Welcome to Little Lemon, Chicago's Hidden Gem!</h1>
        Tucked away in the heart of Chicago, Little Lemon is a cozy restaurant that has been tantalizing taste buds with its Mediterranean-inspired cuisine for years. Our chefs have perfected the art of blending traditional flavors with modern twists, creating dishes that are both familiar and excitingly new.
        <p>
          Indulge in Our Signature Specials

          At Little Lemon, we're proud to offer a selection of mouth-watering specials that showcase our culinary expertise. This week, be sure to try:
          <ul>
            <li className="about-us-page-menu">Greek Salad: A refreshing symphony of juicy tomatoes, crisp lettuce, creamy feta cheese, and savory olives, all harmoniously dressed with a hint of salt, hot pepper, and rich olive oil. ($12.99)</li>
            <li className="about-us-page-menu">Bruschetta: Toasted to perfection, our Bruschetta is topped with a delightful medley of diced tomatoes, prosciutto, and melted cheese, finished with a sprinkle of salt and a drizzle of olive oil. ($16.99)</li>
            <li className="about-us-page-menu">Lemon Dessert: Our crowning jewel! Freshly baked lemon bread, smothered in a sweet and tangy coating of salt and sugar, then powdered with a burst of citrus and lemon zest. A must-try for anyone with a sweet tooth! ($8.50)</li>
          </ul>
        </p>
        Visit Us Today!

        Swing by Little Lemon and experience the warm, inviting atmosphere that has made us a beloved fixture in the Chicago dining scene. Our friendly staff can't wait to welcome you and share the flavors that have captured the hearts (and taste buds) of our loyal customers. Come taste the difference for yourself!
      </main>
    </>
  );
}
