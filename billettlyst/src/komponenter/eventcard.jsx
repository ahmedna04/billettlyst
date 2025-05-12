import { Link } from 'react-router-dom';
function EventCard({ event }) {
  return (
    <article className="event-card">

      <Link to={`/event/${event.id}`}>
        <h2>{event.name}</h2>
        <p>{event.dates?.start?.localDate}</p>
        <p>{event._embedded?.venues?.[0]?.city?.name}, {event._embedded?.venues?.[0]?.country?.name}</p>
      </Link>

    </article>
  );
}

export default EventCard;
