//OOP

// class Dog {
//     constructor(weight, height, color, gender, breed) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//         this.gender = gender;
//         this.breed = breed;
//     }
// }
//
// const arez = new Dog(80,1.5, "block", "domestic", "alabay");
// const bobik = new Dog(30, 50, "orange", "domestic", "chi-hua-hua");
//
// console.log(arez);
// console.log(bobik);
//
// //Абстрактные классы
//
// class Animal {
//     constructor(type, gender, color, voice) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voice = voice;
//     }
//     woice() {
//         console.log(this.voice)
//     }
// }
//
// class Cat extends Animal {
//     constructor(type, gender, color, voice, height, weight) {
//         super(type, gender,color,voice);
//         this.height = height;
//         this.weight = weight;
//     }
// }
//
// const Kassy = new Cat (
//     "pet",
//     "male",
//     "darkBlue",
//     "myaaaau",
//     30,
//     7
// )
// console.log(Kassy)
//
// const Tomka = new Cat (
//     "хищник",
//     "female",
//     "white",
//     "Э не на",
//     1.30,
//     50
// )
// console.log(Tomka)
// Tomka.woice()
// console.log(arez)

class sweetHome {
    constructor(material, height, length, width, floors, roof, form, yearOfBuilding, territory, garden, gateColor) {
        this.material = material;
        this.lenght = length;
        this.width = width;
        this.floors = floors;
        this.roof = roof;
        this.height = height;
        this.form = form;
        this.yearOfBuilding = yearOfBuilding;
        this.territory = territory;
        this.garden = garden;
        this.gateColor = gateColor;

    }
}
class crazyHouse extends sweetHome {
    constructor(material, height, length, width,floors,roof, form, yearOfBuilding, territory, garden, gateColor, roofColor, rooms, windows, gardenTrees,doorColors) {
        super(material, height, length, width,floors,roof,form, yearOfBuilding, territory, garden, gateColor);
        this.roofColor =roofColor;
        this.rooms = rooms;
        this.windows = windows;
        this.gardenTrees = gardenTrees;
        this.doorColors = doorColors;
    }
}
const Home = new crazyHouse("brick",
    6,
    8,
    6,
    2,
    "metal",
    "square",
    2012,
    "1200m2",
    "600m2",
    "Cherry",
    "darkGrey",
    10,
    12,
    "apple,cherry,peach,pear",
    "darkRed,Brown",
    )
console.log(Home)
