const random = Array(4);
var arr = [];
var guess;
let input = document.getElementById('try');
let btn = document.getElementById('submit');
let attempts = 0;
btn.disabled = true;
input.focus();

for (var i = 0; i < random.length; i++) {
    random[i] = Math.floor(Math.random() * 10);
}

const str1 = random.join('');

console.log('randomInt = ' + str1);

function save() {
    arr = [];
    var attempt = document.getElementById("try").value;
    arr.push(attempt);
    guess = arr.toString();
    return guess;
}

function guessed(guess) {
    const element = document.getElementById("guess");
    element.innerHTML += guess + "<br>";
}

function rightPlace(guess) {
    const mapfn = (arg) => Number(arg);
    const newArr = Array.from(guess, mapfn);
    console.log(newArr);
    var right = 0;

    for (var i = 0; i < 4; i++) {
        if (newArr[i] == random[i]) {
            right++;
        }
    }
    const element = document.getElementById("correct");
    element.innerHTML += right + "<br>";

    if (right == 4) {
        alert("Congratulation! You got the right number. The number is " + str1);
        btn.disabled = true;
        input.disabled = true;
    }
}

function wrongPlace(guess) {
    const newArr = Array.from(guess);
    var wrong = 0;

    for (var i = 0; i < 4; i++) {
        if (newArr[i] != random[i]) {
            for (var j = 0; j < 4; j++) {
                if (random[i] == newArr[j]) {
                    wrong++;
                }
            }
        }
    }
    const element = document.getElementById("incorrect");
    element.innerHTML += wrong + "<br>";

    if (attempts == 9) {
        alert("Sorry, you failed to find the number. The number is " + str1);
        btn.disabled = true;
        input.disabled = true;
    }
}

input.addEventListener('input', function (evt) {
    if (input.value.length < 4) {
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
    }
});

document.getElementById('submit').addEventListener('click', function () {
    save();
    guessed(guess);
    rightPlace(guess);
    wrongPlace(guess);
    input.value = null;
    btn.disabled = true;
    input.focus();
    attempts++;
})