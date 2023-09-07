import React from "react";
import StepperComponent from "../../Components/stepper/StepperComponent";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";
import Stage5 from "./Stage5";


const customSteps = [
  { id: 0,
    label: "Stage 1",
    component: <Stage1 />,
  },
  {
    label: "Stage 2",
    component: <Stage2 />,
  },
  {
    label: "Stage 3",
    component: <Stage3 />,
  },
  {
    label: "Stage 4",
    component: <Stage4 />,
  },
  {
    label: "Stage 5",
    component: <Stage5 />,
  },
];

const Stepper = () => {
  return (
    <div>
      <StepperComponent steps={customSteps} />
    </div>
  );
};

export default Stepper;
