import React, { useEffect } from "react";

const Footer = ({ data }) => {
  if (data) {
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
    const handleScroll = () => {
      const goTopButton = document.getElementById("go-top-fixed");

      if (!goTopButton) return;

      // Check if at the top of the page
      const atTop = window.scrollY === 0;

      // Check if at the bottom of the page
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      // Hide the button if at the top or bottom
      if (atTop || atBottom) {
        goTopButton.style.display = "none";
      } else {
        goTopButton.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Run once when the component mounts to handle initial visibility
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer id="page-end">
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>
                Made by{" "}
                <a title="YOGESH" href="/">
                  YOGESH
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* Extra Back to Top button at the right bottom corner */}
      <div id="go-top-fixed">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
