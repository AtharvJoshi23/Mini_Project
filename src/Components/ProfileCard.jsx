import React from 'react';
// importing Images
import Profile from "../assests/profile.jpg";

// importing react icons
 import { LuContact } from "react-icons/lu";
 import { FaRegFolder } from "react-icons/fa";

function ProfileCard({classroom}) {
  const {subject, year,faculty} = classroom;
  return (
    <div className=" rounded-lg border-2 border-gray-300 text-black bg-white overflow-hidden min-w-80 max-w-80 ">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-blue-500 p-4">
        <h1 className="font-semibold text-lg w-2/3 ">{subject}</h1>
      </div>
      {/* Image */}
      <div className="w-20 h-20 rounded-full relative left-2/3 bottom-10  overflow-hidden cover ">
      <img src={Profile} alt="" />
      </div>
      {/* Year and Classroom Owner */}
      <span className=" mt-4 block px-2 relative bottom-16">{year}<br />{faculty}</span>
      
      
      <div className="mt-4 flex justify-self-end p-5 items-center ">
        <button className="bg-white text-black  rounded-full mr-3">
        {<LuContact  className="size-6 bg-white"/> }
        </button>
        <button className="bg-white text-black  rounded-full " >
        <FaRegFolder   className="size-6 bg-white" />
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;

