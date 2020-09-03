import React from "react";

import "./styles.css";

export default function Current() {
  return (
    <div className="Current">
      <h3 className="greeting">
        Good Morning
        </h3>
      <h1 className="city">
        Cleveland
        </h1>
      <h3>
        <span className="date">Wednesday 7/29/2020 </span>
      </h3>
      <div className="row">
        <div className="col-6 today-icon">
          <img src="" className="icon" />
          <h5 className="today-icon-title">Partly Cloudy</h5>
        </div>
        <div className="col-6">
          <div className="card-body">
            <p className="currently">Currently</p>
            <h2>
              <span className="temp-now"> </span>
              <span className="celcius">℃</span> |<span className="farenheit">℉</span>
            </h2>
            <h4 id="highLow">
              <strong><span className="high">85</span></strong> |
                <span className="low">75</span>
            </h4>
            <p>
              Wind: <span className="windSpeed"></span> mph <br />
                Humidity: <span className="humidity"></span>%
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
