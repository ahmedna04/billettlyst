import EventCard from '../komponenter/eventcard';
import { useEffect, useState } from 'react';
import { fetchEventByKeyword } from '../api/ticketmaster';
import '../styles/home.css';

function Home() {

  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function hentFestivaler() {
      const festivalNavn = ['Findings', 'Neon', 'Skeikampenfestivalen', 'Tons of Rock'];
      const alleFestivaler = [];
  
      for (const navn of festivalNavn) {
      const resultater = await fetchEventByKeyword(navn);
      console.log("Søker etter:", navn, "Fant:", resultater.length, "resultater"); 
      if (resultater.length > 0) {
      alleFestivaler.push(resultater[0]);
      }
      }
  
      setEvents(alleFestivaler);
    }
  
    hentFestivaler();
    console.log("Eventer:", events);

  }, []);
  return (

    <main>
      <h1>Festivaler</h1>
      <section className="event-list">
      {events.map((event) => (
  <EventCard key={event.id} event={event} />
))}

      </section>
    </main>
  );
}
export default Home;

