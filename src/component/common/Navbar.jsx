import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for custom styles

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>Student Management System</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/Homepage">Home</Link>
            <Link className="nav-link" to="/View-student">View Student</Link>
            <Link className="nav-link" to="/Add-student">Add New Student</Link>
            <Link className="nav-link" to="/Edit-student">Edit Student</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;