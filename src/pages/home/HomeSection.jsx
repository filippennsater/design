import React from 'react';
import '../../App.css';
import './HomeSection.scss';


function HomeSection() {


  return (

    <div className="hero-container">
      <div className="content-container">
        <div className="sidebar-container">
          <div class="logo-wrap"><div class="logo"></div></div>
          <div class="dropdown">
            <button class="dropbtn">Sequoia ▼</button>
            <div class="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </div>
          <button class="otherlink">Copywriting</button>
          <button class="lastlink">Add a new room</button>
          <div class="filler"></div>
          <button class="lastlink">Invite members</button>
          <div class="infobar">
            Add more members to collaborate with in your workspace.
          </div>
        </div>
        <div className="column-container">
          <div className="information">
            <h4black>Upcoming week</h4black>

            <ptext>
              Here's a quick summary of your week. Check out these performance
              statistics and personalized tips.</ptext
            >
          </div>
        </div>

        <div className="column-container2">
          <div className="own-component">
            <h4>Old Component</h4>

            <ptext>
              The great white shark (Carcharodon carcharias), also known as the
              white shark, white pointer, or simply great white, is a species of
              large mackerel shark which can be found in the coastal surface
              waters of all the major oceans.</ptext
            >
          </div>

        </div>
        <div className="column-container3">
          <div className="b-day">
            <div className="cards-image">
              <h4>Kate's birthday</h4>

              <ptext> In 2 days</ptext>
            </div>
          </div>

          <div className="information-2">
            <h4blue>Design onboarding</h4blue>

            <ptextblue> 15 PM</ptextblue>
          </div>
        </div>

        <div className="date-column-container">
          <div className="date-heading">
            <dh> All year</dh>
          </div>
          <div className="date">
            <dtext> W.18 -</dtext>
          </div>
          <div className="date">
            <dtext> W.19 -</dtext>
          </div>
          <div className="date">
            <dtext> W.20 -</dtext>
          </div>
          <div className="date">
            <dtext> W.21 -</dtext>
          </div>
          <div className="date">
            <dtext> W.22 -</dtext>
          </div>
          <div className="date">
            <dtext> W.23 -</dtext>
          </div>
          <div className="date">
            <dtext> W.24 -</dtext>
          </div>
          <div className="date">
            <dtext> W.25 -</dtext>
          </div>
          <div className="date">
            <dtext> W.26 -</dtext>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomeSection