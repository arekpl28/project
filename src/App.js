import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header";
import Page from "./layouts/Page";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <section className="page">
            <Page />
          </section>
          <footer>
            <p>foter</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
