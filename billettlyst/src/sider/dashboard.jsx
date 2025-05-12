import { useState } from 'react';
import EventCard from '../komponenter/eventcard';

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dummyEvents = [

    {

      id: '1',
      name: 'Dummy Festival 1',
      dates: { start: { localDate: '2025-07-01' } },
      _embedded: { venues: [{ city: { name: 'Oslo' }, country: { name: 'Norge' } }] },
    },

    {
      id: '2',
      name: 'Dummy Festival 2',
      dates: { start: { localDate: '2025-08-12' } },
      _embedded: { venues: [{ city: { name: 'Bergen' }, country: { name: 'Norge' } }] },
    },

  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    console.log(test)
  };

  return (
    <main>
      {!isLoggedIn ? (

        <form onSubmit={handleLogin}>

          <h2>Logg inn</h2>
          <input type="text" placeholder="Brukernavn" required/>
          <input type="password" placeholder="Passord" required/>
          <button type="submit">Logg inn</button>

        </form>
      ) :(

        <section>
          <h3>Min side</h3>
          {dummyEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}

        </section>
      )}
    </main>
  );
}
export default Dashboard;
