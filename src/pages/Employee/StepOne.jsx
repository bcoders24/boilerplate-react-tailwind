import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//validation
const validateForm = (data) => {
  let errors = {};
  if (!data.fullName.trim()) {
    errors.fullName = "FullName is required";
  }
  if (!data.contactNumber.trim()) {
    errors.contactNumber = "Contact is required";
  }
  if (!data.startDate) {
    errors.startDate = "Date is required";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Invalid email address";
  }
  if (!data.bloodGroup.trim()) {
    errors.bloodGroup = "Blood Group is required";
  }
  if (!data.address.trim()) {
    errors.address = "Address is required";
  }
  return errors;
};

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

//set State
function StepOne({ setFormData }) {
  const [stepOneData, setStepOneData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    startDate: "",
    bloodGroup: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  //onchange method
  const handleChange = (e) => {
    if (!e.target) {
      return setStepOneData({ ...stepOneData, startDate: e });
    } else if (e.target) {
      const { name, value } = e.target;
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
      setStepOneData({ ...stepOneData, [name]: value });
    }
  };

  //button click
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(stepOneData);
    if (Object.keys(validationErrors).length === 0) {
      setFormData((prev) => ({
        step: 2,
        data: { ...prev.data, ...stepOneData },
      }));
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="p-2 h-full">
      <div className="flex lg:justify-center  sm:h-auto md:h-full lg:items-center">
        <div className="p-1">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
            className="object-cover lg:ml-48 ml-16 w-20  rounded-full"
          />
          <form className="max-w-lg">
            <div className="flex flex-wrap -mx-3 gap-y-2">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label className="block  tracking-wide text-black font-Poppins text-xs font-normal">
                  Full Name
                </label>
                <input
                  className="w-full focus:bg-black focus:text-white text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
                  type="text"
                  name="fullName"
                  value={stepOneData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                {errors?.fullName && (
                  <span className="error">{errors?.fullName}</span>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block  tracking-wide text-black  text-xs  font-normal font-poppins">
                  Contact Number
                </label>
                <input
                  className="appearance-none w-full focus:bg-black focus:text-white text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
                  type="tel"
                  name="contactNumber"
                  value={stepOneData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone no."
                />
                {errors?.contactNumber && (
                  <span className="error">{errors?.contactNumber}</span>
                )}
              </div>
              <div className="w-full px-3 ">
                <label className="text-black text-xs font-normal font-poppins">
                  Email address
                </label>
                <input
                  className="w-full focus:bg-black focus:text-white text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
                  name="email"
                  type="email"
                  value={stepOneData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors?.email && (
                  <span className="error">{errors?.email}</span>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label className="block tracking-wide text-black font-Poppins text-xs font-normal">
                  Date of Birth
                </label>
                <input
                  className="w-full focus:bg-black focus:text-white text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
                  selected={stepOneData.startDate}
                  onChange={handleChange}
                  customInput={<DateInput />}
                  name="startDate"
                  value={stepOneData.startDate}
                />
                {errors?.startDate && (
                  <span className="error">{errors?.startDate}</span>
                )}
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block tracking-wide text-black text-xs font-normal font-poppins">
                  Blood Group
                </label>
                <select
                  className="w-full focus:bg-black focus:text-white text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
                  name="bloodGroup"
                  value={stepOneData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                {errors?.bloodGroup && (
                  <span className="error">{errors.bloodGroup}</span>
                )}
              </div>

              <div className="w-full px-3">
                <label className="text-black text-xs font-normal font-poppins">
                  Address
                </label>
                <textarea
                  rows="3"
                  className="w-full focus:bg-black focus:text-white text-gray-600 border rounded-md text-sm p-2 leading-tight focus:outline-none"
                  name="address"
                  type="text"
                  value={stepOneData.address}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors?.address && (
                  <span className="error">{errors?.address}</span>
                )}
              </div>
            </div>
            <div className="flex justify-center py-2">
              <button
                onClick={handleSubmit}
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
  );
}

export default StepOne;

const DateInput = forwardRef(({ value, onClick, onChange }, ref) => {
  return (
    <div className="flex w-full bg-white text-black border  border-gray-200  text-sm rounded-md py-1.5 px-2 leading-tight focus:ring-1 focus:ring-gray-400 focus:outline-none focus:bg-white focus:border-white ">
      <span className="px-2">
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
      </span>
      <input
        type="text"
        name="startDate"
        onClick={onClick}
        value={value}
        onChange={onChange}
        ref={ref}
        placeholder="Select date"
        className="focus:outline-none"
      />
    </div>
  );
});
