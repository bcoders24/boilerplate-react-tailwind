import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "./Header";

function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="flex-1 hidden md:flex">
      <div
        className={`h-screen transition-all duration-700 p-1 ${
          expanded ? "w-56" : "w-20"
        }`}
      >
        <div className="w-full relative top-0 left-0 px-5 h-full bg-gray-900 py-4 flex flex-col justify-between rounded-md md:rounded-3xl">
          <div className="absolute -right-5 top-3 p-2">
            <button
              onClick={toggleSidebar}
              type="button"
              className="p-2 inline-flex justify-center items-center gap-x-2 rounded-xl border-2 border-white bg-gray-800 text-white shadow-sm dark:bg-transparent dark:border-gray-700  dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1"
            >
              <span className="flex-shrink-0 size-4">
                <svg width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="w-full">
            <div className="h-12">
              {expanded && (
                <img
                  src="src/assets/icon.png"
                  className="object-over md:ml-6 lg:ml-6"
                />
              )}
            </div>
            <ul className="w-full flex flex-col gap-y-5 font-medium mt-10">
              {links.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="w-full overflow-hidden transition-all"
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `h-9 w-full flex py-2.5 items-center px-2 text-xs rounded-lg ${
                          isActive
                            ? "bg-white text-black font-Poppins"
                            : "bg-gray-700 text-gray-400 font-normal"
                        }`
                      }
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span
                        className={`ml-2 transition-opacity duration-100 ease-in ${
                          expanded ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <span className="w-full">{item.title}</span>
                      </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          {expanded && (
            <p className="text-center text-xs text-gray-300 font-sans">
              Powered by BTeams
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
