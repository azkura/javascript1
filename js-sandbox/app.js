const id = '100';

if (typeof id === 'undefined') {
  console.log('correct');
} else {
  console.log(`id: ${id}`);
}

const name = 'steve';
const age = 66;

if (age <= 8) {
  console.log(`${name} is a child`);
} else if (age > 8 && age <= 18) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is adult`);
}

if (age < 16 || age > 65) {
  console.log(`${name} can not be registrated`);
} else {
  console.log('please registrated');
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`you run on ${day}`);
