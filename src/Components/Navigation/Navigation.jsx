import React from "react";
import "./Navigation.scss";
import resumePdf from "./Assets/resume.pdf";

export default function Navigation() {
  return (
    <>
      <section className="navigation">
        <div>
          <img
            className="brand-header"
            src="https://raw.githubusercontent.com/amino19/amino19/main/icons/aminos-with-logo-horizon.png"
            alt="logo"
          />
        </div>
        <div className="resume">
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
