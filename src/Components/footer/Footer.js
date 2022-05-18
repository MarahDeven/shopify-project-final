import React from "react";
import "./Footer.css";
//import skull from "./skull.jpg";

export default function Footer() {
  return (
    <div className="App">
      <div className="container">
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="www.linkedin.com/in/marah-deven-rice"
              target="_blank"
              rel="noreferrer"
            >
              Marah Rice
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            on Github
          </small>
        </footer>
      </div>
    </div>
  );
}
