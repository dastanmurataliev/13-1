// function sayHello() {
//     console.log("Hello")
// }
//
// sayHello();
//
//
// function getFullName(user, age, user2) {
//     if (age < 18){
//         console.log("CLOSE!")
//     }else {
//         console.log(user.first_name, user.last_name)
//     }
// }
//
// const user = {
//     first_name: "John",
//     last_name:  "Barboro"
// }
// // const user2 = {
// //     first_name: "Vito",
// //     last_name: "Scaletto"
// // }
// //
// // getFullName(user, 15);
// // getFullName(user2, 19);
//
// const anonym = function (user) {
//     console.log(user.first_name, user.last_name)
// }
// anonym();() {

function numbers(number1, number2) {
    if (number1 > number2){
        console.log("Первое число больше!")
    } else {
        console.log("Второе число больше!")
    }
}

const number = {
    number1: 5,
    number2: 2
}

numbers();

function twoMass(arr1, arr2 ) {
    console.log(arr1, arr2)
    if (arr1.length > arr2.length) {
        console.log("arr > arr2")
    } else if (arr1.length < arr2.length) {
        console.log("arr > arr2")
    }
}

const arr1 = [12122, 212123, 23213,]
const arr2 = [1212, 122]

twoMass(arr1, arr2);