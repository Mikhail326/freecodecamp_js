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