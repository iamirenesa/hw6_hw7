// 1.
let str = `10`;

for (let a = 11; a <= 20; a = a + 1) {
    str = str + `,` + a;
}

console.log(str);


// 2.
for (let a = 10; a <= 20; a = a + 1) {
    console.log(`square ${a} = ${a * a}`);
}


// 3.
for (let a = 1; a <= 10; a = a + 1) {
    console.log(`${a} * 7 = ${a * 7}`);
}


// 4.
let sum = 0;

for (let a = 1; a <= 15; a = a + 1) {
    sum = sum + a;
}

console.log(sum);


// 5.
let prod = 15;

for (let a = 16; a <= 35; a = a + 1) {
    prod = prod * a;
}

console.log(prod);


// 6.
let sum1 = 0;

for (let a = 1; a <= 500; a = a + 1) {
    sum1 = sum1 + a;
}

console.log(sum1 / 500);


// 7.
let sum2 = 0;
for (let a = 30; a <= 80; a = a + 1) {
    if (a % 2 === 0) {
        sum2 = sum2 + a;
    }
}
console.log(sum2);


// 8.
for (let a = 100; a <= 200; a = a + 1) {
    if (a % 3 === 0) {
        console.log(a);
    }
}


// 9.
let num = prompt(`Enter the number`)
for (let a = 1; a <= num; a = a + 1) {
    let c = num / a;
    if (num % a === 0) {
        console.log(c);
        }
}


// 10.
let num1 = prompt(`Enter the number`)
for (let a = 1; a <= num1; a = a + 1) {
    let c = num1 / a;
    if (c % 2 === 0) {
        console.log(c);
    }
}


// 11.
let sum3 = 0;
let num2 = prompt(`Enter the number`)
for (let a = 1; a <= num2; a = a + 1) {
    let c = num2 / a;
    if (c % 2 === 0) {
        sum3 = sum3 + c;
    }
}
console.log(sum3);


// 12.
for (let a = 1; a <= 10; a = a + 1) {
    for (let b = 1; b <= 10; b = b + 1)
    console.log(`${a} * ${b} = ${a * b}`);
}