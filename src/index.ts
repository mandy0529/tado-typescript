const returnStr = (str: string | null) => {
    if (str) {
        
        return str[0].toUpperCase()+str.substr(1);
    }
}

console.log(returnStr(null))

// array
let array1: string[] = ['a', 'b'];
let array2: Array<string> = array1;
console.log(array2);

// enum
enum Color {
    red='this is red',
    blue='this is blue',
    green='this is green'
};

let getColor: Color = Color.green;
console.log(Color.blue, Color.green, Color.red);

// any

// const email = document.querySelector('.email');

// if (email) {
//     email.addEventListener('button', (e) => {
//         const input =<HTMLInputElement> e.currentTarget;
//         console.log(input.value);
//     })
// }

// interface

interface Person {
     name: string,
    age:number
};

let profile: Person = {
    name: 'minji',
    age:26,
}
profile.name = "gan";
console.log(profile.name);

// interfac32

interface A {
 
    [key:string]:string|number,
};

const a: A = {};
a.minji = 'minji';
a.y = 1;

// call
interface SUM {
    (a: number, b: number): number,
    prop1?: string;
}

const sum: SUM = (a, b) => a + b;
// sum.prop1 = 'minji';