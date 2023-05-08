import React from "react";
import "../src/Components/navbar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import AboutUs from "./Components/aboutus";
import Ourthinking from "./Components/ourthinking";
import Ourapproach from "./Components/ourapproach";
import Jointhetribe from "./Components/jointhetribe";
import Letstalk from "./Components/letstalk";
import logo from "../src/assest/logo_main.png";
import search from "../src/assest/Search.png";
import country from "../src/assest/Australia.png";
import line from "../src/assest/Line.png";
import profilearrow from "../src/assest/Downarror.png";

function Navbar() {
  return (
    <Router>
      <header>
        <div className="logo">
          <img src={logo} alt="ustlogo" />
        </div>
        <div className="navbarcontainer">
          <ul>
            <NavLink to="/" className="navlink active">
              <li>About Us</li>
            </NavLink>
            <NavLink to="/ourthinking" className="navlink">
              <li>Our Thinking</li>
            </NavLink>
            <NavLink to="/ourapproach" className="navlink">
              <li>Our Approach</li>
            </NavLink>
            <NavLink to="/jointhetribe" className="navlink">
              <div className="jointhetribe">
                <li>Join The Tribe</li>
                <img src={line} alt="line" height="20px" />
              </div>
            </NavLink>
            <NavLink to="/letstalk" className="navlink">
              <li>Lets Talk</li>
            </NavLink>
          </ul>
        </div>
        <div className="profile ">
          <img src={search} alt="searchicon" height="20px" />
          <div className="countryandarrow">
            <img src={country} alt="countryicon" height="15px" />
            <p>AUS</p>
            <img src={profilearrow} alt="profilearrow" height="25px" />
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/ourthinking" element={<Ourthinking />} />
        <Route path="/ourapproach" element={<Ourapproach />} />
        <Route path="/jointhetribe" element={<Jointhetribe />} />
        <Route path="/letstalk" element={<Letstalk />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
