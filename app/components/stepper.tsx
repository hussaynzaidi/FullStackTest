import React from "react";
import { ProgressStepper, ProgressStep } from "@patternfly/react-core";

export const ProgressStepperBasic: React.FunctionComponent = () => (
  <ProgressStepper aria-label="Basic progress stepper with failure" className="custom-stepper w-full">
    <ProgressStep
      variant="success"
      id="basic-with-failure-step1"
      titleId="basic-with-failure-step1-title"
      aria-label="completed step, step with success"
      style={{ color: '#5876b7' }} 
    />
    <ProgressStep
      variant="success"
      id="basic-with-failure-step2"
      titleId="basic-with-failure-step2-title"
      aria-label="completed step, step with success"
      style={{ color: '#5876b7' }}
    />
    <ProgressStep
      variant="success"
      id="basic-with-failure-step3"
      titleId="basic-with-failure-step3-title"
      aria-label="completed step, step with success"
      style={{ color: '#5876b7' }}
    />
    <ProgressStep
      variant="danger"
      id="basic-with-failure-step4"
      titleId="basic-with-failure-step4-title"
      aria-label="current step"
      style={{ color: '#808080' }}
    />
  </ProgressStepper>
);
