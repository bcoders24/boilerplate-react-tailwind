import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Switch from "../assets/Switch.png";
import User from "../assets/User.png";

export const links = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    icon: (
      <svg
        id="ic_dashboard_selected"
        xmlns="http://www.w3.org/2000/svg"
        width="12.752"
        height="12.752"
        viewBox="0 0 12.752 12.752"
      >
        <path
          id="Path_531"
          data-name="Path 531"
          d="M4.915,0H.93A.931.931,0,0,0,0,.93V3.321a.931.931,0,0,0,.93.93H4.915a.931.931,0,0,0,.93-.93V.93A.931.931,0,0,0,4.915,0Zm0,0"
          fill="currentColor"
        />
        <path
          id="Path_532"
          data-name="Path 532"
          d="M4.915,213.332H.93a.931.931,0,0,0-.93.93v5.579a.931.931,0,0,0,.93.93H4.915a.931.931,0,0,0,.93-.93v-5.579A.931.931,0,0,0,4.915,213.332Zm0,0"
          transform="translate(0 -208.019)"
          fill="currentColor"
        />
        <path
          id="Path_533"
          data-name="Path 533"
          d="M282.247,341.332h-3.985a.931.931,0,0,0-.93.93v2.391a.931.931,0,0,0,.93.93h3.985a.931.931,0,0,0,.93-.93v-2.391A.931.931,0,0,0,282.247,341.332Zm0,0"
          transform="translate(-270.425 -332.831)"
          fill="currentColor"
        />
        <path
          id="Path_534"
          data-name="Path 534"
          d="M282.247,0h-3.985a.931.931,0,0,0-.93.93V6.509a.931.931,0,0,0,.93.93h3.985a.931.931,0,0,0,.93-.93V.93A.931.931,0,0,0,282.247,0Zm0,0"
          transform="translate(-270.425)"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "employee",
    title: "Employee",
    path: "/employee",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
      </svg>
    ),
  },
  {
    id: "timeline",
    title: "Timeline",
    path: "/timeline",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 9.62 4H12.5A1.5 1.5 0 0 1 14 5.5v1.401a2.986 2.986 0 0 0-1.5-.401h-9c-.546 0-1.059.146-1.5.401V3.5ZM2 9.5v3A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 12.5 8h-9A1.5 1.5 0 0 0 2 9.5Z" />
      </svg>
    ),
  },
  {
    id: "leaves",
    title: "Leaves",
    path: "/leaves",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
        />
      </svg>
    ),
  },
  {
    id: "rating",
    title: "My Rating",
    path: "/rating",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
  },
];

function Header() {
  const navigate = useNavigate();

  // Phone Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Profile Popover
  const [popover, setPopover] = useState(true);
  const togglePopover = () => setPopover((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setPopover(false);
      }
    };
    if (popover) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [popover]);

  return (
    <div class="flex items-center justify-between py-1 px-2">
      <div className="flex items-center gap-x-2">
        <button class="relative group block  md:hidden" onClick={toggleMenu}>
          <div class="relative flex overflow-hidden items-center justify-center rounded-full w-9 h-9 transform transition-all bg-gray-300 ring-0  hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
              <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
              <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
            </div>
          </div>
        </button>
        <span class="font-bold text-black text-2xl pl-1">Employee's</span>
      </div>
      <div
        className={`${
          isMenuOpen ? "translate-y-0 ease-out" : "-translate-y-full ease-in"
        } transform top-0 left-0 w-full h-screen fixed z-50 overflow-y-auto transition-transform duration-300`}
      >
        <MenuDrawer toggleMenu={toggleMenu} />
      </div>

      <div className="flex gap-x-2 items-center">
        <div className="flex flex-col">
          <span className="text-sm font-semibold leading-none">Johnson</span>
          <span className="text-xs font-normal leading-none">Designer</span>
        </div>

        <img
          ref={buttonRef}
          className="w-10 h-10 rounded-full object-cover border-yellow-300 border-solid border-4"
          onClick={togglePopover}
          src="https://media.istockphoto.com/id/1248770730/photo/serious-authoritative-man-with-folded-arms.jpg?s=612x612&w=0&k=20&c=L308VknCjSP03Jusb3HnBao2qpjH3faWRPRqt5IB3XE="
          alt=""
        />
        {popover && (
          <div
            ref={popoverRef}
            data-popover="popover"
            class="absolute top-12 right-5 font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none"
          >
            <ul className="flex flex-col p-1">
              <div className="flex hover:bg-gray-100 px-2 rounded-md py-1">
                <img src={User} className="w-5 h-5 object-cover"></img>

                <li className="px-2  hover:bg-gray-100 rounded-md text-gray-800 font-semibold transition duration-300 ease-in-out">
                  <Link to="/profile">Profile</Link>
                </li>
              </div>

              <div className="flex hover:bg-gray-100 px-2 rounded-md py-1">
                <img src={Switch} className="object-cover w-5  h-5"></img>
                <li
                  onClick={handleLogout}
                  className="px-2  rounded-md text-gray-800 font-semibold transition
              duration-300 ease-in-out "
                >
                  Logout
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;

const MenuDrawer = ({ toggleMenu }) => {
  return (
    <div className="bg-slate-700 w-full p-4 pb-6 absolute top-0 left-0">
      <svg
        onClick={toggleMenu}
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#FFFFFF
        "
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <ul className="flex flex-col gap-2 font-medium">
        {links.map((item) => {
          return (
            <li className="flex justify-center" key={item.id}>
              <NavLink
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `w-[80%]  flex items-center justify-center px-12 py-2.5 transition-all duration-700 text-center text-3xl font-bold rounded-lg mt-4 ${
                    isActive ? "bg-white text-black" : "text-white bg-gray-600"
                  }`
                }
              >
                {item.icon}
                <span className="ms-3 text-sm">{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
