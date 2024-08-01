import Star from '../../../../assets/star.png';
export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <section>
                <img src={Star} alt="delivery Icon"></img><h3>{props.name}</h3>
            </section>
            <p>{props.description}</p>
        </article>
    );
}