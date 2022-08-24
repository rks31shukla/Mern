// console.log("Hello world! from external js file");
// var name = "RK"; // string datatype
// console.log(name);
// var $num = 10.3; // Number datatype - integer,float,decimal,percentages
// var _bool = true;
// // var !a = 2; not valid variable name

// var amp;
// console.log(amp); // undefined datatype - means  non-existent
// var undef;
// amp = "&";
// console.log(name, "  ", amp + "   " + $num, undef); //implicit type conversion/coercion

// // alert(name);

// // var age = prompt("Enter age!");

// // console.log(age);

// // Basic operators
// var num1 = 15;
// var num2 = 2;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// // Comparison Operators
// x=10;

// console.log(num1 <= num2);
// console.log(num1 >= num2);
// console.log(num1 < num2);
// console.log(num1 < num2);
// console.log('==',x == '10');
// console.log(num1 != num2);
// console.log('===',x === '10'); //  equal value and equal type(without type casting)
// console.log(num1 !== num2); //  not equal value or not equal type

// //Logical Operators
// console.log(num1 <= num2 && num1>num2);
// console.log(num1 <= num2 || num1>num2);
// console.log(!(num1 <= num2) );

//Condiional Statements
// // var grade = prompt('Enter your grades :');

// if(grade<40){
//     console.log('You cannot go to next class.');
// } else if(grade > 40 && grade <45){
//     console.log('You cannot go to next class but you can enter the exam');
// }else{
//     console.log('you can go to next class');
// }

// Ternary operator

// var n =9;
// n<8?console.log('Yes'):console.log('no');

// // SWITCH CASE
// var day = prompt('Enter day');
// switch (day) {
//     case 'saturday':
//         console.log('i like sat!');
//         break;
//     case 'monday':
//         console.log('i like mon!');
//         break;
//     default:
//         console.log('i dont like any day');
//         break;
// }

// Looping
// 1.whileloop

// var n=25;
// while ( n<100) {
//     n%7===0 ? console.log(n):console.log('');
//     n++;
// }

// 2.ForLoop
for (let n = 25; n < 100; n++) {
  n % 7 === 0 && n % 5 === 0 ? console.log(n) : null;
}

// //CONTINUE AND BREAK
// for(let i =1;i<10;i++){
//     if (i%2!==0) {
//         continue;
//     }
//         console.log(i)
// }
// var n=1;
// while(n<10){
//     console.log(n);
//     if (n==5) {
//         break;
//     } else {
//         n++;
//     }

// }

// // Functions

// function cube(num){
//     console.log(num*num*num);
// }

// function returnCube(num){
//     return (num*num*num);
// }

// FUNCTION DECLARATIONS AND EXPRESSION

// DECLARATION
// function calculateAge(birthYear){
//     return 2022-birthYear;
// }

// //EXPRESSION
// var calculateAge = function(birthYear){
//     return 2022-birthYear;
// }

// FUNCTION SCOPE

// function sayName() {
//   var Name = "Ramakant";
//   console.log(Name);
// }

// console.log(Name); //not accessible
// // sayName();
// var Name = "Ravi";
// console.log(Name);
// sayName()

// function  sayHi(){
//     var myWord='Hi there';
//     console.log(myWord);
//     console.log(yourWord);  //error
//     sayBye();
//     function sayBye(){
//         var yourWord = 'Bye'
//         console.log(myWord);
//     }
// }

// sayHi();