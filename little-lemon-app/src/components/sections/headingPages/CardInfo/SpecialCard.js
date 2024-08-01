import {Link} from 'react-router-dom';
export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <h1>{props.name}  <span>{props.price}</span></h1>
                <p>{props.description}</p>
                <Link className="special-button"to="/order">Order for Delivery</Link>
            </section>
        </article>
    );
}