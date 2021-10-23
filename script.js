/*1*/
console.log("==============1 задание | 1 часть================");

for (let i = 1; i <= 50; i++) {
    console.log(i);
 }

console.log("==============1 задание | 2 часть================");

for (let k = 35; k >= 8; k--){
    console.log(k);
}
/*2*/
console.log("==============2 задание в body================");

let p = 89;
while (p >= 11){
    document.write(p + "</br>")

    p--;
}

/*3*/
console.log("==============3 задание================");

let summ = 0;

for (let i = 0; i <= 100; i++) {
    summ += i;
}

console.log(summ);

/*4*/
console.log("==============4 задание================");

let sum = 0;

for (let i = 1; i <= 5; i++){
    sum += i;
    console.log(sum);
}

/*for (let i = 1; i <= 5; i++){
    //console.log(i);

    sum = 0;

    for (let j = 1; j <= i; j++){
        sum += j;
    }

    console.log(sum);
}*/

/*5*/
console.log("==============5 задание часть 1================");

for (let l = 8; l <= 56; l++){
    if (l % 2 == 0){
        console.log(l)
    }
    
}

console.log("==============5 задание часть 2================");

let q = 8;
while (q <= 56){
    if (q % 2 == 0){
        console.log(q)
        q++;
    }
    q++;
}

/*6*/
console.log("==============6 задание в body================");
document.write("==============6 задание================" + "</br>");

for (let w = 1; w <= 10; w++){
    for (let s = 1; s <= 10; s++){
        document.write(w + "*" + s + "=" +(w*s) + "</br>");
    }
    document.write("</br>")
}
/*7*/
console.log("==============7 задание================");

let n = 1000;
let count = 0;

for ( ; n >=50 ; ) {
    n = n/2;
    count++;
}

console.log(n, count);

/*8*/
console.log("==============8 задание================");

let e = 0,
    d = 0,
    ed;
    
while ((ed = prompt("Введите число", 0)) !== "0" && ed !== null){
    d += +ed
        e++;
}

console.log("Сумма чисел: " + d + "\nСреднее арифметическое: " + (d / e));

/*9*/
console.log("==============9 задание из интернета - для примера=========");

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36';
let cur ='', min, max;

for (let i = 0; i < str.length; i++) {
  cur += str[i];
  if (+str[i] && !+str[i+1]) {
    if (typeof min !== 'number' || cur < +min) min = +cur;
    if (typeof max !== 'number' || cur > +max) max = +cur;
    cur = '';
  }
}
console.log('Min:', min, 'Max:', max)
