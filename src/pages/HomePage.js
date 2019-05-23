import React from "react";
import { NavLink } from "react-router-dom";
import line from "../images/line.png";
import etorg from "../images/etorg.png";
import datavarehuset from "../images/datavarehuset.png";
import kommune from "../images/kommune.png";
import komtek from "../images/komtek.png";
import geodata from "../images/geodata.png";

const HomePage = () => {
  return (
    <>
      <div className="home-banner">
        <div className="text-banner">
          <p>
            Sammen <span>skaper</span> vi smartere samfunn
          </p>
        </div>
        <div className="wraper-icon">
          <div className="line">
            <div className="line1">
              <NavLink to="/">
                <img src={line} alt="line" />
              </NavLink>
            </div>
            <div className="line2">
              <NavLink to="/">
                <img src={line} alt="line" />
              </NavLink>
            </div>
            <div className="line3">
              <NavLink to="/">
                <img src={line} alt="line" />
              </NavLink>
            </div>
            <div className="line4">
              <NavLink to="/">
                <img src={line} alt="line" />
              </NavLink>
            </div>
            <div className="line5">
              <NavLink to="/">
                <img src={line} alt="line" />
              </NavLink>
            </div>
          </div>
          <div className="icon">
            <div className="etorg">
              <p>e-Torg</p>
              <img src={etorg} alt="etorg" />
            </div>
            <div className="datavarehuset">
              <p>Datavare- huset</p>
              <img src={datavarehuset} alt="datavarehuset" />
            </div>
            <div className="kommune">
              <p>Den digitale kommune</p>
              <img src={kommune} alt="kommune" />
            </div>
            <div className="komtek">
              <p>KOMTEK</p>
              <img src={komtek} alt="komtek" />
            </div>
            <div className="geodata">
              <p>Plan og geodata</p>
              <img src={geodata} alt="geodata" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
