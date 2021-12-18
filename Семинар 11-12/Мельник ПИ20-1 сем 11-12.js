//Задание 1
let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;
city1.getName = function(){
    return this.name;
}
city1.exportStr = function(){
    s = "";
        for (let k in this){
            if (typeof this[k] != 'function'){
                s = s + k + '=' + this[k] + '\\';
            }
        }
        s = s + 'n';
        return s;
}
city1.getCity = getObj;

//Задание 2
let city2 = {
    name: "ГородM",
    population: 1e6,
    getName: function(){
        return this.name;
    },
    exportStr: function(){
        s = "";
            for (let k in this){
                if (typeof this[k] != 'function'){
                    s = s + k + '=' + this[k] + '\\';
                }
            }
            s = s +'n';
            return s;
    },
    getCity: getObj,
}

//Задание 3
console.log(`Имя города 1: ${city1.getName()}\nИмя города 2: ${city2.getName()}`);

//Задание 4
console.log(`${city1.exportStr()} ${city2.exportStr()}`);

//Задание 5
function getObj(){
    return this
}
console.log(city1.getCity(), city2.getCity());


//Задание 6
let obj = {
    method1 : function(){
        return this;
    },
    method2 : function(){
        return this;
    },
    method3 : function(){
        return 'метод3';    
    }
}
console.log(obj.method1().method2().method3());

//Задание 7
let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(`d1 = ${d1}`);
console.log(`d1[6] = ${d1[6]}, d1[7] = ${d1[7]}`);
//Задание 8
let d2 = [45, 78, 10, 3];
let sum2 = 0;
for(i = 0; i < d2.length; i++){
    sum2 += d2[i];
}
console.log(`Сумма массива d2 - ${sum2}`);

//Задание 9 
let d3 = [45, 78, 10, 3];
d3[7] = 100;
sum3 = 0;
for(i in d3){
    sum3 += d3[i];
}
console.log(`Сумма массива d3 - ${sum3}`);

//Задание 10
function my(a, b){
        if(a < b) return 1;
        if(a > b) return -1;
        return 0;
}
let d4 = [45, 78, 10, 3];
console.log(d4.sort(my));

//Задание 11
let d5 = [];
for(i = 0; i < 3; i++){
    d5[i] = [];
    for(j = 0; j < 4; j++){
        d5[i][j] = 5;
    }
}
console.log(`d5 = ${d5}`);

//Задание 12
function Vector(x, y){
    this.x = x;
    this.y = y;
    this.length = length;
    this.plus = function(v){
        return new Vector(this.x + v.x, this.y + v.y);
    }
    this.minus = function(v){
        return new Vector(this.x - v.x, this.y - v.y);
    }
    this.getlength = function(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    this.length = this.getlength();
}
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

//Задание 13
function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}
function repeat(string, mult) {
    let newStr = "";
    for (let i = 0; i < mult; ++i)
        newStr += string;
    return newStr;
}
function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, row) {
        return Math.max(width, row.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    let newStr = [];
    for (let i = 0; i < height; ++i) {
        let row = this.text[i] || "";
        newStr.push(row + repeat(" ", width - row.length));
    }
    return newStr;
};
StretchCell.prototype.minWidth = function() {
    return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
    return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
}
let sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

//Задание 14
function logFive(array) {
    for (var i = 0; i < 5; i++) {
      if (i == array.length)
        break;
      console.log(array[i]);
    }
}
function ArraySeq(array) {
    return array;
}

function RangeSeq(from, to) {
    let arr = [];
    for (let i = from; i <= to; i++) {
        arr.push(i);
    }
   return arr;
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));

//Задание 15
function Card(from, to){
    this.from = from;
    this.to = to;
    this.show = function(){
        alert(`from ${this.from} to ${this.to}`);
    }
}
let c1 = new Card("Екатеринбург", "Москва");
c1.show();

//Задание 16
class Human {
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    getInfo(){
        return `${this.name}, ${this.age}, ${this.height}`;
    }

    get firstname(){
        return this.name;
    }
}

let humans = [
    new Human("Коля", 23, 180), 
    new Human("Даша", 19, 170), 
    new Human("Ваня", 18, 192), 
    new Human("Петя", 45, 178), 
    new Human("Вася", 34, 197), 
    new Human("Джони", 40, 168), 
    new Human("Катя", 37, 160), 
    new Human("Петя", 29, 200), 
    new Human("Соня", 21, 172), 
    new Human("Женя", 25, 175), 
];

console.log(humans);
console.log(humans[0].getInfo());
console.log(humans[1].firstname);

//Задание 17
function sortByName(array){
    return array.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
}

function sortByHeight(array){
    return array.sort(function(a, b){
        if(a.height < b.height) { return -1; }
        if(a.height > b.height) { return 1; }
        return 0;
    })
}

console.log(`Отсортировано по росту:`);
console.log(sortByHeight(humans));

//Задание 18
dt1 = new Date(2045, 0, 1, 0, 0, 0);
console.log(dt1);

//Задание 19
dt2 = Date.now() / 1000;
console.log(`${dt2} секунд прошло с 1 января 1970 г.`);

//Задание 20
function getDays(year, month){
    return new Date(year, month, 0).getDate();
}
console.log(`${getDays(2019, 2)} дней в феврале 2019`);
console.log(`${getDays(2020, 2)} дней в феврале 2020`);

//Задание 22
Number.prototype.isOdd = function(){
    if(this % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(new Number(3).isOdd());
console.log(new Number(4).isOdd());

//Задание 23
function Chain(value){
    this.value = value,
    this.plus = function(x) {
        this.value += x;
        return this;
    },
    this.minus = function(x) {
        this.value -= x;
        return this;
    },
    this.mult = function(x) {
        this.value *= x;
        return this;
    },
    this.div = function(x) {
        this.value /= x;
        return this;
    }
}

console.log(new Chain(21).plus(11).minus(4).mult(2).div(7).value);

//Задание 24
function Unit(x, y){
    this.x = x;
    this.y = y;
}

Unit.prototype = {
    get x() {
        return this.x;
    },
    get y() {
        return this.y;
    },
    set x(value) {
        this.x = value;
    },
    set y(value) {
        this.y = value;
    }
}

function Fighter(power) {
    this.power = power;
}

Fighter.prototype = Unit.prototype + {
    get power() {
        return power;
    },
    set power(value) {
        this.power = value;
    }
}

fighter1 = new Fighter(15);
fighter1.x = 222;
fighter1.y = 40;
console.log(`x = ${fighter1.x}, y = ${fighter1.y}, power = ${fighter1.power}`);
