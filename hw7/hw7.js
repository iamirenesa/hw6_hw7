// 1.
let str = `20`;
for (let a = 20.5; a <= 30; a = a + 0.5) {
    str = str + ` ` + a;
}
console.log(str);


// 2.
let dollar = 27;
for (let a = 10; a <= 100; a = a + 1) {
    if (a % 10 === 0) {
        console.log( `${a} dollars cost ${a * dollar} hryvnas` )
    }
}


// 3.
let num = prompt(`Enter the number`)
for (let a = 1; a <= 100; a = a + 1) {
    let b = a * a;
    if (b <= num) {
        console.log(a);
    }
}


// 4.
let num1 = prompt(`Enter the number`)
let count = 0;
for (let a = 1; a <= num1; a = a + 1) {
    if (num1 % a === 0) {
        count = count + 1;
    }
}
if (count === 2) {
    console.log (true);
} else if (num1 === `1`) {
    console.log (true);
} else {
    console.log (false)
}

// 5.
let num2 = prompt(`Enter the number`)
for (let a = 3; num2 >= a; num2 = num2 / a) {
    if (num2 == 3) {
        console.log(`yes`)
    } else if (num2 / a < a) {
        console.log(`no`)
    }
}
