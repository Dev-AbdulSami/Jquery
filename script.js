// alert("Hello world")



// var num = 11

// if(num < 10){
//     alert("Num is lesser")
// }
// else if(num > 10){
//     alert("Num is greater")
// }
// else{
//     alert("Equal")
// }


// var username = "Robert"
// var password = "123"

// var usernameInput = prompt("Enter your username")
// var passwordInput = prompt("Enter your password")

// if(usernameInput == username && passwordInput == password){
//     alert("Login Success")
// }else{
//     alert("Login failed")
// }


// var a = 20
// document.write(a--) // a = a + 1
// document.write(a)
// document.write(a)

// pre and post


// for(var i = 1; i <= 20; i++){
  
//     document.write("Number " + i + "<br>")
// }

// 2 x 1 = 20


// for(var i = 1; i <= 100; i++){

//     document.write("Number " + i + "<br>")
// }

// var randNum = Math.floor(Math.random() * 2) + 1
// var randNum = Math.floor(Math.random() * 66) + 1
// document.write(randNum)




// take number from user
// check even or odd

// take number from user
// check positive or negative

// take number from user
// check digit or number

// take three input number from user
// check greater or lesser 


//user input lena he  // amount
// ek variable hoga jis me account me kitne pese hen wo store krna he
// agr input positive na ho to , ap alert denge amount should be positive
// agr input 500 se km hoga to msg denge , amount should be equal 500 or greater.agr
// agr input account me jitna amount he us se zada hoga to ap msg denge, insufficient amount
// agr ye sb shi hoga to successfully ka msg


// for(var i = 1; i <= 10; i++){
//     if(i == 5){
//         document.write("Five" + "<br>")
//         continue
//     }

//     document.write(i  + "<br>")
// }

// for(var i = 11; i <= 10; i++){
//     document.write(i  + "<br>")
// }

// var i = 1
// while(i <= 10){
//     document.write(i)
//     i++
// }

// var i = 11
// do{
//   document.write(i)
//   i++
// }while(i <= 10)


// var a = 10
// if(a != 10){
//     document.write("Not equal")
// }

// function print(){
//     var a = 10
//     var b = 20
//     var c =  a + b
//     document.write(c)
// }

// print()

// add(10,12)
// function add(a,b){

//     var c = a + b
//     document.write(c)
// }


// add(3,2)

// function test(a,b){
//     return a * b
// }

// var abc = test()
// document.write(abc)


// const a = 10
// const a = 11
// document.write(a)

    // alert(a)
    // var a = 10
    
// let studentDetails = [1,"Robert",983274987,"anc@gmail.com","Consulnet",6832648632]
// console.log(studentDetails.length);


// for(var i = 0; i < studentDetails.length; i++){
// //     document.write(studentDetails[i] + "<br>")
// }

// [1,3,5,7]
// [2,6,10,14]

// [12,7,5,18,21,30,42]

// [5.10,15,20,25]
// 75

// [15,42,8,23,56,3]
// 56


// input ->  12
// output -> number


// input -> A
// output -> Alphabet


// input ->  @
// output special character

// let input = prompt("Enter a character")
// if(input >= 'a' && input <= 'z' || input >= 'A' && input <= 'Z'){
//     alert("Alphabet")
// }
// // else if(input > 0 && input < 9){
// //     alert("Digit")
// // }
// else{
//     alert("Special character")
// }

// let a = document.getElementById("para")
// a.innerHTML = "<h1>Dom Manipulation</h1>"
// // a.style.color = "red"
// // a.style.backgroundColor = "yellow"
// a.classList.add("highlight")
// // a.classList.remove("highlight")


// let a = document.getElementById("input1")
// console.log(a)

// let newDiv = document.createElement("p")
// newDiv.innerText = "My paragraph"
// document.body.appendChild(newDiv)

// let child = document.querySelector("p")
// console.log(child.parentElement)

// let getElement = document.querySelector("p")

// for(var i = 0; i < getElement.length; i++){

//      getElement[i].style.color = "red"
// }

// function callAlert(){
//   let num1 = document.getElementById("num1").value
//   let num2 = document.getElementById("num2").value
//   let operator = document.getElementById("op").value
//   if(operator == "+"){
//     let result = parseInt(num1) + parseInt(num2)
//     alert(result)
//   }

// }

// document.getElementById("btn").addEventListener("click",function(){

//      alert("Clicked")
// })


//   const person = {
//      firstName: "Robert",
//      lastName: "Albert",
//      age: 30,
//      hobbies: ["Coding","Sleeping","Cricket"],
//      address: {
//         street: "123 Main St",
//         city: "New York",
//         country: "USA"
//      },
//      fullName: function(){
//         return this.firstName + " " + this.lastName
//      }
//   };

//  document.write(person.fullName())

// const person = new Object()
// person.firstName = "Testing"
// console.log(person);

// const car = { 
//     brand: "Toyota", 
//     model: "Corolla",
//     year: 2022 
// };

// // console.log(car);

// car.year = 2023

// // console.log(car);

// car.color = "Blue"


// // console.log(car);

// car.color = "Red"

// delete car.color


// car.color = "Red"

// // console.log(car);

// console.log("bgcolor" in car);

// const user = { 
//     name: "Alice", 
//     age: 25,
//     city: "New York",
//     address: "Street no 4"
// };

// for(let key in user){
//     console.log(key+ ":" +user[key]);   
// }

// let a = 10
// document.write("Number is " + a)

// document.write(`Number is ${a}`) // string literal

// const jsonString = '{"name": "Alice", "age": 25}';
// console.log(jsonString);

// const obj = JSON.parse(jsonString)
// console.log(obj);

// const person = { name: "Bob", age: 28 };
// console.log(person);

// const jsonStr = JSON.stringify(person);
// console.log(jsonStr);

// fetch("https://jsonplaceholder.typicode.com/posts/1 ")
// .then(response => response.json()) 
// .then(data => {
//     document.getElementById("post").innerHTML = `
//         <h3>${data.title}</h3>
//         <p>${data.body}</p>
//     `;
// })
// .catch(error => console.error("Error:", error));



  





