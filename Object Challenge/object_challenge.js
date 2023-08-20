// Step 1

// An array of objets called library.
const library = [
    {
        title : 'Harry Potter and the Philosophers stone',
        author : 'J.K. Rowling',
        status : {
            own : true,
            reading : false,
            read : false
        }
    },
    {
        title : 'Harry Potter and the Goblet of Fire',
        author : 'J.K. Rowling',
        status : {
            own : true,
            reading : false,
            read : false
        }
    },
    {
        title : 'Harry Potter and the Prisoner of Azkaban',
        author : 'J.K. Rowling',
        status : {
            own : true,
            reading : false,
            read : false
        }
    }
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const {title : firstBook} = library[0];
console.log(firstBook);

// Step 4
const JsonFile = JSON.stringify(library);
console.log(JsonFile);