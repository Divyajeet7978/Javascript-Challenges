let x;
let y;

const person = {
    name : 'Divyajeet',
    age : 22,
    isAdmin : false,
    poverty : 'no',
    address : {
        village_city : 'Tarada',
        district : 'Kendrapara',
        state : 'Odisha',
        pin : 754134
    },
    hobbies : ['Gaming', 'Coding', 'Reading', 'listening to Music']
};

x = person.name;
x = person.age;
x = person.address.pin;
x = person.hobbies[0];
person['isAdmin'] = true;
x = person.isAdmin;

delete person.poverty;
person.hasChildren = 'no';

person.greet = function() {
    console.log(`Hello, I am ${this.name} and my age is ${this.age}. 
    I am a ${this.isAdmin} Admin. 
    Currently, I live in ${this.address.state} alone as I have ${this.hasChildren} children. 
    My hobbies are ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]} and ${this.hobbies[3]}.`);
};

person.greet();

// x = person;
// x = Object.keys(person);
// x = person.length;
// x = Object.entries(person);
// x = person.hasOwnProperty('poverty');

console.log(y);