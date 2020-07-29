class AlertService {
  constructor() {
    this.errorBox = document.getElementById("error");
  }
  handlAdditionError(inputs, numbers) {
    const message = inputs.reduce((msg, str, idx) => {
      if (inputsAreValid(numbers[idx])) {
        return msg + "";
      } else {
        return msg + `${str} is not a number.`;
      }
    }, "Please enter two valid numbers!");

    this.errorBox.classList.remove("invisible");
    this.errorBox.innerHTML = message;
  }

  hideErrors() {
    this.errorBox.classList.add("invisible");
  }
}
