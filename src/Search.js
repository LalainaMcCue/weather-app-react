import React from "react";

import "./styles.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search city..."
          />
          <button type="button" className="myLocation-button">
            V
          </button>
          <input className="search-button" type="submit" value="Go" />
        </div>
      </form>
    </div>
  );
}
