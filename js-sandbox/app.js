const array = [
  'carrot',
  'potatoes',
  'orange',
  'kiwi',
  'pinnaple',
  'banana',
  'apple',
  'pear',
  'ciron',
  'crawberry'
];

for (let i = 0; i < array.length; i++) {
  const arr = array[i];
  if (arr === 'banana') {
    console.log(`${arr}! this is my favorite!`);
    continue;
  }
  if (arr === 'apple') {
    console.log('break ...');
    break;
  }
  console.log(arr);
}
