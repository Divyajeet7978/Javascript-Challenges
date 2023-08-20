// // score = 1;
// console.log(score);

// if (true) {
//     score = score + 2;
// }
 
// console.log(score);

// const arr = [1,2,3,4];

// arr.push(5);

// console.log(arr);

// const person = {};

// person.name = 'Divyajeet Panda';

// person.email = 'example@gmail.com';

// person.address = 'India';

// console.log(person);

// // let x;

// const name = 'Divyajeet';

// const age = 22;

// // x =  `My Name is ${name} and my age is ${age}`;

// const s = new String('Hello World');
// const s = 'Hello World';

// x = s.__proto__;

// x= typeof s;

// x = s.toUpperCase();
// x = s.toLowerCase();
// x = s.indexOf('l');
// x = s.length;
// x = s.substring(0, 7);

// x = s.replace('Hello', 'Fuck');
// x = s.split('');

// console.log(x);

function createHelloWorld() {
    return function() {
      console.log('Hello World');
    }
  }
  
  // Example usage
  const f = createHelloWorld();
  console.log(f()); // "Hello World"
  



