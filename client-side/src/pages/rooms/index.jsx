import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import FirstClassroom from "./images/first-classroom.jpg";
import "./rooms.css";
const Rooms = () => {
  return (
    <div>
      <Helmet>
        <title>Rooms</title>
        <meta name="description" content="rooms-page" />
        <meta name="keywords" content="rooms" />
        <meta lang="en" />
      </Helmet>
      <div className="container">
        <div className="rooms">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={FirstClassroom} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <h1>A Room</h1>
                <p>
                  Simple Room without computer and server. A Room is a place
                </p>
                <p>
                  <input type="checkbox" name="" id="" /> Have computer
                </p>
                <p>
                  A Room is a place where you can learn and have fun with your
                </p>
                <button>
                  <a href="/room">Go to Room</a>
                </button>
              </div>
            </div>
          </div>{" "}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={FirstClassroom} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <h1>B Room</h1>
                <p>Engineering Room</p>
                <p>
                  A Room is a place where you can learn and have fun with your
                </p>
                <button>
                  <a href="/room">Go to Room</a>
                </button>
              </div>
            </div>
          </div>{" "}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={FirstClassroom} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <h1>C Room</h1>
                <p>InfoSec Room</p>
                <p>
                  <input type="checkbox" name="computer" id="computer" /> Have
                  computer
                </p>
                <p>
                  <input type="checkbox" name="server" id="server" />
                  Have Server
                </p>
                <p>
                  A Room is a place where you can learn security and have fun
                </p>
                <button>
                  <a href="/room">Go to Room</a>
                </button>
              </div>
            </div>
          </div>{" "}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={FirstClassroom} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <h1>D Room</h1>
                <p>Music Room</p>
                <p>
                  A Room is a place where you can learn and have fun with your
                  singer friends
                </p>
                <button>
                  <a href="/room">Go to Room</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="back-button">
          <button>
            <Link to="/">go to backs</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
