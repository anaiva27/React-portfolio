import { Link } from "react-router-dom";
import '../styles/header.css';

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <Link to="/about" className="headerLink text-decoration-none" > <b> Anastasia Ivashchenko </b></Link>
      <button className="navbar-toggler me-5" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        
            <Link to="/about" className="headerLink" >About</Link>
         
            <Link to="/contact" className="headerLink">Contact</Link>
       
            <Link to="/portfolio" className="headerLink">Portfolio</Link>
        
        </ul>
      </div>
    </nav>
  );
}

export default Header;
