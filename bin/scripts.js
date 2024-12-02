export const randomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

export const sumRandomNumbers = (first, second) => {
  const sum = first + second;
  return sum;
};

export const restRandomNumbers = (first, second) => {
  const rest = first - second;
  return rest;
};

export const multiplyRandomNumbers = (first, second) => {
  const multiply = first * second;
  return multiply;
};
