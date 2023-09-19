let displayValue = "";
function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
    displayValue = "";
  }
}
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[0-9+\-*/.=]|Enter|Backspace|Escape/.test(key)) {
    event.preventDefault(); // Prevent default behavior for keys we handle
    if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      displayValue = displayValue.slice(0, -1);
      document.getElementById("display").value = displayValue;
    } else if (key === "Escape") {
      clearDisplay();
    } else {
      appendToDisplay(key);
    }
  }
});
