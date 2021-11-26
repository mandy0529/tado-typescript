"use strict";
const returnStr = (str) => {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
};
console.log(returnStr(null));
// array
let array1 = ['a', 'b'];
let array2 = array1;
console.log(array2);
// enum
var Color;
(function (Color) {
    Color["red"] = "this is red";
    Color["blue"] = "this is blue";
    Color["green"] = "this is green";
})(Color || (Color = {}));
;
let getColor = Color.green;
console.log(Color.blue, Color.green, Color.red);
;
let profile = {
    name: 'minji',
    age: 26,
};
profile.name = "gan";
console.log(profile.name);
;
const a = {};
a.minji = 'minji';
a.y = 1;
const sum = (a, b) => a + b;
// sum.prop1 = 'minji';
