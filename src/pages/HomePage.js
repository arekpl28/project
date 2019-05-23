import React from "react";
import { NavLink } from "react-router-dom";
import line from "../images/line.png";
import etorg from "../images/etorg.png";
import datavarehuset from "../images/datavarehuset.png";
import kommune from "../images/kommune.png";
import komtek from "../images/komtek.png";
import geodata from "../images/geodata.png";

let lineList = [];
for (let i = 0; i < 5; i++) {
  const element = { name: "line" + [i + 1] };
  lineList.push(element);
}
const iconsList = [
  {
    name: "e-Torg",
    class: "etorg",
    path: "/",
    import: etorg
  },
  {
    name: "Datavare- huset",
    class: "datavarehuset",
    path: "/",
    import: datavarehuset
  },
  {
    name: "Den digitale kommune",
    class: "kommune",
    path: "/",
    import: kommune
  },
  {
    name: "KOMTEK",
    class: "komtek",
    path: "/",
    import: komtek
  },
  {
    name: "Plan og geodata",
    class: "geodata",
    path: "/",
    import: geodata
  }
];
const HomePage = () => {
  const lineItem = lineList.map(item => (
    <div className={item.name} key={item.name}>
      <img src={line} alt={item.name} />
    </div>
  ));

  const icon = iconsList.map(item => (
    <div className={item.class} key={item.name}>
      <p>{item.name}</p>
      <NavLink to={item.path}>
        <img src={item.import} alt={item.name} />
      </NavLink>
    </div>
  ));

  console.log(lineItem);
  return (
    <>
      <div className="home-banner">
        <div className="text-banner">
          <p>
            Sammen <span>skaper</span> vi smartere samfunn
          </p>
        </div>
        <div className="wraper-icon">
          <div className="line">{lineItem}</div>
          <div className="icon">
            <ul>{icon}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
