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
