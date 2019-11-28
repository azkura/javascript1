// var, let, const

// var name = 'john Doe';
// console.log(name);
// name = 'zack';
// console.log(name);

// var greeting;
// console.log(greeting);
// greeting = 'manga amiga';
// console.log(greeting);

// // variables inclued : letters, numbers, _, $
// // CAN NOT START WITH NUMBERS!

// // Multi word vars
// var firstName = 'haz' // Camel case
// var first_name = 'haz' // Underscore (php...)
// var FirstName = 'haz' // Pascal case (c#...) or classes
// var firstname // not recommanded

// Let
// let name;
// name = 'john Doe';
// console.log(name);
// name = 'zack';
// console.log(name);

//CONST
//we have to assign a value!

// const name = 'john Doe';
// console.log(name);

// we can't reassign!
// name = 'zack';
// console.log(name);

const person = {
  name: 'aziz',
  age: 37
};
person.name = 'zizou';
person.age = 36;

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers.push(9);
console.log(numbers);
