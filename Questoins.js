
// 1. let str = "My name is Wecode Academy" string ko space se split krke length btani hai.

let strSplit = "My name is Wecode Academy";
let strToArr = strSplit.split(" ");
console.log(strToArr.length);

// // 2. String palindrome check ababa, helleh ?

   let strP = "str madam rts";
   let checkP = "Is Palindrome";
   for(let i = 0; i < strP.length; i++){
      if(strP[i].toLowerCase() === strP.at(-(i+1))){
            continue;
      }else{
            checkP = "Not Palindrome";
            break;
      }
   }
   console.log(checkP);



// // 3. 9581894461
// // 95818***
// // ***94461
// // 958*944*

let str4 = "9581894461";
let sub1 = str4.substring(0, 3);
let pad1 = sub1.padEnd(5, "*");
let sub2 = str4.substring(5,8);
let pad2 = sub2.padEnd(5,"*")
let con = pad1.concat(pad2);
console.log(con)

// // 4. Reverse String 
// // Hello -> olleH
// // Bye -> eyB

let stri = "Hello";
let strRev = "";
for(let i=1; i<=stri.length; i++){
   strRev += stri.at(-i);
}
console.log(strRev);


// // 5. Captialize first character 
// // wecode -> Wecode 
// // hello -> Hello

let str = "wecode"
let strArr = str.split(" ")
let strCap = "";
for(let val of strArr){
     strCap += val.charAt(0).toUpperCase().concat(val.slice(1))
  }
console.log(strCap);


// // 6. String
// // uppercase ->  lowercase 
// // lowercase -> uppercase
// // HeLlo -> hElLO
// // WECodE -> wecODe

let strSmallCap1 = "HeLlo";
let strSmallCap2 = "";
for(let val of strSmallCap1){
   strSmallCap2 += val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase();
}
console.log(strSmallCap2)

// // 7. Camelize
// Hello World -> helloWorld
// my name is Sajid -> myNameIsSajid
// Wecode Academy -> wecodeAcademy

let strSpace = "my name is Sajid";
let Camelize = strSpace.split(" ");
for(let i=0; i < Camelize.length; i++){
    Camelize[i] = Camelize[i].charAt(0).toUpperCase().concat(Camelize[i].slice(1));
}
console.log(Camelize.join(" "))


// //8. String me kitne space hai vo count krne hain.

let str1 = "my name is Sajid";
let count = 0;
for(let val of str1){
   if(val ===  " "){
      count++;
   }
}
console.log(count)


// // 9. Using repeat function 
// // 1111111111
// // 222222222
// // 33333333
// // 4444444
// // 555555
// // 66666
// // 7777
// // 888
// // 99
// // 0

let print = 1;
for(let i=10; i>=1; i--){
   console.log(String(print).repeat(i))
   if(i === 2){
      print = 0
      continue;
   }
   print++;
}

// // 10. "My name is Sajid Khan";
// // input me ek word lena hai "is"
// // ans: Sajid Khan

let userName = "My name is Sajid Khan";
let splitName = prompt("Enter 'is'")
let s = userName.split("My name " + splitName);
console.log(s.join(""))


// // 14. Hello My name is Sajid KHan 
// // input me ek word lena hai aur vo word string me hai to uski starting
// // index btani hai. String and input dono prompt se lene hain 

let userName1 = prompt("Enter a single line statement");
let checkStr = prompt("Single line statement includes this word or not");
let strIndex = userName1.indexOf(checkStr)
strIndex > 0 ? console.log(`Single line statement includes this word '${checkStr}' in ${strIndex} index`) : console.log("Not includes")


// // 15. ek string leni hai. agar usme string me $, _, number, a-z, A_Z 
// // ke alawa koi aur character hai to use remove krna hai. Regex use ni krni hai 
// // We%^%$Cod!@#e -> We$Code

let strin = "We%^%$Cod!@#e";
let string = "";
let alphabatL = "abcdefghijklmnopqrstuvwxyz"
for(let val of strin){
    if(val === "$" || val === "_" || alphabatL.includes(val) || alphabatL.toUpperCase().includes(val)){
           string += val;
    }
}
console.log(string)


//16. add, minus, mul, divide ye 4 functions bnane hai using arrow function and also without return 

const add = (num1, num2) => num1 + num2;
console.log(add(10,10))

const minus = (num1, num2) => num1 - num2;
console.log(minus(10,10))

const mul = (num1, num2) => num1 * num2;
console.log(mul(10,10))

const divide = (num1, num2) => num1 / num2;
console.log(divide(10,10))


//17. calculator, function expression me bnana hai. 
// Prompt me tume operation puchna hai. operation jaise add, divide, +, -, plus, 
// minus fir usse 2 numbers puchne hain aur operation kran hai

const calculator = function (){
   let opertor = prompt("What operation do you want to do with two number +, -, *, /");
   let num1 = +prompt("Enter first number");
   let num2 = +prompt("Enter second number");
   if(opertor === "+"){
      console.log(num1 + num2)
   }else if(opertor === "-"){
      console.log(Math.abs(num1 - num2))
   }else if(opertor === "*"){
      console.log(num1 * num2)
   }else if(opertor === "/"){
      console.log(num1 / num2)
   }
}
calculator();


//18. function slice, ek string pass krni hai. 
// ek starting indexedDB, 2nd end index, aur fir vo slice krke vo string return krni hai.; 
// agar index galat di hai to error print krni hai using console.error; 

function slice(str, startIn, endIn){
   if(startIn >= 0 && str.length >= endIn){
      return str.substring(startIn, endIn);
   }else{
      console.error("Incorrect index")
   }
}
console.log(slice("Wecode Academy", 0, 5))


//19. function repeat, first argument ek string pass krni hai. 2nd argument me number pass krna hai.
// di gyi string ko 1 se leke number tak repeat krvana hai using loop. 
// repeat function ka use ni krna hai. khud ka repeat function bnana hai 

const repeat = function (str, num){
      for(let i=1; i <= num; i++){
         let str1 = "";
         for(let j=1; j<=i; j++){
            str1 += str
         }
         console.log(str1)
      }
   }
repeat("Hello ", 5)

//20. function concat, 5 string deni hai arugments me aur un 5 string ko concat krke return krna hai using arrow function 

const concat = (...str) => {
   let conStr = '';
   for(let val of str){
      conStr += val
   }
   return conStr;
}
console.log(concat("Hello ","my ","name ","is ","Sher Mohammad"));

//21. padStart and padEnd function ko khudse bnana hai without using string function. 
// ***Wecode
// padding(false, true, "Sajid", "**", 5);
// Wecode****

function padding(start, end, str, sym, num){
   let strSym = "";
   if(start){   
   for(let i=1; i<=num; i++){
       strSym += sym;
   }
   return strSym.concat(str);
  }else if(end){
   for(let i=1; i<=num; i++){
       strSym += sym;
   }
   return str.concat(strSym);   
  }
}
console.log(padding(false, true, "Wecode", "*", 5));


//22. printPyramid("wecode", 5, true);
// wecodewecodewecodewecodewecode
// wecodewecodewecodewecode
// wecodewecodewecode
// wecodewecode
// wecode

const printPattern = function (str, num, rev) {
    if(num > 0 && rev){
       for(let i = num; i >= 1; i--){
         console.log(str.repeat(i))
       }
    }else if(num > 0 && !rev){
       for(let i = 1; i <= num; i++){
       console.log(str.repeat(i))      
    }
}
}
printPattern("wecode", 5, true);


//23. user se name puchna hai. then user ka mobile number puchan hai, then user se birthyear puchni hai. 
// agar user ki age 18+ ho ri hai to usse 3 question puchne hai. Agar vo 3 question ke answer shi deta hia 
// to Congratulations otherwise Sorry you  have lost the game show krnaa hai using alert box 
// age user ki age 18 se kam hai to message show kro "You are not allowed to play the game."

function playGame(){
   const userName = prompt("Enter your name");
   const mobileNumber = +prompt("Enter your mobile number");
   const dateOfBirth = +prompt("Enter your birth year");
   const currentYear = new Date().getFullYear();
   const userAge = Math.abs(dateOfBirth - currentYear)
   if(userAge >= 18){
       let flag = false;
       let Q1 = prompt("What is the capital of india");
       if(Q1.toLowerCase() === "delhi"){
           flag = true;
           Q1 = prompt("What is the capital of rajashthan");
       }
       if(Q1.toLowerCase() === "jaipur" && flag){
           flag = true;
           Q1 = +prompt("How much 2 * 2");
       }
       if(Q1 === 4 && flag){
          console.log(`Congratulation ${userName} for win the game`)
       }else{
          console.log(`Sorry ${userName} you  have lost the game`)
       }
   }else{
          console.log("You are not allowed to play the game.")
   }
}
playGame()

//24.Check even odd number. 

function checkEvenOdd(num1, num2){
   if (num1 % 2 !== 0 && num1 < 100) {
          return "Yes";
   }else if(num2 % 2 === 0 && num2 > 400){
      return "No"
   }else{
      return "Hello"
   }
}
console.log(checkEvenOdd(919,400))

//25.Print pyramind pattern.

for(let i = 1; i<=5; i++){
   let space = "";
   for(let k=1; k <= 5-i; k++){
       space += " ";
   }
   for(let j = 1; j <= i; j++){
     space += "* "
   }
   console.log(space);
}


// 26. Trigno, Apti, Math, Quant  Mathmetics  English, Tense, Active, Passive  English true JavaScript false Java 
// Turkey, India, Japan  Country Rajasthan  Biggest State  Delhi Capital 18 Adult 11 Minor default case Hello JavaScript

const input = "india";
switch(input){
case "trigno":
case "apti":
case "math":
case "quant":
   console.log("Math");
break;

case "english":
case "tense":
case "active":
case "passive":
   console.log("English")  
break;

case true:
  console.log("JavaScript");
break;
case false:
  console.log("Java")  
break;

case "turkey":
case "india":
case "japan":
  console.log("Country");
break;

case "rajasthan":
   console.log("Biggest state");
break;

case "delhi":
   console.log("Capital");
break;

case 18:
   console.log("Adult");
break;

case 11:
    console.log("Minor");
break;

default:
  console.log("Hello JavaScript");       

}

//27. 1 to 50 print krvana hai Number odd hai to continue krna hai Even number and 40 < hai to print number krdo 
// otherwise loop ko break krdo

for(let i=1; i <= 50; i++){
   if(i % 2 != 0){
   	continue;
   }
   if(i > 40){
   	break;
   }
   // console.log(i)
}

//28. Write a program to print Fibonacci series of n terms where n is input by user :

let a = 1;
let b = 1;
let c = 0;
for(let i=1; i<=10; i++){
console.log(c)
a = b;
b = c;
c = a+b;
if(c === 21){
	c += 3;
}
}



// Q29. Ask below Questions
// How many french fries (60rs per piece) do you want to order ?
// How many burgers (50rs per piece) do you want to order ?
// How many plates of chowmin (100rs per plate) do you want to order?
// How many plates of Manchurian (80rs per plate) do you want to order?
// How many Cokes (50 per piece) do you want to order ?
// Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. 
// If user enteres 0 or negative value then consider item count as 0.

        
        const frenchFries = 60;
        const burgers = 50;
        const chowmin = 100;
        const manchurian = 80;
        const coke = 50;
        let bill = 0
        let shopOpen = true;
        while (shopOpen) {
            userOrder = +prompt(`How to order
             1.How many french fries (60rs per piece) do you want to order ?
             2.How many burgers (50rs per piece) do you want to order ?
             3.How many plates of chowmin (100rs per plate) do you want to order?
             4.How many plates of Manchurian (80rs per plate) do you want to order?
             5.How many Cokes (50 per piece) do you want to order ?`)
            if (userOrder <= 5 && userOrder) {
                howMuch = +prompt("How many do you want to order")
            }

            switch(userOrder){
            case 1:
               bill += frenchFries * howMuch;
               break;
            case 2:
                bill += burgers * howMuch;    
               break;
            case 3:
                bill += chowmin * howMuch;
               break;
            case 4:
               bill += manchurian * howMuch;
               break;
            case 5:
               bill += coke * howMuch;
               break;   
            default:
               console.log(`total price = ${bill}`)
               shopOpen = false;      
        }
        }

// Q30.
// Print below Pattern
// $##$##$
// $##$##
// $##$
// $##
// $

        for (let i = 5; i >= 1; i--) {
            let dolHash = "";
            for (let j = 1; j <= i; j++) {
                if (j % 2 !== 0) {
                    dolHash += "$";
                } else if (j % 2 === 0) {
                    dolHash += "##";
                }
            }
            console.log(dolHash);
        }


// Q31. Ask the user question "How many times do you want to print Series".
// Then print below series. For example below series will print if user enteres 5
// 2, 6, 30, 260, 3130 Find the pattern for above series and print accordingly. 
// If the user enters 10 then we will print the same series numbers till 10 times.

   let userNum = +prompt("How many times do you want to print Series")
   let n = 0;
   for(let i=1; i <= userNum; i++){
    n = i ** i + i
    console.log(n)
   }


// Q32. Using a switch case to do this exercise
// If number is odd then print Odd
// If number is even then print Even
// If number is 100 then print 100
// Else print 10000

        let num = 99 % 2;
        switch (num) {
            case 0:
                console.log("Even");
                break;
            case 1:
                console.log("Odd");
                break;
            case 100:
                console.log("100")
                break;
            default:
                console.log(10000)
                break;
        }

// Q33. Ask user his/her birth year, "What is your birth year?"
// If user age is greater than 18 then ask user "Do you have valid license number?" 
// If user click on Okay then ask for his license number and finally in the alert show 
// message "User with license number #### is ready to drive."

// If user age is less than 18 then ask him question in confirm box "Do you have gaurdians ?"
// If user says yes then ask his/her Gaurdian name and then in alert show "You are ready to drive with
//  your #### (show gaurdian name here.)" Else show "Sorry visit again please." in alert box

        let currentYear = new Date().getFullYear();
        let userDofB = +prompt("Enter your Date of Brith");
        let userAge = Math.abs(currentYear - userDofB);

        if (userAge > 18) {
            let userAns = confirm("Do you have valid license number ?");
            if (userAns) {
                let licenseNumber = +prompt("Enter your valid license");
                if (licenseNumber) {
                    alert(`User with license number ${licenseNumber} is ready to drive.`)
                } else {
                    alert("Enter licinse number")
                }
            }
        } else {
            let gaurdianCheck = confirm("Do you have gaurdians ?");
            if (gaurdianCheck) {
                let gaurdianName = prompt("Enter your gaurdian name");
                alert(`You are ready to drive with your gaurdian ${gaurdianName}`);
            } else {
                alert("Sorry visit again please.")
            }
        }


// Q34. Take any number and take other number as 19. Now check their difference by subtracting each other. 
// If both numbers difference is greater than 19 then print triple their absolute difference 
// else print double their absolute difference.

        let num1 = 10;
        let num2 = 19;
        if(Math.abs(num1 - num2) > 19){
            console.log(Math.abs(num1 - num2) * 3);
        }else{
            console.log(Math.abs(num1 - num2) * 2);
        }

// Q35. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
// If yes then print sum of both the numbers Else print multiplication of both numbers

        let num3 = 20;
        let num4 = -10;
        if (num3 < 0 && num4 > 0 || num4 < 0 && num3 > 0) {
            console.log(Math.abs(num3 + num4));
        } else {
            console.log(Math.abs(num3 * num4));
        }


// Q36. Write a JavaScript program to check if out of 4 numbers any two numbers are same or not. 
// If yes then print Yes else print No.

        let num5 = 10;
        let num6 = 190;
        let num7 = 99;
        let num8 = 10;
        if (num5 === num6 || num6 === num7 || num7 === num8 || num8 === num5 || num7 === num5 || num8 === num6) {
            console.log("Yes")
        } else {
            console.log(num5, num6, num7, num8)
        }

// Q37. Write a program to check if a number is palindrome or not. It means 141 and 12221 both are examples of palindrome number. 
// If number is palindrome then print yes else print no.

        let num9 = 12221;
        let rev = 0;
        while(num9 > 0){
         rev = (rev*10)+(num9%10);
         num9 = parseInt(num9/10)
        }
        rev === number ? console.log("Yes") : console.log("No")

// Q38. Take a String and check its length. If string length is greater 
// than 10 then print from 1 to length of the string. else print No.

        let strr = "Hello"
        if(strr.length > 10){
            for(let i=1; i<=strr.length; i++){
               console.log(i)
            }
        }else{
            console.log("No")
        }


//39. Funtions in javaScript;

function as_a_Value1(fn1, fn2, a, b) {
    fn1();
    fn2(a,b);
    return function(){
        console.log("Hello");
    }
}
let ans = as_a_Value1(()=> console.log("Hello"), (x,y)=> console.log(x+y), 10,20)
ans();


function as_a_Value2(fn1, fn2, a, b, c) {
    fn1(a, b, c);
    fn2(a,b);
    return function(x, y, z){
        console.log(x+y+z);
    }
}
let nas1 = as_a_Value2((x,y,z)=> console.log(x+y+z),(x,y)=> console.log(x+y), 10,20,30)
nas1(10,20,30);



function as_a_Value3(fn1, fn2, a, b) {
    fn1(a, b, fn2);
    return function(x, y, z){
        console.log(x*y*z);
    }
}
let nas2 = as_a_Value3((x,y,z)=> {console.log(x+y) ; z()},()=> console.log("Hello"),10,20)
nas2(10,10,10)


const  as_a_Value4 = (fn1, fn2, fn3, a) => {
    fn1(a, fn3, fn2);
    return function(x, y, z){
        return x+y+z;
    }
}
let an3 = as_a_Value4((x, y, z)=> {console.log(x); y(); z()}, ()=> console.log("Hello"), ()=>console.log("World"), 10);
console.log(an3(10,20,30));


function as_a_Value5(fn1, fn2, fn3, fn4, a) {
    fn1(a, fn3,fn2);
    fn2(fn3, fn4);
    fn3();
    fn4();
    return fn4();
}
 
as_a_Value5(
(a, fn3, fn2) => {
      console.log(a)  
      fn3();
      fn2(()=>console.log("hiii"), ()=>console.log("okk"));
}, 
(fn3,fn4) => {
      fn3();
      fn4()
}, 
() => console.log("Hello"), 
() => console.log("World"), 10);

//Q40. Check number 153 is Armstronge or not.

let num1 = 153;
let num2 = num1;
let num3 = 0;
let revrseNum = 0;
while(num1 > 0){
  revrseNum = (num1 % 10);
  num3 += revrseNum ** 3;
  num1 = parseInt(num1/10);
}
n2 === n3 ? console.log(`Number ${num2} is Amrstronge`) : console.log(`Number ${num2} is not Amrstronge`)

//Q41. Print fibonacci series 1,2,3,5,8,13,21.....

let a = 1;
let b = 1;
let c = 1;
for(let i=1; i<=10; i++){
   console.log(c)
   a = b;
   b = c;
   c = a + b;
}


//Q 42. How meny times do you want to print tahir's girlfriend name? 

let ask = prompt("What do you print?");
let howMeny = +prompt("How meny times do you want to print it?")
let frequency = +prompt("What is the frequency");
let Interval = setInterval(() => {
   console.log(ask);
},frequency * 1000);

setTimeout(() => {
     clearInterval(Interval);
},howMeny * frequency * 1000);

//Q 43. First and last charactor capital.

 let str = "My name is hassan khan and i am a software engineer";
 let str1 = str.split(" ");
 let str2=  "";
 for(let val of str1){
    if(val.length <= 2){
      let str3 = val.toUpperCase();
          str2 += str3 + " ";
    }else{
      let str4 = val.charAt(0).toUpperCase().concat(val.substring(1, val.length-1)); 
      let str5 = val.at(-1).toUpperCase();
          str2 += str4 + str5 + " ";
    }
 } 
 console.log(str2)


//Q 44. Find count of number repeated maximum times and also tell the number.

let arr = [11,21,13,25,111,10,10];
let newArr = [];
for(let i = 0; i < arr.length; i++){
   if(newArr[arr[i]]){
      newArr[arr[i]] = newArr[arr[i]] + 1;
   }else{
      newArr[arr[i]] = 1;
   }
}
console.log(newArr[arr[7]]);


 // Q 45. Create an array with three elements and print out the second element.
 
 const arr = ["Hassan", 20, true];
 console.log(arr[1]);

 // Q 46. Create an array with five elements and print out the length of the array.

 const arr = ["Hassan", 20, true, {"Id" : 21}, [1]];
 console.log(arr.length);

 // Q 47. Create an array with four elements and print out each element using a for loop.

const arr = ["Hassan", 20, true, {"Id" : 21}, [1]];
for(let i=0; i<arr.length; i++){
   console.log(arr[i]);
};


// Q 48. Create an array with six elements and print out each element using a forEach loop.   

const arr = ["Hassan", 20, true, {"Id" : 21}, [1]];
arr.forEach((ele) => console.log(ele));

// Q 49. Create an array with three elements and add a fourth element to the end of the array.

const arr = ["Hassan", 20, true, {"Id" : 21}, [1]];
arr.push(false);
   console.log(arr)

// Q 50. Create an array with four elements and remove the second element.

const arr = ["Hassan", 20, true, {"Id" : 21}, [1]];
arr.spilce(1,1);
   console.log(arr);

// Q 51. Create an array with five elements and remove the last element.

const arr = ["Hassan", 20, true, {"Id" : 21}, [1]];
arr.pop();
   console.log(arr);   


// Q 52. Create an array with three elements and check if the array includes a specific value.

const arr = ["Hassan", 20, true, {"Id" : 21}, [1]];
let specificValue = 10;
   if(arr.includes(specificValue)){
      console.log("Yes")
   }else{
      console.log("No")
   }
   console.log(arr);   

// Q 53. Create an array with four elements and sort the array in ascending order.

const arr = [12,42,1,2];
const newArr = arr.sort(ascOrder);
function ascOrder(val1, val2){
   return val1 - val2;
}   
console.log(newArr);

// Q 54. Create an array with five elements and sort the array in descending order.

const arr = [12,42,1,2];
const newArr = arr.sort(ascOrder);
function ascOrder(val1, val2){
   return val2 - val1;
}   
console.log(newArr);
   
// Q 55. Create two arrays, concatenate them and print out the resulting array.

const arr1 = ["Mohammad"];
const arr2 = ["Hassan"];
const arrCon = arr1 + arr2;
console.log(arrCon)   

// Q 56. Create an array with three elements and convert it to a string.

const arr = [12,42,1];
const arrToStr = arr.toString();
console.log(arrToStr)

// Q 57. Create an array with four elements and reverse the order of the elements.

const arr = [12,42,1,2];
const newArr = arr.reverse();
console.log(newArr);

// Q 58. Create an array with five elements and find the index of a specific value.

const arr = [12,42,1,2];
const specificValue = 12;
if(arr.includes(specificValue)){
   let valueIn = arr.indexOf(specificValue);
   console.log(valueIn + " " + "index");
}else{
   console.log("Not found")
}

// Q 59. Create an array with six elements and slice the array to create a new array with the first three elements.

const arr = [43,545,23,565,4,43];
const newArr = arr.slice(0,3);
console.log(newArr)   

// Q 60. Create an array with six elements and use the map method to double each element.

const arr1 = [1,2,3,4,5,6];
const arr2 = arr1.map(mapEle);
function mapEle(ele){
   return ele * 2;
}  
console.log(arr2);

// Q 61. Create an array with four elements and use the while loop to calculate the sum of all elements.

const arr = [1,2,3,4];
let sum = 0;
let index = 0;
while(index < arr.length){
   sum += arr[index];
   index++;
}
console.log(sum)

// Q 62. Create an array with five elements and use the filter method to return only the even numbers.

const arr1 = [1,2,3,4,5];
const arr2 = arr1.filter(filterValue);
function filterValue(val){
   return val % 2 === 0;
}
console.log(arr2);

// Q 63. Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.

const arr1 = [1,2,3,4,5];
const joinArr = arr1.join("-");
console.log(joinArr)

// Q64. Create two arrays with three elements each and use the concat method to combine them into a new array.

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr3)







