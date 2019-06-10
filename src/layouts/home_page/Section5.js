import React, { Component } from "react";
import Art1 from "./articles/Art1.js";
import Art2 from "./articles/Art2.js";
import Art3 from "./articles/Art3.js";
import Art4 from "./articles/Art4.js";
import Art5 from "./articles/Art5.js";
import Art6 from "./articles/Art6.js";

const arrArt = [
  {
    name: Art1
  },
  {
    name: Art2
  },
  {
    name: Art3
  },
  {
    name: Art4
  },
  {
    name: Art5
  },
  {
    name: Art6
  }
];

class Section5 extends Component {
  state = {
    isDown: false,
    scrollLeft: 0,
    startX: null,
    size: 0,
    flaga: true
  };

  handleMouseDown = e => {
    const startX = e.pageX;
    this.setState(prevState => ({
      isDown: true,
      startX: startX - this.state.scrollLeft,
      size: window.innerWidth
    }));
  };

  handleMouseUp = () => {
    // if (this.state.scrollLeft < 50 && this.state.flaga) {
    //   this.setState({
    //     scrollLeft: -this.state.size,
    //     flaga: !this.state.flaga
    //   });
    // }
    // if (this.state.scrollLeft > -this.state.size) {
    //   this.setState({
    //     flaga: !this.state.flaga,
    //     screenLeft: 0
    //   });
    // }
    this.setState({
      isDown: false
    });
  };

  handleMouseMove = e => {
    e.preventDefault();
    if (this.state.scrollLeft > 0) {
      this.setState({
        scrollLeft: 0
      });
    }
    if (this.state.isDown) {
      let scrollLeft = e.pageX - this.state.startX;
      this.setState({
        scrollLeft
      });
      console.log(this.state.scrollLeft);
    }
  };

  render() {
    const arrList = arrArt.map((item, index) => (
      <item.name key={index} walk={this.state.scrollLeft} />
    ));
    return (
      <>
        <article
          className="section5"
          onMouseDown={this.handleMouseDown}
          onMouseLeave={this.handleMouseLeave}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
        >
          <h3>Våre kunder forteller</h3>
          <div className="client">
            <div
              className="tak"
              style={{
                transform: `translateX(${(this.state.scrollLeft * 100) /
                  this.state.size}%)`
              }}
            >
              {arrList}
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default Section5;
