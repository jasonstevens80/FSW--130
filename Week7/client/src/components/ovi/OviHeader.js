import React from "react";
import { Link } from "react-router-dom";
import "../header.css"

const OviHeader = () => {
  return (
  <div className="head-container">
    <div className="foo">
      <Link to="/" className="btn-2 btn-secondary">Go Back</Link>
      <Link to="/Form" className="btn-2 btn-secondary">Info</Link>
      <span className="letter" data-letter="O">O</span>
      <span className="letter" data-letter="V">V</span>
      <span className="letter" data-letter="I">I</span>
  
    </div>
  </div>
  );
};

export default OviHeader;