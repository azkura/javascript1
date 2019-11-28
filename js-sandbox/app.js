const person = {
  firstName: 'john',
  lastName: 'doe',
  age: 30,
  adresse: {
    city: 'miami',
    state: 'FL'
  },
  hobbies: ['sports', 'moovies'],
  getBithday: function() {
    return 2017 - this.age;
  }
};

let val;
val = person.adresse.city;
val = person.hobbies[0];
val = person.getBithday();

console.log(val);

const people = [
  { name: 'zid', age: 16 },
  { name: 'red', age: 19 },
  { name: 'miki', age: 20 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

const journee = new Date();
let today = journee;
today = journee.getDay();
today = journee.getMonth();
today = journee.getDate();
console.log(today);
