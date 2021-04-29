import React from "react";
import { Link } from "react-router-dom";
import "../header.css"

const SidHeader = () => {
  return (
  <div className="head-container">
    <div className="foo">
      <Link to="/" className="btn-2 btn-secondary">Go Back</Link>
      <Link to="/Form" className="btn-2 btn-secondary">Info</Link>
      <span className="letter" data-letter="S">S</span>
      <span className="letter" data-letter="I">I</span>
      <span className="letter" data-letter="D">D</span>
     </div>
  </div>
  );
};

export default SidHeader;