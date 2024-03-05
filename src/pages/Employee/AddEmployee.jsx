import React, { forwardRef, useState } from "react";
import Header from "../../layouts/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//validation
const validateForm = (data) => {
  let errors = {};
  if (!data.fullName.trim()) {
    errors.fullName = "Fullname is required";
  }
  if (!data.contactNumber.trim()) {
    errors.contactNumber = "Contact Num is required";
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

//check email all element
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

//set State
function AddEmployee() {
  const [formData, setFormData] = useState({
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
      return setFormData({ ...formData, startDate: e });
    } else if (e.target) {
      const { name, value } = e.target;
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
      setFormData({ ...formData, [name]: value });
    }
  };

  //button click
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <Header title="Employee's" />
      <div className="p-5">
        <div className="flex justify-center bg-white  shadow-xl rounded-lg">
          <div className="p-1 w-[70%]">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
              className="object-cover lg:ml-48 ml-24 w-20 flex justify-center rounded-full"
            ></img>
            <form className="max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block  tracking-wide text-black font-Poppins text-xs font-normal">
                    Full Name
                  </label>
                  <input
                    className="block w-full bg-black text-white border rounded-md text-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400 focus:bg-black"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
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
                    className="appearance-none block w-full bg-white text-black border text-sm border-gray-200 rounded py-2 px-2 leading-tight focus:ring-1 focus:ring-gray-400 focus:outline-none focus:bg-white focus:border-white"
                    type="number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone no."
                  />
                  {errors?.contactNumber && (
                    <span className="error">{errors?.contactNumber}</span>
                  )}
                </div>
                <div className="w-full px-3 pt-2">
                  <label className="text-black text-xs font-normal font-poppins">
                    Email address
                  </label>
                  <input
                    className="block w-full bg-white text-black border border-gray-200  text-sm rounded-md py-2 px-2 leading-tight focus:ring-1 focus:ring-gray-400 focus:outline-none focus:bg-white focus:border-white "
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {errors?.email && (
                    <span className="error">{errors?.email}</span>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0 pt-2">
                  <label className="block tracking-wide text-black font-Poppins text-xs font-normal">
                    Date of Birth
                  </label>
                  <input
                    selected={formData.startDate}
                    onChange={handleChange}
                    customInput={<DateInput />}
                    name="startDate"
                    value={formData.startDate}
                    className="w-full bg-white text-black border border-gray-200 text-sm rounded-md py-2 px-2 leading-tight focus:ring-1 focus:ring-gray-400 focus:outline-none focus:bg-white focus:border-white"
                  />
                  {errors?.startDate && (
                    <span className="error">{errors?.startDate}</span>
                  )}
                </div>

                <div className="w-full md:w-1/2 px-3 pt-2">
                  <label className="block tracking-wide text-black text-xs font-normal font-poppins">
                    Blood Group
                  </label>
                  <select
                    className="appearance-none block w-full bg-white text-gray-400 border text-sm border-gray-200 rounded-lg py-2 px-2 leading-tight focus:ring-1 focus:ring-gray-400 focus:outline-none focus:bg-white focus:border-white"
                    name="bloodGroup"
                    value={formData.bloodGroup}
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

                <div className="w-full px-3 mt-2">
                  <label className="text-black text-xs font-normal font-poppins mb-2">
                    Address
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="block w-full bg-white text-black border border-gray-200  text-sm rounded-md py-2 px-2 leading-tight focus:ring-1 focus:ring-gray-400 focus:outline-none focus:bg-white focus:border-white "
                    placeholder="Write your thoughts here..."
                  ></textarea>
                  {errors?.address && (
                    <span className="error">{errors.address}</span>
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
    </div>
  );
}

export default AddEmployee;

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
