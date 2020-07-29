export class ComponentService {
  constructor() {
    this.numA = document.getElementById("firstInput");
    this.numB = document.getElementById("secondInput");
    this.addButton = document.getElementById("addValue");
    this.result = document.getElementById("result");
  }

  getInputs() {
    return [this.numA.value, this.numB.value];
  }
  setResult(str) {
    this.result.innerHTML = str;
  }
  onClick(handler) {
    this.addButton.addEventListener("click", handler);
  }
}
