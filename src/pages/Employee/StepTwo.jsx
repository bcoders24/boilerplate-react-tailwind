import { data } from "autoprefixer";
import React, { useState } from "react";

// Validation
const validateForm = (data)=>{
  let errors ={};
  if(!data.employeeType.trim()){
    errors.employeeType ="Employee type is required";
  }
  if(!data.employeeCode.trim()){
    errors.employeeCode = "Employee code is required";
  }
  if(!data.designation.trim()){
    errors.designation ="Designation is required";
  }
  if(!data.department.trim()){
    errors.department = "Department is required";
  }
  if(!data.date.trim()){
    errors.date ="Date is required";
  }
  return errors;
}

// Set state
function StepTwo() {
  const [formData, setFormData] = useState({
    employeeType: "",
    employeeCode: "",
    designation: "",
    department: "",
    date: "",
  });

  const [errors, setErrors] = useState({});

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Remove validation error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Handle submit button
 const handleSubmit = () =>{
  const errors = validateForm(formData);
  setErrors(errors);
 }
  return (
    <div>
      <div className="p-3 h-full">
        <div className="flex justify-start items-start pt-10 tr">
          <h2 className="font-semibold text-xl px-2">
            Employee Official Details
          </h2>
        </div>
        <form className="max-w-lg pt-3">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-black font-Poppins text-xs font-semibold">
                Employee Type
              </label>
              <input
                type="text"
                name="employeeType"
                className="w-full focus:bg-black focus:text-white mt-3 text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
                placeholder="Employee type"
                value={formData.employeeType}
                onChange={handleChange}
              />
              {errors?.employeeType && (
                <span className="error">{errors?.employeeType}</span>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block  tracking-wide text-black font-Poppins text-xs font-semibold">
                Employee Code
              </label>
              <input
                type="text"
                name="employeeCode"
                className="w-full focus:bg-black focus:text-white mt-3 text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
                placeholder="Employee code"
                value={formData.employeeCode}
                onChange={handleChange}
              />
              {errors?.employeeCode && (
                <span className="error">{errors?.employeeCode}</span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap pt-3">
            <div className="w-full md:w-1/2 px-3 mt-3">
              <label className="block  tracking-wide text-black font-Poppins text-xs font-semibold">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                className="w-full focus:bg-black focus:text-white mt-1 text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
              />
              {errors?.designation && (
                <span className="error">{errors?.designation}</span>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3 mt-3">
              <label className="block  tracking-wide text-black font-Poppins text-xs font-semibold">
                Department
              </label>
              <input
                type="text"
                name="department"
                className="w-full focus:bg-black focus:text-white mt-1 text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
              />
              {errors.department && (
                <span className="error">{errors?.department}</span>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mt-4">
            <label className="block  tracking-wide text-black font-Poppins text-xs font-semibold">
              Date of Joining
            </label>
            <input
              type="text"
              name="date"
              className="w-full focus:bg-black focus:text-white mt-1 text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
              placeholder="Date of Joining"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error">{errors?.date}</span>}
          </div>
          <div className="flex justify-center py-10">
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white bg-gradient-to-br w-48 py-2.5 from-orange-300 to-amber-500 focus:ring-2 font-bold font-Poppins rounded-md text-sm text-center"
            >
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StepTwo;
