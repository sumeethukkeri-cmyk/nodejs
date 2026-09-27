import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/matches">Matches</Link>
      <Link to="/booking">Book Ticket</Link>
      <Link to="/history">Booking History</Link>
    </nav>
  );
}

export default Navbar;