import React from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  const {
    name = "",
    occupation = "",
    description = "",
    // address: { city = "" } = {},
    social = [],
  } = data || {};

  const firstName = name.split(" ")[0];

  const networks = social.map((network) => (
    <li key={network.name}>
      <a href={network.url} target="_blank" rel="noopener noreferrer">
        <i className={network.className}></i>
      </a>
    </li>
  ));

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          {/* <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li> */}
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter className="headType" typing={0.5}>
              {name ? `Hi, I'm ${firstName}` : null}
            </TypeWriter>
          </h1>
          <h3>
            {/* Based in {city}.  */}
            <span>{occupation}</span>
            <br />
            <p style={{ color: "#16d3d9" }}>{description}</p>
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
