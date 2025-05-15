import EventCard from '../komponenter/eventcard';
import { useEffect, useState } from 'react';
import { fetchEventByKeyword } from '../api/ticketmaster';
import '../styles/home.css';

function Home() {
  const [events, setEvents] = useState([]);

  const [byEvents, setByEvents] = useState([]);

  const [valgtBy, setValgtBy] = useState(null); 

  // To festivaler vil ikke komme opp på nettsiden, på grunn av error fra ticketmaster jeg har skrevet mer om det på rapporten
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

  
  async function hentByEvents(byNavn) {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?city=${byNavn}&size=10&apikey=dW9FyNOAXIgM1BsAEXhrWIBJwVg34bin`
      );
      const data = await response.json();

      setByEvents(data._embedded?.events || []);
      setValgtBy(byNavn); 
      console.log("Hentet events for", byNavn, ":", data._embedded?.events);
    } catch (error) {
      console.log("Kan ikke hente for by", byNavn, error);
    }
  }

  useEffect(() => {

    hentFestivaler(); 
  }, []);

 
  return (
    <main>
      <h1>Festivaler</h1>

      <section className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>

      <section className="byknapper">
        <button onClick={() => hentByEvents('Oslo')}>Oslo</button>
        <button onClick={() => hentByEvents('Paris')}>Paris</button>
        <button onClick={() => hentByEvents('London')}>London</button>
        <button onClick={() => hentByEvents('Berlin')}>Berlin</button>
      </section>

      {valgtBy && (
        <>
          <h2>I {valgtBy} kan du se:</h2>

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
        </>
      )}
    </main>
  );
}

export default Home;
