import React from "react";
import "./Navigation.scss";
import resumePdf from "./Assets/resume.pdf";

export default function Navigation() {
  return (
    <>
      <section className="navigation">
        {/* brand header */}
        <div>
          <img
            className="brand-header"
            src= {require("./Assets/aminos-with-logo-horizon.png")}
            alt="logo"
          />
        </div>
        <div className="resume">
          {/* resume button */}
          <a
            href={resumePdf}
            className="blue-btn"
            onClick={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
          </a>
        </div>
      </section>
    </>
  );
}
