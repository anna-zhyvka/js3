"use strict";
//1task
let x = +prompt('Enter a number');
if (x != 0) {
    console.log("True")
}else{
    console.log("False")
}
//2task
let time = +prompt( 'Number?');
if (time>=1 && time<=15) {
    console.log('1 quarter')
} else if (time>=16&& time<=30) {
    console.log('2 quarter')
} else if (time>=31&& time<=45) {
    console.log('3 quarter')
} else if (time>=46 && time<=59) {
    console.log('4 quarter')
}
//3task
let day = +prompt('Day?');
if (day>=1 && day<=10) {
    console.log('1 part')
} else if (day>=11 && day<=20) {
    console.log('2 part')
} else if (day>=21 && day<=31) {
    console.log('3 part')
}
//4 task
switch ('5') {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
}
//5 task
let first = + prompt('First number?');
let second = + prompt('Second number?');
if (first>second) {
    console.log('first');
}  else if (second>first){
        console.log('second')
} else if (first=second) {
    console.log('first=second')
}
//6 task




