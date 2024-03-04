import React, { useState } from "react";
import Header from "../../layouts/Header";
import Datepicker from "tailwind-datepicker-react";

function AddEmployee() {
  return (
    <div>
      <Header title="Employee's" />
      <div className="p-4">
        <div className="flex justify-center bg-white py-5 shadow-md rounded-lg ">
          <div className="p-2 w-[70%]">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
              className="object-cover lg:ml-48 ml-24 w-20 flex justify-center rounded-full"
            ></img>
            <form className="max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block  tracking-wide text-black font-Poppins text-xs font-normal  mb-2">
                    Full Name
                  </label>
                  <input
                    className="block w-full bg-black text-white border rounded-md text-sm  py-2 px-3 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400 focus:bg-black"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block  tracking-wide text-black  text-xs  font-normal font-poppins mb-2">
                    Contact Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-black border text-sm border-gray-200   rounded py-2 px-3 leading-tight focus:ring-1 focus:ring-gray-400 focus:outline-none focus:bg-white focus:border-white "
                    type="text"
                    placeholder="Enter your phone no."
                  />
                </div>
                <div className="w-full px-3 pt-3">
                  <label className="text-black text-xs font-normal font-poppins mb-2">
                    Email Address
                  </label>
                  <input
                    className="block w-full bg-white text-black border border-gray-200  text-sm rounded-md py-2 px-3 leading-tight focus:ring-1 focus:ring-gray-400 focus:outline-none focus:bg-white focus:border-white "
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 pt-5">
                  <label className="block  tracking-wide text-black font-Poppins text-xs font-normal  mb-2">
                    Date of Birth
                  </label>
                  <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-black dark:text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="bg-white border  border-gray-200 text-black py-2 text-sm rounded-lg focus:ring-1 focus:ring-gray-400 focus:outline-none focus:border-white w-full px-12 "
                      placeholder="DD-MM-YYYY"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 pt-5">
                  <label className="block  tracking-wide text-black  text-xs  font-normal font-poppins mb-2">
                    Blood Group
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-black border text-sm border-gray-200   rounded-lg py-2 px-3 leading-tight focus:ring-1 focus:ring-gray-400 focus:outline-none focus:bg-white focus:border-white "
                    type="text"
                    placeholder="Enter your Group"
                  />
                </div>
                <div className="w-full px-3 pt-4">
                  <label className="text-black text-xs font-normal font-poppins mb-2">
                    Address
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="block w-full bg-white text-black border border-gray-200  text-sm rounded-md py-2 px-3 leading-tight focus:ring-1 focus:ring-gray-400 focus:outline-none focus:bg-white focus:border-white "
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br w-48 py-2.5 from-orange-300 to-amber-500 focus:ring-2 font-bold font-Poppins rounded-md text-sm text-center"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
