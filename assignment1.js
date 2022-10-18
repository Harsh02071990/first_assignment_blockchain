//Q1- finding leap year or not
let a = 2025;
let year = a%4==0? "Leap year":"Not leap year"
console.log(year);


//Q2- converting degc to degf and degf to degc
let degc = 60;
let degf =((degc/5)*9 + 32);
console.log("60degC is",degf,"degF");

 degf= 45;
 degc= (degf-32)*(5/9);
console.log("45degF is",degc,"degc");

//Q3 to find factorial of a number

let num = 8;
let factorial=1;

for(num; num>=1; num--) {
    factorial=factorial*num;
    console.log(factorial);
}

