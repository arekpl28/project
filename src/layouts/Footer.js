import React from "react";

import logowhite from "../images/logowhite.png";

const Footer = () => {
  return (
    <>
      <div className="logo">
        <div className="image">
          <img src={logowhite} alt="" />
        </div>
        <div className="policy">
          <p>&copy; 2019 Norkart AS. All Rights Reserved. Privacy Policy.</p>
        </div>
        <div className="media">
          <i class="fab fa-twitter" />
          <i class="fab fa-facebook-f" />
          <i class="fab fa-instagram" />
          <i class="fab fa-youtube" />
          <i class="fab fa-linkedin" />
        </div>
      </div>
      <div className="contact">
        <h1>Kontakt</h1>
        <div className="info">
          <div className="tel">
            <i class="fas fa-phone" />
            <p className="day">
              Norkart kundestøtte: 67 48 38 88 <p>(08:30 – 15:30)</p>
            </p>
          </div>
          <div className="email">
            <i class="far fa-envelope" />
            <p className="mail">info@norkart.no</p>
          </div>
          <div className="page">
            <p className="teamviver">TeamViewer</p>
            <p className="kontor">Se våre kontorer</p>
          </div>
        </div>
      </div>
      <div className="last">
        <div className="org">
          <i class="fas fa-phone" />
          <p>
            iNorkart resepsjon: 67 55 14 00 <p>(08:00-16:00)</p>
          </p>
        </div>
        <p>Organisasjonsnummer: NO 934 161 181</p>
      </div>
    </>
  );
};

export default Footer;
