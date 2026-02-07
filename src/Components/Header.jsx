import React, { useState, useEffect } from "react";

const Header = ({ data }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  useEffect(() => {
    if (name && !isTyping && !hasCompleted) {
      setIsTyping(true);
      setDisplayText("");
      setCurrentIndex(0);
      setHasCompleted(false);
    }
  }, [name, isTyping, hasCompleted]);

  useEffect(() => {
    if (isTyping && currentIndex < name.length) {
      const timer = setTimeout(() => {
        setDisplayText(name.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100); // Adjust speed here (100ms between each character)

      return () => clearTimeout(timer);
    } else if (isTyping && currentIndex >= name.length) {
      setIsTyping(false);
      setHasCompleted(true);
    }
  }, [isTyping, currentIndex, name]);

  return (
    <>
      <style>
        {`
          .cursor {
            animation: blink 1s infinite;
            color: inherit;
            font-weight: inherit;
          }
          
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
      <header id="home">
        {/*<video autoPlay muted loop id="myVideo">*/}
        {/*  <source src="../../public/images/waves.mp4" type="video/mp4">*/}
        {/*</video>*/}
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
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
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
              {displayText}
              {isTyping && <span className="cursor">|</span>}
            </h1>
            <h3>
              Based in {city}. <span>{occupation}</span>. {description}.
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
    </>
  );
};

export default Header;
