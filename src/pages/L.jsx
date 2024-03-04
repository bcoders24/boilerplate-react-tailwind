import React, { useState } from 'react';
import Switch from "../assets/Switch.png";
import User from "../assets/User.png";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
const L = () => {


  return (
    <Menu
    menuButton={
      <MenuButton>
         <button
            type="button"
            className="text-white bg-gradient-to-r py-2 from-orange-300 to-amber-500  font-medium rounded-md me-2 text-sm px-3 text-center "
          >
            + Add Employee
          </button>
      </MenuButton>
    }
    transition
  >
    <ul className="flex flex-col p-2 ">
      <div className="flex hover:bg-gray-100 pl-2 rounded-md py-1">
        <img src={User} className="w-5 h-5 object-cover"></img>

        <li className="px-2  hover:bg-gray-100 rounded-md text-gray-800 font-semibold transition duration-300 ease-in-out">
          <a to="/profile">Profile</a>
        </li>
      </div>

      <div
        className="flex hover:bg-gray-100 px-2 rounded-md py-1"
     
      >
        <img src={Switch} className="object-cover w-5 h-5"></img>
        <li
          className="px-2  rounded-md text-gray-800 font-semibold transition
        duration-300 ease-in-out "
        >
          Logout
        </li>
      </div>
    </ul>
  </Menu>
  );
};

export default L;

