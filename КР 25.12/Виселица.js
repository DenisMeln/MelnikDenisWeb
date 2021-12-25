alert("Добро пожаловать в игру Виселица")
let word = prompt("Введите слово:");
let wordLowercase= [];
    for (let i = 0; i < word.length; i++) {
        wordLowercase[i] = " _ ";
        }
    for (let j = 0; j < word.length; j++){
        eval("let id_" + j + "=" + j);
        id_0 = word[0];
        id_1 = word[1];
        id_2 = word[2];
        id_3 = word[3];
        id_4 = word[4];
        id_5 = word[5];
        id_6 = word[6];
        id_7 = word[7];
        }
let lettersNumber = word.length;
let guessedLetters = wordLowercase;
let numberOfAttempts = 7;
alert("Слово состоит из " + lettersNumber + " букв, у Вас есть " + numberOfAttempts + " попыток\n" + wordLowercase.join(" "));
while ((numberOfAttempts !== 0) && (lettersNumber > 0)) {
    let guess = prompt("Введите букву:").toLowerCase();
    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert("Введите только одну букву");
        }
    else {
        for (i = 0; i < word.length; i++) {
            if (guess === guessedLetters[i]) {
                alert("Эта буква уже отгадана")
                break;
                } 
            if (guess === word[i]) {
                guessedLetters[i] = guess;
                lettersNumber--;
                restOfLetter = lettersNumber;
                }
        }
        for (i = 0; i < 1; i++) {
            if (id_0 === guess || id_1 === guess || id_2 === guess || id_3 === guess || id_4 === guess || id_5 === guess || id_6 === guess || id_7 === guess){
                alert("Вы отгадали букву. Количество оставшихся попыток - " + numberOfAttempts + "\n" + guessedLetters.join(" "))
                break;                   
            } else {
                numberOfAttempts--;
                alert("Вы не угадали. Количество оставшихся попыток - " + numberOfAttempts + "\n" + guessedLetters.join(" "))
                break;
                }
        }
        }               
}
if (lettersNumber == 0) {
    if (numberOfAttempts == 1) {
        alert("Вы отгадали все буквы в слове " + guessedLetters.join("") + ", у Вас оставалась 1 попытка");
    }
    if (numberOfAttempts > 1 && numberOfAttempts < 5) {
        alert("Вы отгадали все буквы в слове " + guessedLetters.join("") + ", у Вас оставалось " + numberOfAttempts + " попытки");
    }
    if (numberOfAttempts >= 5 && numberOfAttempts <= 7) {
        alert("Вы отгадали все буквы в слове " + guessedLetters.join("") + ", у Вас оставалось " + numberOfAttempts + " попыток");
    }
    }
else {
    alert("У Вас закончились попытки, попробуйте заново")
}   
