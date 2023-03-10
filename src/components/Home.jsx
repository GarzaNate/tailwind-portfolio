import React from "react";
import HeroImage from "../assets/heroImage2.jpg";
import Socials from "./Socials";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
                I'm a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
                I have over a year of experience building and designing software. Currently,  I love to work on web applications using technologies I like such as React, Tailwind, MongoDB, SQL, ect.
            </p>
        </div>

        <div>
            <img src={HeroImage} alt="profile pic" className="rounded-2xl mx-auto md:w-full" style={{"width": "50%"}} />
        </div>
    
      </div>
    <Socials />
    </div>
  );
};

export default Home;
