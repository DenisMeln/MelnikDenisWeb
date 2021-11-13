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
