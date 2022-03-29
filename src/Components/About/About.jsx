import React from "react";
import "material-icons/iconfont/material-icons.css";
import "./About.scss";

export default function About() {
  return (
    <>
      <div className="about">
        <a
          className="bg_links social portfolio"
          href="https://www.aminos.vercel.app"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social dribbble"
          href="https://github.com/amino19"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social linkedin"
          href="https://www.linkedin.com/in/amino19/"
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
          <p className="text">Click to see or edit your profile page.</p>
        </div>
        <div className="card-fav">
          <div className="icon">
            <i className="material-icons md-36">favorite_border</i>
          </div>
          <p className="title">Favourites</p>
          <p className="text">Check all your favourites in one place.</p>
        </div>
        <div className="card-about">
          <div className="icon">
            <i className="material-icons md-36">alternate_email</i>
          </div>
          <p className="title">Contacts</p>
          <p className="text">Add or change your contacts and links.</p>
        </div>
      </div>
    </>
  );
}
