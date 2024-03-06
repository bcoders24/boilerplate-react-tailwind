import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

import Header from "../../layouts/Header";
import Stepper from "../../components/Stepper";

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    step: 1,
    data: {},
  });
  console.log(formData);
  return (
    <div className="h-full">
      <Header title="Employee's" />
      <div className="h-[calc(100%-72px)]  w-full flex items-center p-4">
        <div className="h-full w-9/12 bg-gray-100 rounded-s-md">
          {formData.step === 1 && <StepOne setFormData={setFormData} />}
          {formData.step === 2 && <StepTwo setFormData={setFormData} />}
          {formData.step === 3 && <StepThree setFormData={setFormData} />}
        </div>
        <div className="h-full w-4/12 bg-gray-100 rounded-e-md py-8 p-3">
          <Stepper activeStep={formData.step} />
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
