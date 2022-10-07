import React from 'react';
import logo from '../logo.png';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='temp'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
  <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo...' ></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faLeaf} style={{ color: "rgb(97, 208, 18)" }} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Gallery</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Care</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar