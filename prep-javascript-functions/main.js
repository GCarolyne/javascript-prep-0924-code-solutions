function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(90, 90);
console.log('addTwoNumbersResult', sum);

function convertHoursToMinutes(hours) {
  const result = hours * 60;
  return result;
}

const minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  const result = ' Hello ' + name + ' Thank you. ';
  return result;
}

const greeting = getGreeting('Howard');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  const result = (num1 * num2) / 5;
  return result;
}
const sumTimesFive = addAndMultiplyBy5(20, 3);
console.log('sumTimesFive:', sumTimesFive);

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}
const difference = subtractTwoNumbers(10, 3);
console.log('difference', difference);

function getCircleCircumference(radius) {
  const result = 2 * Math.PI * radius;
  return result;
}
const circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullname(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}
const fullName = getFullname('Carolyne', 'Golias');
console.log(fullName);

function cube(number) {
  const value = number * number * number;
  return value;
}

const value = cube('2', '2', '2');
console.log(value);
