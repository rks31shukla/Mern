'use strict'; //  imposes restrictions on js code
// p=2;
// console.log(p);//not defined - due to strict mode



// // var h1Element = document.querySelector('h1');
// // // console.log(h1Element);

// // h1Element.style.color='blue';

// // var isYellow =false;

// // var bodyElement = document.querySelector('body');
// // setInterval(function () {               //  setInterval(function,timeinterval)
// //     if(isYellow){
// //         bodyElement.style.background = 'pink';
// //     }else{
// //         bodyElement.style.background = 'cyan';
// //     }
// //     isYellow = !isYellow;
// // },900);

// // //      Different ways of selecting Html elements

// // var selectWithClass = document.getElementsByClassName('background');
// // console.log(selectWithClass);

// // var selectWithTag = document.getElementsByTagName('h1');
// // console.log(selectWithTag);

// // var selectWithqueryId = document.querySelector('#loremPara');
// // console.log(selectWithqueryId);

// // var selectWithqueryClass = document.querySelector('.background');
// // console.log(selectWithqueryClass);

// // var selectWithqueryAllClass = document.querySelectorAll('.background');
// // console.log(selectWithqueryAllClass);

// /////////// MANIPULATING METHODS ////////////////

// // 1. Changing the style of an Element

// // 2. Adding and removing classes

// // 3. Change the content of an element

// // 4. Change the 'Attribute(src,href ...)'

// // var divToManipulate = document.querySelector(".background");

// //Way 1.
// // console.log(divToManipulate);

// // divToManipulate.style.height = '50px';
// // divToManipulate.style.width = '400px';
// // divToManipulate.style.backgroundColor = 'red';
// // divToManipulate.style.border = '5px solid black' ;
// // divToManipulate.style.fontSize = '30px';

// //Way 2.

// // divToManipulate.classList.add('addClass');
// // divToManipulate.classList.remove('addClass');

// // divToManipulate.classList.toggle('addClass');

// //Way 3.

// // var para = document.querySelector('#loremPara');

// // console.log(para.innerHTML);

// // para.textContent  = 'I have a para';        //strong tag is gone

// // console.log(para.innerHTML);

// // para.innerHTML = 'I have innerHtml <strong>para</strong>';

// //Way 4.

// // var myLink = document.querySelector('a');

// // console.log(myLink.getAttribute('href'));

// // myLink.setAttribute('href','https://facebook.com');

// // console.log(myLink.getAttribute('href'));

// ///////////// EVENT HANDLERS ///////////////

// var button = document.querySelector("#btn1");

// var heading = document.querySelector("#heading");

// button.addEventListener("click", function () {
//   console.log("you clicked butn");
//   heading.style.backgroundColor = "cyan";
// });

// var ul = document.querySelector("ul");
// ul.addEventListener("click", function () {
//   console.log("You clicked the ul tag!");
//   ul.style.backgroundColor = "skyblue";
// });

// var listItems = document.querySelectorAll("li");
// console.log(listItems);

// listItems[0].addEventListener("click", function () {
//   console.log("You clicked the li 1 tag!");
//   this.style.backgroundColor = "blue";
// });

// listItems[1].addEventListener("click", function () {
//   console.log("You clicked the li 2 tag!");
//   this.style.backgroundColor = "pink";
// });

// listItems[2].addEventListener("click", function () {
//   console.log("You clicked the li 3 tag!");
//   this.style.backgroundColor = "orange";
// });

// var para = document.querySelector("#loremPara");

// function toggleBg() {
//   para.classList.toggle("toggleBackground");
// }

// para.addEventListener("mouseover", toggleBg);//here toggleBg is used without () , it is a callBack function : called whenever event is occured

// var firstTodoItem= document.querySelector('.todoItem');

// firstTodoItem.addEventListener('mouseover',function () {
//     this.style.backgroundColor = 'yellow';
//     this.style.color = 'blue';
// });
// firstTodoItem.addEventListener('mouseout',function () {
//     this.style.backgroundColor = 'white';
//     this.style.color = 'black';
// });

var todoListItems = document.querySelectorAll(".todoItem");

todoListItems.forEach((i) => {
  i.addEventListener("mouseover", function () {
    this.style.backgroundColor = "yellow";
    this.style.color = "blue";
  });
  i.addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
    this.style.color = "black";
  });
  i.addEventListener("click", function () {
    this.classList.add('okay');
  });

});
