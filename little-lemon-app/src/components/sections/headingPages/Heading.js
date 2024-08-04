import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">Tucked away in the heart of Chicago, Little Lemon is a cozy restaurant that has been tantalizing taste buds with its Mediterranean-inspired cuisine for years. Our chefs have perfected the art of blending traditional flavors with modern twists, creating dishes that are both familiar and excitingly new.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/restauranfood.jpg')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}