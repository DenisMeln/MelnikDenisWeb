//Задача 1
for(let i = 0; i < 8; i++){
    console.log("#".repeat(i));
}

//Задача 2
let s = ``;
for(i = 1; i < 101; i++){
    if(i % 3 == 0){
        if(i % 5 == 0){
            s += " FizzBuzz";
        } else {
        s += " Fizz"; 
        }
    }
    else if(i % 5 == 0){
        s += " Buzz";
    } else s = s + " " + i;
    
}
console.log(s);

//Задача 3
let chessVar1 = "# # # #";
let chessVar2 = " # # # #";
let chessVar3 = "";
for(i = 0; i < 8; i++){
    if(i % 2 == 0){
        chessVar3 += chessVar1 + "\n";
    } else {
        chessVar3 += chessVar2 + "\n";
    }
}
console.log(chessVar3);

//Задача 4
function min(n1, n2){
    if (n1 < n2){
        minVar = n1;
    } else minVar = n2;
    return minVar;
}
a1 = 2;
b1 = 10;
console.log(`min ${a1}, ${b1}: ${min(a1, b1)}`);

//Задача 5
countVar = 0;
function countBs(s){
    for (i = 0;i < s.length -1; i++){
        if (s.charAt(i) == "B"){
            countVar ++;
        }
    }
    return countVar;
}
s = "BUBBLEGUM";
console.log(`B in ${s}: ${countBs(s)}`);

countVar = 0;
function countChar(s, B){
    for (i = 0;i < s.length -1; i++){
        if (s.charAt(i) == B){
            countVar ++;
        }
    }
    return countVar;
}
B = "U";
console.log(`${B} in ${s}: ${countChar(s, B)}`);

//Задача 6

j = 0;
function range(m1, m2, d = 1){
    let m = [];
    if (d > 0){
     for(i = m1; i < m2 + 1; i = i + d){
        m[j] = i;
        j++;
    }   
    } else {
        for(i = m1; i > m2 - 1; i = i + d){
            m[j] = i;
            j++;
        }    
    }
    j = 0;
    return m;
}
console.log(`range(1, 10, 2): ${range(1, 10, 2)}`);
console.log(`range(5, 2, -1): ${range(5, 2, -1)}`);

function sum(m){
    let sumVar = 0;
    for(i = 0; i < m.length; i++){
        sumVar += m[i];
    }
    return sumVar;
}
m3 = range(1, 10, 2);
m4 = range(5, 2, -1);
console.log(`sum ${m3}: ${sum(m3)}`);
console.log(`sum ${m4}: ${sum(m4)}`);

//Задача 7

function reserveArray(m){
    let resVar = [];
    j = 0;
    for(i = m.length - 1; i > -1; i--){
        resVar[j] = m[i];
        j++;
    }
    j = 0;
    return resVar;
}
console.log(`reserveArray ${m3}: ${reserveArray(m3)}`);
console.log(`reserveArray ${m4}: ${reserveArray(m4)}`);

function reserveArrayInPlace(m){
    bufVar = 0;
    for(i = 0; i < m.length/2; i++){
        bufVar = m[m.length - i - 1];
        m[m.length - i - 1] = m[i];
        m[i] = bufVar;
    }
    return m;
}
console.log(`reserveArrayInPlace ${m3}: ${reserveArrayInPlace(m3)}`);
console.log(`reserveArrayInPlace ${m4}: ${reserveArrayInPlace(m4)}`);

//Задача 8
function arrayToList(array){
    list = null;
    for (i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list};
    }
    return list;
}
function listToArray(list){
    let array = [];
    while (list != null){
        array.push(list.value);
        list = list.rest;
    }
    return array;
}
function prepend(add, list){
    list = {value: add, rest: list};
    return list;
}
let atl = arrayToList([8, 24, 3, -2]);
console.log(atl);
console.log(listToArray(atl));
console.log(prepend(4, atl));

//Задача 9
let deepEqual = function (x, y) {
    if (x === y) {
        return true;
    } else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
            return false;
        for (let i in x) {
            if (y.hasOwnProperty(i)) {
                if (!deepEqual(x[i], y[i]))
                    return false;
            } else
                return false;
        }
        return true;
    } else
        return false;
}
let obj = {here: {is: "an", other: "3"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an", other: "3"}, object: 2}));
console.log('\n');

//Задача 10
let sumArr = [[1,11], [2,22], [3,33]];
console.log(sumArr.reduce(function(a, b) {
    return a.concat(b);
},
[]));

//Задача 11
let ANCESTRY_FILE = JSON.stringify([
    { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
    { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
    { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
    { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
    { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
    { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
    { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
    { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
    { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
    { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
    { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
    { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
    { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
    { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
    { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
    { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
    { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
    { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
    { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
    { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
    { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
    { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
    { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
    { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
    { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
    { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
    { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
    { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
])
let ancestry = JSON.parse(ANCESTRY_FILE);
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
let byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});
let ageDiff = ancestry.filter(function(metes) {
    return byName[metes.mother] != null;
}).map(function(metes) {
    return metes.born - byName[metes.mother].born;
});
console.log(average(ageDiff));

//Задача 12
function groupBy(arr, func) {
    let filtrVar = {};
    arr.forEach(function(person) {
        let i = func(person);
        if (filtrVar[i] === undefined) {
            filtrVar[i] = [];
        }
        filtrVar[i].push(person)
    });
    return filtrVar;
}
function getCentury(person) {
    return Math.ceil(person.died / 100);
}
let centVar = groupBy(ancestry, getCentury);
for (century in centVar) {
    centVar[century] = average(centVar[century].map(function(person){return person.died - person.born}));
    console.log(century + ": " + centVar[century]);
}

//Задача 13
function every(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i])) {
            return false
        }
    }
    return true;
};
function some(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return true
        }
    }
    return false;
};
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));