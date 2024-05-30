import React from "react";
import Map from "../details/Map";

function Footer() {
  return (
    <footer className="bottom-padding top-padding">
      <div className="row">
        <div className="col-md-4">
          <h5>About me</h5>
          <p>Fortnite</p>
        </div>

        <div className="col-md-4">
          <h5>Contact</h5>
          <p>
            <i className="fa-solid fa-home"></i> Breda, The Netherlands
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> email&#64;gmail.com
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            email&#64;avans.nl
          </p>
        </div>

        <div className="col-md-4">
          <h5>Follow me</h5>
        </div>

        <Map address="Wisentstraat 31, 4817LZ, Breda, The Netherlands" />
      </div>
    </footer>
  );
}

export default Footer;
