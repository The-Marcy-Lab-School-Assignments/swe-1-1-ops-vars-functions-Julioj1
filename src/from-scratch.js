// Basic Variable & Expression Functions
// TODO: Calculate and return the area of a rectangle
const calculateArea = (width, height) => {
  return width * height;
}

// TODO: Return true if the number is even, false if odd
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const convertToFahrenheit = (temp) => {
  // TODO: Convert celsius to fahrenheit using the formula: (celsius * 9/5) + 32
  let celsius = temp;
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
};

// String & Variable Functions
const createGreeting = (name) => {
  // TODO: Return a greeting string like "Hello, [name]!"
  return `Hello, ${name}!`;
};

const getInitials = (firstName, lastName) => {
  // TODO: Return initials by taking first letter of each name
  let firstLetter = "";
  let secondLetter = "";
  for (let i = 0; i < firstName.length; i++) {
    firstLetter = firstName[0];
  }
  for (let i = 0; i < lastName.length; i++) {
    secondLetter = lastName[0];
  }
  return firstLetter + secondLetter;
};

const formatPrice = (price) => {
  // TODO: Return price formatted as "$[price].00" (e.g., "$5.00")
  return `$${price}.00`;
};

// Function Logic Functions
const getLarger = (num1, num2) => {
  // TODO: Return the larger of the two numbers
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

const isValidAge = (age) => {
  // TODO: Return true if age is between 0 and 120, false otherwise
  if (age >= 0 && age <= 120) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
};
