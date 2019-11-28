const color = (document.querySelector('h1').style.color = 'blue');

console.log(color);
console.table({ a: 1, b: 2 });
console.error('this is an error!');
console.warn('this is a warning');
console.clear();

console.time('hello');
console.log(color);
console.log(color);
console.log(color);
console.log(color);
console.log(color);
console.timeEnd('hello');
