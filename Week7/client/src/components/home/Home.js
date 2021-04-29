import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div class="home-container">
      <div class="item">
        <h3>Two Generational Talents</h3>
        <h1>Sid Vs Ovi</h1>
        <p>They both came into the league the same year,</p>
        <p>and have both forever left their mark on the game!</p>
        <Link to="/Sid"><div className="btn btn-primary">Sid</div></Link>
        <Link to="/Ovi"><div className="btn btn-primary">Ovi</div></Link>
      </div>
    </div>
  );
};

export default Home;