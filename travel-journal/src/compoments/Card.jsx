export default function Card(props) {
  return (
    <div className="card__item">
      <img
        src={props.imageUrl}
        alt={props.title}
        className={
          props.title === "Paris"
            ? "card__img right"
            : props.title === "Portsmouth"
            ? "card__img left"
            : "card__img"
        }
      />
      <div className="card__content">
        <p className="card__location">
          <span className="card__location-country">
            <span class="material-symbols-rounded">location_on</span>
            {props.location}
          </span>
          <a href={props.googleMapsUrl} className="card__location-link">
            View on Google Maps
          </a>
        </p>

        <h3 className="card__title">{props.title}</h3>
        <p className="card__date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
}
