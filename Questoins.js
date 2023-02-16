
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

        let howMuchItem = 0;
        let userOrder = false;
        while (!userOrder) {
            userOrder = +prompt(`How to order
             1.How many french fries (60rs per piece) do you want to order ?
             2.How many burgers (50rs per piece) do you want to order ?
             3.How many plates of chowmin (100rs per plate) do you want to order?
             4.How many plates of Manchurian (80rs per plate) do you want to order?
             5.How many Cokes (50 per piece) do you want to order ?
             6.Exit`)
            if (userOrder <= 5 && userOrder) {
                howMuchItem = +prompt("How many do you want to order")
            }
        }
        console.log(howMuchItem)
        if (userOrder === 1) {
            console.log(`Your bill ${60 * howMuchItem}`)
        } else if (userOrder === 2) {
            console.log(`Your bill ${50 * howMuchItem}`);
        } else if (userOrder === 3) {
            console.log(`Your bill ${100 * howMuchItem}`);
        } else if (userOrder === 4) {
            console.log(`Your bill ${80 * howMuchItem}`);
        } else if (userOrder === 5) {
            console.log(`Your bill ${50 * howMuchItem}`);
        } else {
            console.log(0)
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















