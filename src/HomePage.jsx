import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";

import { BsCake2 } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import Card from "./Component/Card";

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchUser,setSearchUser] = useState("")

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUserData(response);
      })
      .catch((error) => {
        console.log("Error while fetching data ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log("hshds",userData.data && userData.data.users)
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className="heading">
          <h1>Rails and React II : A real use case</h1>
        </div>
        <div className="searchBox">
          <div className="inputBox">
            <input 
            type="text" 
            placeholder="search people.." 
            value={searchUser}
            onChange={(e)=>setSearchUser(e.target.value)}
            />
            {console.log("mjxjx",searchUser)}
          </div>
        </div>
     
        {loading ? <p>Loding</p> : <Card data={userData.data && userData.data.users} searchUser={searchUser}/>}
      </div>
    </div>
  );
};

export default HomePage;
