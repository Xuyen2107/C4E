// Bài 1
const $numberA = document.getElementById("number-a");
const $numberB = document.getElementById("number-b");
const $sumBtn = document.getElementById("sum-btn");

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

$sumBtn.onclick = function sumPrime() {
    const a = parseInt($numberA.value);
    const b = parseInt($numberB.value);
    let sum = 0;
    let primes = [];
    for (let i = a; i < b; i++) {
        if (isPrime(i)) {
            primes.push(i);
            sum += i;
        }
    }

    let result = `Ouput = `;
    for (let i = 0; i < primes.length; i++) {
        result += primes[i];
        if (i < primes.length - 1) {
            result += " + ";
        }
    }
    result += ` = ${sum}.`;
    document.getElementById("sum").innerHTML = result;
};

//Bài 2

const $starNum = document.getElementById("star-num");
const $starBtn = document.getElementById("btn-star");

$starBtn.onclick = function numberOneTriangle() {
    let num = parseInt($starNum.value);
    if (num < 1 || num > 10) {
        alert("Vui nhập số nguyên trong khoảng từ 1 đến 10");
    } else {
        let starN = "";
        for (let i = 1; i <= num; i++) {
            starN += "*".repeat(i) + "<br>";
        }
        document.getElementById("star").innerHTML = starN;
    }
};
