import React from "react";
import "material-icons/iconfont/material-icons.css";
import "./About.scss";

export default function About() {
  return (
    <>
      <div className="about">
        <a
          className="bg_links social twitter"
          href="https://www.twitter.com/aminoxix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social instagram"
          href="https://instagram.com/aminoxix.ly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social linkedin"
          href="https://www.linkedin.com/in/aminoxix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon"></span>
        </a>
        <a className="bg_links logo"></a>
      </div>

      <div className="content-about">
        <div className="card-about">
          <a
            href="https://www.polywork.com/aminoxix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">
              <i className="material-icons md-36">face</i>
            </div>
            <p className="title">Profile</p>
            <p className="text">Click here to know more about my journey</p>
            {/* polywork */}
          </a>
        </div>

        <div className="card-fav">
          <a
            href="https://github.com/amino19?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">
              <i className="material-icons md-36">favorite_border</i>
            </div>
            <p className="title">Projects</p>
            <p className="text">Open Source projects showcased here</p>
            {/* github */}
          </a>
        </div>

        <div className="card-about">
          <a
            href="https://calendly.com/aminoxix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">
              <i className="material-icons md-36">alternate_email</i>
            </div>
            <p className="title">Contacts</p>
            <p className="text">Schedule a time slot for 1:1 meeting</p>
            {/* calendly */}
          </a>
        </div>
      </div>
    </>
  );
}
