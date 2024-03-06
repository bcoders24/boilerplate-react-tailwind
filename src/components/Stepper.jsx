import React from "react";

function Stepper({ activeStep }) {


  return (
    <div className="h-full flex items-start justify-between bg-white lg:w-52 pt-5 rounded-lg">
      <ul className="relative flex flex-col items-center justify-center">
        <li
          className={`text-center px-4 ${
            activeStep === 1 ? "text-black" : "text-gray-500 dark:text-gray-400"
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
                  className={`text-[10px] leading-tight ${
                    activeStep === 1 ? "text-yellow-400" : "text-gray-200"
                  }`}
                >
                  Step one
                </span>
                <p className="text-xs font-medium leading-none">
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
            activeStep === 2 ? "text-black" : "text-gray-500 dark:text-gray-400"
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
                  className={`text-[10px] leading-tight ${
                    activeStep === 2 ? "text-yellow-400" : "text-gray-200"
                  }`}
                >
                  Step two
                </span>
                <p className="text-xs font-medium leading-none">
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
          className="text-center px-4"
        >
          <div className="flex flex-col">
            <div className="flex gap-x-4 items-center">
              <span
                className={`h-8 w-8 inline-flex items-center justify-center border rounded-md ${
                  activeStep === 2 ? "border-yellow-400 text-yellow-400" : ""
                }`}
              >
                03
              </span>
              <div className="flex flex-col items-start">
              <span
                  className={`text-[10px] leading-tight ${
                    activeStep === 2 ? "text-yellow-400" : "text-gray-200"
                  }`}
                >
                  Step two
                </span>
                <p className="text-xs font-medium leading-none">
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
            activeStep === 2 ? "text-black" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <div className="flex flex-col">
            <div className="flex gap-x-4 items-center">
              <span
                className={`h-8 w-8 inline-flex items-center justify-center border rounded-md ${
                  activeStep === 2 ? "border-yellow-400 text-yellow-400" : ""
                }`}
              >
                04
              </span>
              <div className="flex flex-col items-start">
                <span
                  className={`text-[10px] leading-tight ${
                    activeStep === 2 ? "text-yellow-400" : "text-gray-200"
                  }`}
                >
                  Step two
                </span>
                <p className="text-xs font-medium leading-none">
                  Personal Info
                </p>
              </div>
            </div>
           
          </div>
        </li>
         
      </ul>
    </div>
  );
}

export default Stepper;
