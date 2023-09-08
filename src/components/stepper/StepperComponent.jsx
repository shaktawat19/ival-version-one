import React, { useState } from "react";
import "./StepperComponent.css";
import { Button } from "@progress/kendo-react-buttons";

const StepperComponent = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => setActiveStep(index);
  const handleNextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const handlePreviousStep = () => setActiveStep((prevStep) => prevStep - 1);

  const getClipPath = (index) => {
    switch (index) {
      case 0:
        return "polygon(75% 0%, 82% 50%, 75% 100%, 0% 100%, 0% 50%, 0% 0%)";
      case steps.length - 1:
        return "polygon(100% 0, 100% 50%, 100% 99%, 0% 100%, 10% 50%, 0% 0%)";
      default:
        return "";
    }
  };
  return (
    <>
      <div className="stepper-container">
        {steps?.map((step, index) => (
          <div
            key={index}
            className={`step ${
              index < activeStep
                ? "completed"
                : index === activeStep
                ? "active"
                : ""
            }`}
            onClick={() => handleStepClick(index)}
            style={{
              clipPath: getClipPath(index),
            }}
          >
            <div className="step-number">{index + 1}</div>
          </div>
        ))}
      </div>
      <div className="step-content">
        {steps[activeStep] ? steps[activeStep].component : "Step not found"}
      </div>
      <Button
        onClick={handleNextStep}
        disabled={activeStep === steps?.length - 1}
      >
        Next
      </Button>
      <Button onClick={handlePreviousStep} disabled={activeStep === 0}>
        Previous
      </Button>
    </>
  );
};

export default StepperComponent;
