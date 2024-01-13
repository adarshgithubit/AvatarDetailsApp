import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsCake2 } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineTitle } from "react-icons/md";
import { MdCancel } from "react-icons/md";


const UserDetailsPage = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching user details ", error);
      });
  }, [id]);

  if (!userDetails) {
    return <p className="loading">Loading...</p>;
  }
  const goBack =()=>{
    navigate("/")
  }

  console.log("detailPageData", userDetails);
  return (
    <div className="userDetailsContainer">
      <div className="userDetailBox">
        {/* <div className="headerBox"> */}
        <div
          className={`headerbox ${
            userDetails.gender === "male" ? "mabg" : "febg"
          }`}
        >
          <div className="profileImg">
            <img src={userDetails.image} alt="noImg" />
          </div>
          <div className="nameBox">
            <div>
              {userDetails.firstName} {userDetails.lastName}
            </div>
            <div className="iconBoxDetail">
              <FaLocationDot size="1vw" style={{ color: "white" }} />

              <span>{userDetails.address.city}</span>
            </div>
          </div>
        </div>
        <div className="aboutBox">
          <div className="headrTag">
            <span>About</span>
          </div>
          <div className="paraTxt">
            Welcome to our platform dedicated to celebrating and empowering men
            from all walks of life. In this space, we embrace the strength,
            resilience, and diverse experiences that define the essence of being
            a man. Whether you're navigating the complexities of modern life,
            pursuing your passions, or contributing to your community, we honor
            your journey.
          </div>
        </div>

        <div className="aboutBox2">
          <div className="contactContainers">
            <div className="iconBox4">
              <FaPlaneDeparture size="1.5vw" style={{ color: "white" }} />

              <span> {userDetails.company.department}</span>
            </div>

            <div className="iconBox4">
              <MdOutlineTitle size="1.5vw" style={{ color: "white" }} />

              <span> {userDetails.company.title}</span>
            </div>

            <div className="iconBox4">
              <MdOutlineHomeRepairService
                size="1.5vw"
                style={{ color: "white" }}
              />
              <span>{userDetails.company.name}</span>
            </div>
          </div>
        </div>
        <MdCancel onClick={goBack} size="3.5vw" style={{position:"absolute",top:"3vw", right:"3vw", cursor:"pointer", color:"#ffff" }}/>
      </div>
    </div>
  );
};

export default UserDetailsPage;
