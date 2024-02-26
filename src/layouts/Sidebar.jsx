import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "./Header";

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="hidden md:flex">
      <div
        className={`h-screen transition-all duration-700 p-1 ${
          expanded ? "w-56" : "w-16"
        }`}
      >
        <div className="relative top-0 left-0 px-3 h-full bg-slate-700 py-4 flex flex-col justify-between rounded-md md:rounded-3xl">
          <div className="absolute -right-5 top-6 p-2">
            <button
              onClick={toggleSidebar}
              type="button"
              className="p-2 inline-flex justify-center items-center gap-x-2 rounded-xl border border-white bg-slate-700 text-white shadow-sm dark:bg-transparent dark:border-gray-700  dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1"
            >
              <svg
                className="flex-shrink-0 size-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>

          <div className="">
            <div className="h-12">
              {expanded && (
                <img
                  src="src/assets/icon.png"
                  className="object-over md:ml-6 lg:ml-6"
                />
              )}
            </div>
            <ul className="flex flex-col gap-y-2 font-medium mt-10">
              {links.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex  py-2.5 transition-all duration-700 items-center p-2 text-xs font-bold rounded-lg mt-4 ${
                          expanded ? "justify-start" : "justify-center"
                        } ${
                          isActive
                            ? "bg-white text-black"
                            : "bg-slate-600 text-white"
                        }`
                      }
                    >
                      {item.icon}
                      {expanded && <span className="ms-3">{item.title}</span>}
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
