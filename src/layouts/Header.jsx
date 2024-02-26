import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full font-bold text-sm px-5 py-2">
      <div className="flex justify-between align-center">
        <h1 className="font-bold text-black text-2xl">Employee's</h1>
        <span className="block md:hidden" onClick={toggleMenu}>
          Menu
        </span>
      </div>
      <div
        className={`${
          isMenuOpen ? "translate-y-0 ease-out" : "-translate-y-full ease-in"
        } transform top-0 left-0 w-full h-screen fixed z-50 overflow-y-auto transition-transform duration-300`}
      >
        <MenuDrawer toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}
export default Header;

const MenuDrawer = ({ toggleMenu }) => {
  return (
    <div className="bg-slate-700 w-full py-6 px-4 absolute top-0 left-0">
      <span
        onClick={toggleMenu}
        className="flex justify-end text-white mr-3 mb-2"
      >
        close
      </span>
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
