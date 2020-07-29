import { inputsAreValid } from "./utils/inputs-are-valid";
export const run = (alertService, componentService) => {
  alertService.hideErrors();
  const inputs = componentService.getInputs();
  const parsedInputs = parseInputs(...inputs);
  if (inputsAreValid(...parsedInputs)) {
    const [numA, numB] = parsedInputs;
    componentService.setResult(numA + numB);
  } else {
    componentService.setResult("");
    alertService.handlAdditionError(inputs, parsedInputs);
  }
};
