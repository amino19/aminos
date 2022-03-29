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
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social instagram"
          href="https://instagram.com/aminos.ly"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social linkedin"
          href="https://www.linkedin.com/in/amino19"
        >
          <span className="icon"></span>
        </a>
        <a className="bg_links logo"></a>
      </div>

      <div className="content-about">
        <div className="card-about">
          <div className="icon">
            <i className="material-icons md-36">face</i>
          </div>
          <p className="title">Profile</p>
          <p className="text">Click here to know more about my journey</p> 
          {/* polywork */}
        </div>
        <div className="card-fav">
          <div className="icon">
            <i className="material-icons md-36">favorite_border</i>
          </div>
          <p className="title">Projects</p>
          <p className="text">Open Source projects showcased here</p>
          {/* github */}
        </div>
        <div className="card-about">
          <div className="icon">
            <i className="material-icons md-36">alternate_email</i>
          </div>
          <p className="title">Contacts</p>
          <p className="text">Feel free to book a time slot for 1:1 meeting</p>
          {/* calendly */}
        </div>
      </div>
    </>
  );
}
