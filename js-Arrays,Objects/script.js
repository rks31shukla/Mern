// ARRAYS
// declaration
// var students = ['Rk','RS','AP'];

//declaration usinh new
// var cats = new Array();

// console.log(students);
// console.log(students[0]);

// students[0]='RC';

// console.log(students);
// console.log(students[0]);

// students[3]='767';
// console.log(students);
// // see output
// students[9]='gfcgf7';
// console.log(students);

//Array Methods

// var students = ["Sheldon", "Leonard", "Penny", "Raj"];

//1. Push method - adds a new item to the end of the Array

// studentLength = students.push("Monty");
// console.log(studentLength);

//pop method - removes the last item from Array
// students.pop();
// console.log(students);

//unshift method - adds new item to the beginning of Array

// var cats = ['cat1','cat2','cat3'];

// cats.unshift('cat4');
// console.log(cats);

// // shift method  -  removes item from beginning

// cats.shift();
// console.log(cats);

//indexOf Method

// console.log( cats.indexOf('cat3'));

// //slice method
// var friends = ['Ross','Rachel','Joey','Chandler'];
// var closeFriends = friends.slice(1,3);
// console.log(closeFriends);
// console.log(friends);

// // Array Quiz

// var books = ['Harry Potter','Hobbit','Hunger Games','Little Prince'];

// console.log(books[books.length-1]);

// var films = [
//     ['hobbit1','hobbit2','hobbit3'],
//     ['matrix1','matrix2','matrix3'],
//     ['godFather1','godFather2','godFather3']
// ];

// console.log(films[2][2]);

//  TRAVERSE THROUGH ARRAYS

// for (let i = 0; i < books.length; i++) {
//     const b = books[i];
//     console.log(b);
// }

// //  USING For Each

// books.forEach(function(i){
//     console.log(i);
// });

// films.forEach(i => {
//     console.log(i);
// });

// ARRAY QUIZ

// var num =new Array();
// for (i = 0; i <= 20; i++) {
//      num.push(i);
// }
// console.log(num);

// num.forEach(i => {
//     i%5==0?console.log(i):null;
// });

// ------------ OBJECTS ------------------------

/*      Wrong Way
var student1=['Ritik' , 36 ,'Btech'];
var student2=[23,'BCA' ,'Monica'];      

console.log(student1[2]);
console.log(student2[1]);
*/

// Create  an Object

// var student =new Object();
// student.name ;
// student.course;
// student.age=77;
// console.log(student.age);
// console.log(typeof(student));

//  Another way in key : value pairs

// var student = {
//     name : 'Ritik',
//     age : 34,
//     course : 'Btech'
// };

// //  Accessing data members of Object

// //      Using . notation

// console.log(student.name);

// //      Using [] brackets with property name in quotes

// console.log(student['age']);

// //      Also

// var temp = 'course';

// console.log(student[temp]);

// //      Update value

// student.age+=1;
// console.log(student['age']);

// var student11 = {
//     name : 'Amy',
//     age : 25,
//     friends : ['Howard','Bernadette','Raj'],
//     bestFriend : {                                      //      Object inside another object as an attribute
//         firstName : 'Penny',
//         birthYear : 1998
//     }
// };

// console.log(student11.bestFriend.firstName);

// var friend = student11.bestFriend;
// console.log(friend,typeof(friend));
// 
    //  Adding property to OBJECTS
// 
// var colors = {};
// console.log(typeof colors); // object type
// 
// colors.orange = { code: 127 };
// console.log(colors.orange.code);
// 
// colors.black = { code: [4, 5, 6] };
// console.log(colors.black.code);
// 
// colors["pink"] = { code: 666 };
// console.log(colors.pink.code);
// 
// 
// var blogPosts = [
    // {
        // title : 'weather' ,
        // content : 'it is rainy today',
        // comments : [
            // {
                // name : 'John',
                // lastName:'Travolta'
            // },
            // {
                // name :'Froda',
                // lastName :'Bagins'
            // }
        // ]
    // },
    // {
        // title : 'weather' ,
        // content : 'I do not like weather'
    // }
// ]; 
// 
// console.log(blogPosts[0].comments[1].name);
// 
//  

//       Object Quiz

// var universities = [
//     {
//         name :'MIT',
//         hasGone : false,
//         year : 1890
//     },
//     {
//         name :'Howard',
//         hasGone : true,
//         year : 1900
//     },
//     {
//         name :'Oxford',
//         hasGone : true,
//         year : 1800
//     },
// ];

// universities.forEach(i => {
//     i.hasGone ? console.log('Name :',i.name,'Year :',i.year) : console.log(i.name);
// });


///////////// Object Methods /////////////////
// 
// var Sheldon = {
    // name : 'Sheldon',
    // age : 35,
    // hasGone :true,
    // friends : ['Penny', 'Raj'],
    // say : function () {                 //  Object method
        // console.log('say Hi Sheldon');
    // }
// };
// 
// var Leonard = {
    // name : 'Leonard',
    // age : 35,
    // hasGone :true,
    // friends : ['Penny', 'Raj'],
    // say : function () {                 //  Object method
        // console.log('say Hi Leonard');
    // }
// };
// 
// Sheldon.say();
// 
// Leonard.say();
// 
// 
// 


///////////////////  THIS KEYWORD /////////////
//  1. When it is called in an ordinary function
//  -   The 'this' keyword points to 'global object' which is 'window'.
// eg
// console.log(this);
// 
// function add() {
    // console.log(2+4);
    // console.log(this);
// }
// add();


//  2. When it is called in a method(in an object)
//  -   The 'this' keyword points to the object which has this method.

//eg 

var Raj = {
    name : 'Raj',
    year :1989,
    sayHi : function () {
        console.log(this);
        console.log(this.name);

        function someFunc() {               // refers to the global object 'window'
            console.log(this);
        }
        someFunc();
    }
};
Raj.sayHi();