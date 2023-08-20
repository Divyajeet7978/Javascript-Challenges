// Challenge 1

function getCelsius (F) {
    const c = F - 32
    const c1 = c * 5 / 9
    return c1
}
 
console.log(`The temperature is ${getCelsius(32)} \xB0`);

// Challenge 2

((numbers) => {
    const Min = Math.min(...numbers)
    const Max = Math.max(...numbers)
    console.log(`Min : ${Min}, Max :${Max}`);
})([1,2,3,4,5,6,7,8,9,10]);

// Challenge 3

((len,brd) => {
    const area = len * brd;
    const log = `The area of a rectangle with a length of ${len} and a width of ${brd} is ${area}`;
    console.log(log);
})(10 , 5);
