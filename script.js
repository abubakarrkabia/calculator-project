let display = document.getElementById('display');

// Function to append numbers and operators to the display
function appendNumber(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to calculate the result
function calculate() {
  try {
    let result = eval(display.value);

    // Handle division by zero
    if (display.value.includes('/') && display.value.endsWith('/0')) {
      result = "Cannot divide by zero";
    }

    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
