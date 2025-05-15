import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">Billettlyst</Link>
      <Link to="/category/musikk">Musikk</Link>
      <Link to="/category/sport">Sport</Link>
      <Link to="/category/teater">Teater/Show</Link>
      <Link to="/dashboard">Logg inn</Link>
    </nav>
  );
}

export default Nav;
