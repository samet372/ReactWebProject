// import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/272adb31-bbe8-4b63-ba95-fb66ea45e534.jpeg";
function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1>Fish</h1>
        <p>
          Delicious <br /> with 33 spicy mixed
        </p>
        <Link to="/menu">
          <button>Order now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
