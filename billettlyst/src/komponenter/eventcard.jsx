import { Link } from 'react-router-dom';
function EventCard({ event }) {
  return (
    
    <article className="event-card">
      {event.images?.[0]?.url && (
  <img
    src={event.images[0].url}
    alt={event.name}
    className="event-bilde"
  />
)}

      <Link to={`/event/${event.id}`}>
        <h2>{event.name}</h2>
        <p>{event.dates?.start?.localDate}</p>
        <p>{event._embedded?.venues?.[0]?.city?.name}, {event._embedded?.venues?.[0]?.country?.name}</p>
      </Link>

    </article>
  );
}

export default EventCard;
