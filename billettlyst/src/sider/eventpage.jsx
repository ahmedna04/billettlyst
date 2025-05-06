import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const API_KEY = 'dW9FyNOAXIgM1BsAEXhrWIBJwVg34bin'; 

function EventPage() {

  const {id} = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function hentEvent() {
      try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${API_KEY}`);
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error("Feil ved henting av event:", error);
      }
    }

    hentEvent();
  }, [id]);

  if (!event) return <p>Laster</p>;

  return (
    <main>
      <h1>{event.name}</h1>
      <p>{event.dates?.start?.localDate}</p>
      <p>{event._embedded?.venues?.[0]?.city?.name}, {event._embedded?.venues?.[0]?.country?.name}</p>
      <a href={event.url} target="_blank" rel="noopener noreferrer">Kjøp billetter</a>
    </main>
  );
}

export default EventPage;
