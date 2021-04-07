import { React } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export function NavBarComponent() {
  return (
    <Router>
      <ul className="nav">
        <Link className="a" to="/home">
          <li className="Item">
            <h1>Pokedex</h1>
          </li>
        </Link>

        <Link className="a">
          <li className="Item">Home</li>
        </Link>

        <Link className="a">
          <li className="Item">Detalles</li>
        </Link>
      </ul>
    </Router>
  );
}
