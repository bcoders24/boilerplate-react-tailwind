import React from "react";

function Stepper({ activeStep }) {
  return (
    <div className="bg-gray-200  lg:w-60 md:w-32 w-28 mt-5 pt-3 rounded-md">
      <h3 className="flex items-start justify-start text-sm font-poppins ml-2  font-semibold truncate ">
        Add Employee
      </h3>
      <div className="bg-white mt-3 py-4  lg:h-full  h-full md:h-1/2  flex items-start rounded-b-md justify-between lg:w-60 md:w-32 w-28 pt-5">
        <ul className="relative flex flex-col items-center justify-center">
          <li
            className={`text-center px-4 ${
              activeStep === 1
                ? "text-black"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <div className="flex flex-col">
              <div className="flex gap-x-4 items-center">
                <span
                  className={`h-8 w-8 inline-flex items-center justify-center border rounded-md ${
                    activeStep === 1 ? "border-yellow-400 text-yellow-400" : ""
                  }`}
                >
                  01
                </span>
                <div className="flex flex-col items-start">
                  <span
                    className={`text-[10px]  hidden md:flex  leading-tight ${
                      activeStep === 1 ? "text-yellow-400" : "text-gray-200"
                    }`}
                  >
                    Step one
                  </span>
                  <p className="text-xs  hidden md:flex font-medium leading-none">
                    Personal Info
                  </p>
                </div>
              </div>
              <div className="h-full ml-4 py-1">
                <span className="h-20 w-0.5 rounded-full bg-gray-200 block" />
              </div>
            </div>
          </li>
          <li
            className={`text-center px-4 ${
              activeStep === 2
                ? "text-black"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <div className="flex flex-col">
              <div className="flex gap-x-4 items-center">
                <span
                  className={`h-8 w-8 inline-flex items-center justify-center border rounded-md ${
                    activeStep === 2 ? "border-yellow-400 text-yellow-400" : ""
                  }`}
                >
                  02
                </span>
                <div className="flex flex-col items-start">
                  <span
                    className={`text-[10px]  hidden md:flex leading-tight ${
                      activeStep === 2 ? "text-yellow-400" : "text-gray-200"
                    }`}
                  >
                    Step two
                  </span>
                  <p className="text-xs  hidden md:flex font-medium leading-none">
                    Personal Info
                  </p>
                </div>
              </div>
              <div className="h-full ml-4 py-1">
                <span className="h-20 w-0.5 rounded-full bg-gray-200 block" />
              </div>
            </div>
          </li>
          <li className="text-center px-4">
            <div className="flex flex-col">
              <div className="flex gap-x-4 items-center">
                <span
                  className={`h-8 w-8 inline-flex items-center justify-center border rounded-md ${
                    activeStep === 3 ? "border-yellow-400 text-yellow-400" : ""
                  }`}
                >
                  03
                </span>
                <div className="flex flex-col items-start">
                  <span
                    className={`text-[10px]  hidden md:flex leading-tight ${
                      activeStep === 3 ? "text-yellow-400" : "text-gray-200"
                    }`}
                  >
                    Step two
                  </span>
                  <p className="text-xs hidden md:flex font-medium leading-none">
                    Personal Info
                  </p>
                </div>
              </div>

              <div className="h-full ml-4 py-1">
                <span className="h-20 w-0.5 rounded-full bg-gray-200 block"></span>
              </div>
            </div>
          </li>
          <li className="text-center px-4">
            <div className="flex gap-x-4 items-center">
              <span
                className={`h-8 w-8 inline-flex items-center justify-center border rounded-md ${
                  activeStep === 4 ? "border-yellow-400 text-yellow-400" : ""
                }`}
              >
                04
              </span>
              <div className="flex flex-col items-start">
                <span
                  className={`text-[10px]  hidden md:flex leading-tight ${
                    activeStep === 4 ? "text-yellow-400" : "text-gray-200"
                  }`}
                >
                  Step two
                </span>
                <p className="text-xs  hidden md:flex font-medium leading-none">
                  Personal Info
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Stepper;
