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

