const person = {
  firstName: 'Carolyne',
  lastName: 'Golias',
  hobby: 'pickleball',
};
console.log(person);
console.log(typeof person);

const fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);
console.log(typeof fullName);

person.job = 'coffee';
console.log('The persons new job is:', person.job);

person['previousJob'] = 'tea';
console.log("the person's previous job is", person['previousJob']);

console.log(person);
console.log(typeof person);
