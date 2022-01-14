import React, { Component } from "react";
import Giveaway from "./Components/Giveaway";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <img src="/logo-original.png" alt="main logo" className="main-logo" />
          <article className="heading-container">
            <h1 className="heading-main">BUY 30$ WORTH OF YFIH2</h1>
            <h1 className="heading-main">HOLD FOR 30 DAYS</h1>
            <h1 className="heading-main">
              Enter you Wallet Address and win IPHONE 13
            </h1>
          </article>
          <Giveaway />
          <div className="btn-group my-5"></div>
        </div>
      </>
    );
  }
}

export default App;
