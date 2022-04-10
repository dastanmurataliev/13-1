let  star= "*"

while (star.length<=7) {
    console.log(star);
    star+="*";
}

const roster = [];

for (let i = 1; i <= 100; i++) {

    if (i % 15 === 0) {
    roster.push("FizzBuzz");
} else if (i % 3 === 0) {
    roster.push("Fizz");
} else if (i % 5 === 0) {
    roster.push("Buzz");
} else {
    roster.push(i);
}
}

console.log(roster);