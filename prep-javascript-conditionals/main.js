function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

const isAdultResult = isAdult(20);
console.log('isAdultResult', isAdultResult);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}

const didStudentPassResult = didStudentPass(90);
console.log('didStudentPassResult', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'Grade result: F';
  } else if (score < 70) {
    return 'Grade result: D';
  } else if (score < 80) {
    return 'Grade result: C';
  } else if (score < 90) {
    return 'Grade result: B';
  } else if (score < 100) {
    return 'Grade result: A';
  } else if (score > 100) {
    return 'Grade result:A++';
  }
}

const gradeCalculatorResult = gradeCalculator(50);
console.log('gradeCalculatorResult', gradeCalculatorResult);
const gradeCalculatorResult2 = gradeCalculator(65);
console.log('gradeCalculatorResult2', gradeCalculatorResult2);
const gradeCalculatorResult3 = gradeCalculator(75);
console.log('gradeCalculatorResult3', gradeCalculatorResult3);
const gradeCalculatorResult4 = gradeCalculator(85);
console.log('gradeCalculatorResult4', gradeCalculatorResult4);
const gradeCalculatorResult5 = gradeCalculator(95);
console.log('gradeCalculatorResult5', gradeCalculatorResult5);
const gradeCalculatorResult6 = gradeCalculator(120);
console.log('gradeCalculatorResult6', gradeCalculatorResult6);

function seasonMessenger(season) {
  if ('summer' === season) {
    return 'it is a hot day';
  } else if ('spring' === season) {
    return 'the flowers are blooming';
  } else if ('autumn' === season) {
    return 'the leaves are changing colors';
  } else if ('winter' === season) {
    return 'it is cold today';
  } else if (season) {
    return 'please enter a valid season';
  }
}

const seasonMessengerResult = seasonMessenger('summer');
console.log('seasonMessengerResult', seasonMessengerResult);

const seasonMessengerResult1 = seasonMessenger('autumn');
console.log('seasonMessengerResult1', seasonMessengerResult1);

const seasonMessengerResult2 = seasonMessenger('winter');
console.log('seasonMessengerResult2', seasonMessengerResult2);

const seasonMessengerResult3 = seasonMessenger('spring');
console.log('seasonMessengerResult3', seasonMessengerResult3);

const seasonMessengerResult4 = seasonMessenger('hightime');
console.log('seasonMessengerResult4', seasonMessengerResult4);

function dayDetector(dayOfTheWeek) {
  if ('saturday' === dayOfTheWeek) {
    return 'have a good weekend';
  } else if ('sunday' === dayOfTheWeek) {
    return 'Have a good weekend';
  } else if (dayOfTheWeek) {
    return 'It is a weekday!';
  }
}

const dayDetectorResult = dayDetector('sunday');
console.log('dayDetectorResult', dayDetectorResult);

const dayDetectorResult1 = dayDetector('monday');
console.log('dayDetectorResult1', dayDetectorResult1);
