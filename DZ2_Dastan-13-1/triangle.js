let  star= "*"

while (star.length<=7) {
    console.log(star);
    star+="*";
}

const roster = [];

for (let i = 1; i <= 101; i++){

    if (i % 15 === 0) {
    console.log(i, "FizzBuzz");
} else if (i % 3 === 0) {
    console.log(i, "Fizz");
} else if (i % 5 === 0) {
    console.log(i, "Buzz");
} else {
    console.log(i)
}
}
