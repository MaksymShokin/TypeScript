//npm install -g typescript
//compile tsc using-ts.ts
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
var number;
number = 5;
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var x = {
    name: 'Max',
    age: 30
};
var array = ['20', '30'];
var hobbies;
hobbies = ['Sports', 'Cooking'];
var books;
books = [20, 'good'];
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby);
}
