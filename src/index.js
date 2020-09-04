import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Search from "./Search";
import Current from "./Current";
import Forcast from "./Forcast";
import Footer from "./Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <div className="card">
          <Current />
          <Forcast />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
