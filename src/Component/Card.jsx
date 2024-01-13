import React from "react";
import "../App.css";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { BsCake2 } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const Card = ({ data, searchUser }) => {
  console.log("child",data);

  const filteredData = data.filter((userData) => {
    const fullName = `${userData.firstName} ${userData.lastName}`;
    return fullName.toLowerCase().includes(searchUser.toLowerCase());
  });


  return (
   
    <div className="cardContainer">
      {filteredData.map((userData, id) => (
       <Link  to={`/user/${userData.id}`} style={{ textDecoration: 'none'}} >
        <div key={id} className="cardBox">
          
        
          <div className={`nameContainer ${userData.gender === "male" ?  "mbg" : "fbg"}`}>
            <div className="contentBox">
              <div className="nameheading">
                {userData.firstName} {userData.lastName}
              </div>

              <div className="iconBox">
                <FaLocationDot size="0.8vw" style={{ color: "white" }} />

                <span>{userData.address.city}</span>
              </div>

              <div className="iconBox2">
                <BsCake2 size="0.8vw" style={{ color: "white" }} />
                <span>{userData.birthDate}</span>
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
              <IoIosCall size="0.8vw" style={{ color: "white" }} />

              <span>{userData.phone}</span>
            </div>
            <div className="iconBox3">
              <MdOutlineMailOutline size="0.8vw" style={{ color: "white" }} />

              <span>{userData.email}</span>
            </div>
          </div>
          <div className="avtarBox">
            <img src={userData.image} alt="avtar" />
          </div>
        </div>
        </Link>
      ))}
    </div>
  
  );
};

export default Card;
