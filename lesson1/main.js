const a = "a"; //STRING
const b = 20; //number
const bool = true; //boolean
const bool2 = false;

// console.log(typeof);
// let c = 30;
// console.log(c)

// c = "dfd"

// console.log(a)
// console.log(b)
// console.log(c)

const obj = {
    key: "value",
    first_name: 'Jack',
    data: {
        first_name: 'Barbaro',
        last_name: 'John'
    }
} //object
// console.log(obj)
// console.log(obj.first_name)
// console.log(obj.key)
// console.log(obj.data.first_name)
// console.log(obj.data.last_name)

// const arr = ["adf", 234, true, false, 'afde']
// console.log(arr[0], arr[1])
//
// console.log(arr)

// const name = prompt(message:"как вас зовут?")
// console.log("hello" + "" + name)

const first_number = prompt("первое число")
const last_number = prompt("второе число")
if (first_number > last_number){
    console.log(first_number + ">" +last_number)
} else if (first_number < last_number){
    console.log(last_number + ">" + first_number)
} else {
    alert(first_number + "=" + last_number)
}
