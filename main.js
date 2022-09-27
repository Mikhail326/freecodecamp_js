// -------------------------------------- Start basic course JS ------------------------------------

// lesson 1 //

/* My new commit */
// My new commit //

// lesson 2 //    
var myName;

// lesson 3 //
var a;
a = 7

// lesson 4 //
var a;
a = 7;
var b;
b = a;

// lesson 5 //
var a = 9;

// lesson 6 //
var myFirstName = 'Mikhail';
var myLastName = 'Stelmakh';

// lesson 7 //
var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1;
b = b + 5;
c = c + " String!";

// lesson 8 //
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// lesson 9 //
let catName = "Oliver";
let catSound = "Meow!";

// lesson 10 //
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// lesson 11 //
const sum = 10 + 10;

// lesson 12 //
const difference = 45 - 33;

// lesson 13 //
const product = 8 * 10;

// lesson 14 //
const quotient = 66 / 33;

// lesson 15 //
let myVar = 87;
myVar++

// lesson 16 //
let myNewVar = 11;
myNewVar--

// lesson 17 //
const ourDecimal = 5.7;
// Only change code below this line
const myDecimal = 6.2

// lesson 18 //
const productNew = 2.0 * 2.5;

// lesson 19 //
const quotientNew = 4.4 / 2.0; // Change this line

// lesson 20 //
const remainder = 11 % 3;

// lesson 21 //
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// lesson 22 //
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

// lesson 23 //
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// lesson 24 //
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

// lesson 25 //
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// lesson 26 //
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// lesson 27 //
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// lesson 28 //
const myStr = "This is the start." + " " + "This is the end.";

// lesson 29 //
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

// lesson 30 //
const myName = "Mikhail";
const myStr = "My name is " + myName + " and I am well!";

// lesson 31 //
const someAdjective = "well";
let myStr = "Learning to code is ";
myStr += someAdjective

// lesson 32 //
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// lesson 33 //
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// lesson 34 //
let myStr = "Jello World";
myStr = "Hello World";

// lesson 35 //
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];

// lesson 36 //
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];

// lesson 37 //
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// lesson 38 //
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;

// lesson 39 //
const myArray = ['Hello', 1, 'World', 2];

// lesson 40 //
const myArray = [[], []];

// lesson 41 //
const myArray = [50, 60, 70];
const myData = myArray[0]

// lesson 42 //
const myArray = [18, 64, 99];
myArray[0] = 45

// lesson 43 //
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// lesson 44 //
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

// lesson 45 //
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop()

// lesson 46 //
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift()

// lesson 47 //
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

// lesson 48 //
const myList = [
    ['Banane', 10],
    ['Orange', 20],
    ['Apple', 30],
    ['Potates', 40],
    ['Milk', 50]
];

// lesson 49 //
function reusableFunction() {
    console.log('Hi World')
}
reusableFunction()

// lesson 50 //
function functionWithArgs(a, b) {
    console.log(a + b)
}
functionWithArgs(10, 20)

// lesson 51 //
function timesFive(a) {
    return a * 5
}
timesFive(2)

// lesson 52 //
const myGlobal = 10;
oopsGlobal = 5
function fun1() {
    // Assign 5 to oopsGlobal Here
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// lesson 53 //
function myLocalScope() {
    const myVar = 5
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

// lesson 54 //
const outerWear = "T-Shirt";
function myOutfit() {
    const outerWear = 'sweater'
    return outerWear;
}
myOutfit();

// lesson 55 //
let sum = 0;
function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum = sum + 5;
}
addThree();
addFive();

// lesson 56 //
let processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7)


// lesson 57 //
function nextInLine(arr, item) {
    arr.push(item)
    const removeItem = arr.shift()
    return removeItem;
}
const testArr = [1, 2, 3, 4, 5];

// lesson 58 //
function welcomeToBooleans() {
    return true;
}

// lesson 59 //
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return 'Yes, that was true'
    }
    return 'No, that was false'
}

// lesson 60 //
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

// lesson 61 //
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);

// lesson 62 //
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");


// lesson 63 //
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);

// lesson 64 //
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);

// lesson 65 //
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
testGreaterThan(10);

// lesson 66 //
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);

// lesson 67 //
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);

// lesson 68 //
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);

// lesson 69 //
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

// lesson 70 //
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);

// lesson 71 //
function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
testElse(4);

// lesson 72 //
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
testElseIf(7);

// lesson 73 //
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
orderMyLogic(7);

// lesson 74 //
function testSize(num) {
    if (num < 5) {
        return 'Tiny'
    } else if (num < 10) {
        return 'Small'
    } else if (num < 15) {
        return 'Medium'
    } else if (num < 20) {
        return 'Large'
    } else if (num >= 20) {
        return 'Huge'
    }
    return "Change Me";
}
testSize(7);

// lesson 75 //
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }
    return "Change Me";
}
golfScore(5, 4);

// lesson 76 //
function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
    }
    return answer;
}
caseInSwitch(1);

// lesson 77 //
function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff'
    }
    return answer;
}
switchOfStuff(1);

// lesson 78 //
function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
            break;
    }
    return answer;
}
sequentialSizes(1);

// lesson 79 //
function chainToSwitch(val) {
    let answer = "";
    switch (val) {
        case 'bob':
            answer = 'Marley';
            break;
        case 42:
            answer = 'The Answer';
            break;
        case 1:
            answer = 'There is no #1';
            break;
        case 99:
            answer = 'Missed me by this much!';
            break;
        case 7:
            answer = 'Ate Nine';
            break;
    }
    return answer;
}
chainToSwitch(7);

// lesson 80 //
function isLess(a, b) {
    return a < b
}
isLess(10, 15);

// lesson 80 //
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);

// lesson 81 //
let count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    if (count > 0) {
        return count + ' Bet'
    } else if (count === 0 || count < 0) {
        return count + ' Hold'
    }
    return "Change Me";
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

// lesson 82 //
const myDog = {
    name: 'Bobik',
    legs: 4,
    tails: 1,
    friends: [1, 2, 3, 4, 5]
};

// lesson 83 //
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;


// lesson 84 //
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

// lesson 85 //
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];

// lesson 86 //
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = 'Happy Coder'

// lesson 87 //
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = 'woof'

// lesson 88 //
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails

// lesson 89 //
function phoneticLookup(val) {
    let result = "";
    const lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    }
    result = lookup[val]

    return result;
}
phoneticLookup("charlie");

// lesson 90 //
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    }
    return 'Not Found'
}

// lesson 91 //
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        artist: 'Mikhail Stelmakh',
        title: 'New Albom',
        release_year: 2022,
        formats: ['MP3', 'WAVE']
    }
];

// lesson 92 //
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

// lesson 93 //
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
const secondTree = myPlants[1].list[1];

// lesson 94 //
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value
    } else if (prop === 'tracks' && !records[id].hasOwnProperty('tracks')) {
        records[id][prop] = [value]
    } else if (prop === 'tracks' && value.length > 0) {
        records[id][prop].push(value)
    } else if (value === '') {
        delete records[id][prop]
    }
    return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// lesson 95 //
const myArray = [];
let i = 5
while (i >= 0) {
    myArray.push(i)
    i--
}

// lesson 96 //
const myArray = [];
for (let i = 1; i <= 5; i++) {
    myArray.push(i)
}

// lesson 97 //
const myArray = [];
for (let i = 1; i < 10; i += 2) {
    myArray.push(i)
}

// lesson 98 //
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
    myArray.push(i)
}

// lesson 99 //
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i]
}

// lesson 100 //
function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// lesson 101 //
const myArray = [];
let i = 10;
do {
    myArray.push(i);
    i++;
}
while (i < 11)

// lesson 102 //
function sum(arr, n) {
    if (n <= 0) {
        return 0
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
}


// lesson 103 //
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop]
            } else {
                return 'No such property'
            }
        }
    }
    return 'No such contact'
}
lookUpProfile("Akira", "likes");

// lesson 104 //
function randomFraction() {
    return Math.random();
}

// lesson 105 //
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

// lesson 106 //
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// lesson 107 //
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");

// lesson 108 //
function convertToInteger(str) {
    return parseInt(str, 2)
}
convertToInteger("10011");

// lesson 109 //
function checkEqual(a, b) {
    return a === b ? 'Equal' : 'Not Equal'
}
checkEqual(1, 2);

// lesson 110 //
function checkSign(num) {
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero'
}
checkSign(10);

// lesson 111 //
function countdown(n) {
    if (n < 1) {
        return []
    } else {
        const arr = countdown(n - 1)
        arr.unshift(n)
        return arr
    }
}

// lesson 112 //
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return []
    } else {
        const arr = rangeOfNumbers(startNum, endNum - 1)
        arr.push(endNum)
        return arr
    }
};

// lesson 113 //
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}


// -------------------------------------- Completed basic course JS ------------------------------------

// -------------------------------------- Start ES6 course JS ------------------------------------

// lesson 1

function checkScope() {
    var i = 'function scope';
    if (true) {
        i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

// lesson 2
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2
    s[1] = 5
    s[2] = 7
}
editInPlace();

// lesson 3
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS)
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// lesson 4
const magic = () => {
    return new Date();
};

// lesson 5
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// lesson 6
const increment = (number, value = 1) => number + value;

// lesson 7
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

// lesson 8
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);

// lesson 9
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;

// lesson 10
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// lesson 11
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// lesson 12
let a = 8, b = 6;
[a, b] = [b, a]

// lesson 13
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);

// lesson 14
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;

// lesson 15
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return failureItems;
}
const failuresList = makeList(result.failure);

// lesson 16
const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    };
};

// lesson 17
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// lesson 18
class Vegetable {
    constructor(name) {
        this.name = name
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// lesson 18
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit
    }
    get temperature() {
        return 5 / 9 * (this._fahrenheit - 32)
    }
    set temperature(celsius) {
        this._fahrenheit = celsius * 9.0 / 5 + 32
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// lesson 19
// <html>
//   <body>
// <script type="module" src="index.js"></script>
//   </body>
// </html>

// lesson 20
export const uppercaseString = (string) => {
    return string.toUpperCase();
}
export const lowercaseString = (string) => {
    return string.toLowerCase()
}

// lesson 21
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

// lesson 22
import * as stringFunctions from "./string_functions.js"
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// lesson 23
export default function subtract(x, y) {
    return x - y;
}

// lesson 24
import subtract from "./math_functions.js";
subtract(7, 4);

// lesson 25
const makeServerRequest = new Promise((resolve, reject) => { });

// lesson 26
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    if (responseFromServer) {
        resolve('We got the data');
    } else {
        reject('Data not received');
    }
});

// lesson 27
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
makeServerRequest.then(result => {
    console.log(result)
})

// lesson 28
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
makeServerRequest.then(result => {
    console.log(result);
});
makeServerRequest.catch(error => {
    console.log(error);
});



//   ----------------Regular Expressions------------

// lesson 1
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// lesson 2
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

// lesson 3
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// lesson 4
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

// lesson 5
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// lesson 6
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex);

// lesson 7
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// lesson 8
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

// lesson 9
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

// lesson 10
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

// lesson 11
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi;
let result = quoteSample.match(myRegex);

// lesson 12
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);

// lesson 13
let chewieRegex = /Aa*/g;
let result = chewieQuote.match(chewieRegex);

// lesson 14
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h*?1>/;
let result = text.match(myRegex);

// lesson 15
let reCriminals = /C+.*?/g;



//   ----------------Debugging------------

// lesson 1
let a = 5;
let b = 1;
a++;
console.log(a);

// lesson 2
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output)
console.clear()

// lesson 3
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

// lesson 4
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// lesson 5
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// lesson 6
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

// lesson 7
let x = 7;
let y = 9;
let result = "to come";
if (x == y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}
console.log(result);

// lesson 8
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}
let result = getNine();
console.log(result);

//   -------------------Basic Data Structures-----------------

// lesson 1
let yourArray = [1, 'hello', true, 2, 3];

// lesson 2
let myArray = ["a", "b", "c", "d"];
myArray[1] = 'x';
console.log(myArray);

// lesson 3
function mixedNumbers(arr) {
    arr.push(7, 'VIII', 9)
    arr.unshift('I', 2, 'three')
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

// lesson 4
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

// lesson 5
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0, 2)
arr.splice(1, 2)
arr.splice(2, 2)
console.log(arr);

// lesson 6
function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// lesson 7
function forecast(arr) {
    const result = arr.slice(2, 4)
    return result;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// lesson 8
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr])
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

// lesson 9
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']// Change this line
    return sentence;
}

console.log(spreadOut());

// lesson 10
function quickCheck(arr, elem) {
    return arr.indexOf(elem) !== -1
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// lesson 11
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i].indexOf(elem) == -1) {
                newArr.push(arr[i])
                break;
            }
        }
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// lesson 12
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
    [
        ['deep', 2, false]
    ],
    [
        [
            ['deeper', 3, true]
        ]
    ],
    [
        [
            [
                [
                    'deepest', 5, false
                ]
            ]
        ]
    ]
];

// lesson 13
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
console.log(foods);

// lesson 14
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45;
console.log(userActivity);

// lesson 15
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
function checkInventory(scannedItem) {
    return foods[scannedItem]
}
console.log(checkInventory("apples"));

// lesson 16
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods);

// lesson 17
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function isEveryoneHere(userObj) {
    return userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')
}
console.log(isEveryoneHere(users));

// lesson 18
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}
function countOnline(usersObj) {
    const result = []
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            result.push(true)
        }
    }
    return result.length
}
console.log(countOnline(users));

// lesson 19
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function getArrayOfUsers(obj) {
    return Object.keys(obj)
}
console.log(getArrayOfUsers(users));

// lesson 20
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};
function addFriend(userObj, friend) {
    userObj.data.friends.push(friend)
    return userObj.data.friends
}
console.log(addFriend(user, 'Pete'));

// -----------------------Basic Algorithm Scripting-----------------

// lesson 1
function convertCtoF(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
convertCtoF(30);

// lesson 2
function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString("hello");

// lesson 3
function factorialize(num) {
    let res = []
    for (let i = 1; i <= num; i++) {
        res.push(i)
    }

    return res.reduce((acc, el) => el * acc, 1)
}
factorialize(5);

// lesson 4
function findLongestWordLength(str) {
    const res = []
    str.split(' ').map(el => res.push(el.length))
    return res.sort((a, b) => b - a)[0]
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// lesson 5
function largestOfFour(arr) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].sort((a, b) => b - a)[0])
    }
    return res
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// lesson 6
function confirmEnding(str, target) {
    return str.substring(str.length - target.length, str.length) == target
}
confirmEnding("Bastian", "n");

// lesson 7
function repeatStringNumTimes(str, num) {
    let res = ''
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            res += str
        }
    }
    return res;
}
repeatStringNumTimes("abc", 4);

// lesson 8
function truncateString(str, num) {
    if (str.length < num || str.length === num) {
        return str
    }
    return str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// lesson 9
function findElement(arr, func) {
    const filterArr = arr.filter(func)

    return filterArr[0]
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

// lesson 10
function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    } else {
        return false
    }
}
booWho(null);