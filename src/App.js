import React, { PureComponent } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
