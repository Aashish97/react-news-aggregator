import React, { PureComponent } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<News key="general" country="us" category="general" />}
            ></Route>

            <Route
              path="/business"
              element={<News key="business" country="us" category="business" />}
            ></Route>

            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>

            <Route
              path="/health"
              element={<News key="health" country="us" category="health" />}
            ></Route>

            <Route
              path="/science"
              element={<News key="science" country="us" category="science" />}
            ></Route>

            <Route
              path="/sports"
              element={<News key="sports" country="us" category="sports" />}
            ></Route>

            <Route
              path="/technology"
              element={
                <News key="technology" country="us" category="technology" />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
