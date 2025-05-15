import EventCard from '../komponenter/eventcard';
import { useEffect, useState } from 'react';
import { fetchEventByKeyword } from '../api/ticketmaster';
import '../styles/home.css';

function Home() {
  const [events, setEvents] = useState([]);
  const [byEvents, setByEvents] = useState([]);

  
  async function hentByEvents() {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?city=Oslo&size=10&apikey=dW9FyNOAXIgM1BsAEXhrWIBJwVg34bin`
      );
      const data = await response.json();
      setByEvents(data._embedded?.events || []);
      console.log("Oslo-events:", data._embedded?.events);
    } catch (error) {
      console.log("Kan ikke hente", error);
    }
  }

  
  async function hentFestivaler() {
    const festivalNavn = ['Findings', 'Neon', 'Skeikampenfestivalen', 'Tons of Rock'];
    const alleFestivaler = [];

    for (const navn of festivalNavn) {
      const resultater = await fetchEventByKeyword(navn);
      console.log("Søker", navn, "Fant:", resultater.length, "resultater");
      if (resultater.length > 0) {
        alleFestivaler.push(resultater[0]);
      }
    }

    setEvents(alleFestivaler);
  }

  useEffect(() => {
    hentFestivaler();
    hentByEvents();
  }, []);

  return (
    <main>
      <h1>Festivaler</h1>
      <section className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>

      <h2>Oslo</h2>

      <section className="oslo-event-list">

        {byEvents.map((event) => (
          <article key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.dates?.start?.localDate}</p>
            <p>
              {event._embedded?.venues?.[0]?.city?.name},{" "}
              {event._embedded?.venues?.[0]?.country?.name}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Home;
