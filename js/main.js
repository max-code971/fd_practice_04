// console.log('Hello from file!');

let x = 6;

// console.log(`x = ${x}`);
// console.log('x = ' + x);

// console.log(v);

const y = 10;
const w = {
    name: "Test",
    age: 18
}

w.name = "Name";

console.log(w);

// w = {
//     name: "Name",
//     age: 18
// }

var v = 55;
console.log(v);

//======

let a = 75;
let b = '5';

// || - or
// && - and
// ! - not

if ((a >= 60) && (a <= 100)) {
    console.log('good');
} else {
    console.log('bad');
}

((a >= 60) && (a <= 100)) ? console.log('good') : console.log('bad');
console.log(((a >= 60) && (a <= 100)) ? 'good' : 'bad');

console.log(5 + 8);
console.log(5 + '8');
console.log(5 - 8);
console.log(5 - '8');

// let i = 0;
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;

    console.log("Step:", i);
    // i++;

    //if (i === 5) break;
}

let res = greet('Maxim');
console.log(res);

function greet(name) {
    return "Hello, " + name;
}

const bye = function(name) {
    return `Bye, ${name}`;
}

console.log(bye());

const bye_1 = (name) => `Bye, ${name}`;

// const bye = (name) => {
//     
//     return `Bye, ${name}`;
// }

console.log(bye_1('Max'));


const tobj = {
    name: 'Test',

    greet: () => `Hi, ${this.name}`,

    bye: function() {
        return `Bye, ${this.name}`;
    }
}

console.log(tobj.greet());
console.log(tobj.bye());

const obj1 = {
    a: 5,
    b: 10
}

const obj2 = obj1;
// const obj2 = { ... obj1 };

obj1.a = 55;

console.log(obj1);
console.log(obj2);