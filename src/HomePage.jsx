import React from "react";
import { FaLocationDot } from "react-icons/fa6";

import { BsCake2 } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className="heading">
          <h1>Rails and React II : A real use case</h1>
        </div>
        <div className="searchBox">
          <div className="inputBox">
            <input type="text" placeholder="search people.." />
          </div>
        </div>
        <div className="cardContainer">
          <div className="cardBox">
            <div className="nameContainer">
              <div className="contentBox">
                <div className="heading">Alfred Nobel</div>

                <div className="iconBox">
                  <FaLocationDot size="0.8vw" style={{ color: "white" }} />

                  <span>Greece</span>
                </div>

                <div className="iconBox2">
                  <BsCake2 size="0.8vw" style={{ color: "white" }} />
                  <span>6 Feb 1945</span>
                </div>
              </div>
            </div>

            <div className="detailContainer">
              <div className="detales">
                Choose the approach that fits your needs and coding style.
              </div>
            </div>
            <div className="contactContainer">
            <div className="iconBox3">
                  <IoIosCall  size="0.8vw" style={{ color: "white" }} />

                  <span>73865635</span>
                </div>
                <div className="iconBox3">
                  <MdOutlineMailOutline size="0.8vw" style={{ color: "white" }} />

                  <span>adarshmaha987@gmail.com</span>
                </div>
            </div>
            <div className='avtarBox'>
                        <img src="https://robohash.org/Sheldon.png?set=set4" alt="avtar" />
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
