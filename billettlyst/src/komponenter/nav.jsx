import { Link } from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
  return (
    <nav>
      <Link to="/" className="logo">BillettLyst</Link>
      <div className="meny">
        <Link to="/category/musikk">Musikk</Link>
        <Link to="/category/sport">Sport</Link>
        <Link to="/category/teater">Teater/Show</Link>
        <Link to="/dashboard">Logg inn</Link>
      </div>
    </nav>
  );
}

export default Nav;
