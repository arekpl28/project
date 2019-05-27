import React, { Component } from "react";
import Support from "./contact/Support";
import Komtek from "./contact/Komtek";

import TommyHaugen from "../../images/TommyHaugen.jpg";
import KennethOyen from "../../images/KennethOyen.jpg";
import AndreasHammerstedt from "../../images/AndreasHammerstedt.png";
import EspenSagen from "../../images/EspenSagen.gif";
import MikeGlrtz from "../../images/MikeGlrtz.png";
import Eva from "../../images/Eva.jpg";
import ArneRonny from "../../images/ArneRonny.jpg";
import Norkartresepsjon from "../../images/Norkartresepsjon.png";
import JohnGran from "../../images/JohnGran.jpg";

const data = {
  tommy: {
    id: 0,
    image: TommyHaugen,
    name: "Tommy Haugen",
    msg: "Markedssjef kommunaltekniske tjenester",
    tel: "909 26 386",
    email: "tommy.haugen"
  },
  keneth: {
    id: 1,
    image: KennethOyen,
    name: "Kenneth Øyen-Eriksen",
    msg: "Teknisk rådgiver",
    tel: "988 90 381",
    email: "ko"
  },
  andreas: {
    id: 2,
    image: AndreasHammerstedt,
    name: "Andreas Hammarstedt",
    msg: "Kundeansvarlig - Kommuner",
    tel: "954 69 192",
    email: "andreas.hammarstedt"
  },
  espen: {
    id: 3,
    image: EspenSagen,
    name: "Espen Sagen",
    msg: "Markedssjef for Plan og Geodata",
    tel: "992 23 012",
    email: "espen.sagen"
  },
  mike: {
    id: 4,
    image: MikeGlrtz,
    name: "Mike Görtz",
    msg: null,
    tel: "994 78 566",
    email: "mike.gortz"
  },
  eva: {
    id: 5,
    image: Eva,
    name: "Eva Fjærestad",
    msg: "Direktør Konsulenttjenester",
    tel: "906 92 545",
    email: "eva.fjaerestad"
  },
  arne: {
    id: 6,
    image: ArneRonny,
    name: "Arne Ronny Tøstibakken",
    msg: "Markedssjef for Vann og avløp",
    tel: "970 55 861",
    email: "arne.ronnytostibakken"
  },
  magnus: {
    id: 7,
    image: Norkartresepsjon,
    name: "Magnus Ove Johansson",
    msg: "Markedsansvarlig datavarehus",
    tel: "970 96 501",
    email: "magnus.ove.johansson"
  },
  john: {
    id: 8,
    image: JohnGran,
    name: "John Gran",
    msg: "Direktør Datavarehus",
    tel: "917 72 900",
    email: "john.gran"
  },
  resepsjon: {
    id: 9,
    image: Norkartresepsjon,
    name: "Norkart resepsjon",
    msg: null,
    tel: "67 55 14 00 (08:00-16:00)",
    email: "info"
  }
};

class Section6 extends Component {
  state = {};
  render() {
    return (
      <>
        <article className="section6">
          <h3>Ønsker du mer informasjon om våre tjenester?</h3>
          <p>
            Trykk på knappen under rundt hva du ønsker å vite mer om – så sørger
            vi for at henvendelsen hurtigst mulig når rette vedkommende.
          </p>
          <section>
            <button className="contact">Kundestøtte</button>
            {/* <Support /> */}
            <button className="contact">KOMTEK</button>
            <Komtek data={data.tommy} />
            <button className="contact">e-Torg</button>
            {/* <Komtek data={data.keneth} /> */}
            {/* <Komtek data={data.andreas} /> */}
            <button className="contact">Plan - og geodata</button>
            {/* <Komtek data={data.espen} /> */}
            <button className="contact">Digital kommune</button>
            {/* <Komtek data={data.mike} /> */}
            {/* <Komtek data={data.eva} /> */}
            <button className="contact">Vann og Avløp</button>
            {/* <Komtek data={data.arne} /> */}
            <button className="contact">Datavarehus</button>
            {/* <Komtek data={data.magnus} /> */}
            {/* <Komtek data={data.john} /> */}
            <button className="contact">Andre henvendelser</button>
            {/* <Komtek data={data.resepsjon} /> */}
          </section>
        </article>
      </>
    );
  }
}

export default Section6;
