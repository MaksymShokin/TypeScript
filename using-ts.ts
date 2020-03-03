//npm install -g typescript

//compile tsc using-ts.ts

const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

let number: number;

number = 5;


button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

const x: {
  name: string;
  age: number
} = {
  name: 'Max',
  age: 30
};

let array = ['20','30'];

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let books: any[];
books = [20, 'good'];

for (const hobby of hobbies) {
    console.log(hobby)
}

//tuple

let tuple: [number, string];
tuple = [10, 'max'];

