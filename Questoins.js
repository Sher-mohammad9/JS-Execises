// 1. let str = "My name is Wecode Academy" string ko space se split krke length btani hai.

let strSplit = "My name is Wecode Academy";
let strToArr = strSplit.split(" ");
console.log(strToArr.length);

// 2. String palindrome check ababa, helleh ?

let strPalnd = "str madam rts";
let checkPalnd = "";
for(let i = 1; i <= strPalnd.length; i++){
   checkPalnd += strPalnd.at(-i);
}
strPalnd === checkPalnd ?  console.log("String is palindrome") : console.log("String is not palindrome")


// 3. 9581894461
// 95818***
// ***94461
// 958*944*

let str4 = "9581894461";
let sub1 = str4.substring(0, 3);
let pad1 = sub1.padEnd(5, "*");
let sub2 = str4.substring(5,8);
let pad2 = sub2.padEnd(5,"*")
let con = pad1.concat(pad2);
console.log(con)

// 4. Reverse String 
// Hello -> olleH
// Bye -> eyB

let stri = "Hello";
let strRev = "";
for(let i=1; i<=stri.length; i++){
   strRev += stri.at(-i);
}
console.log(strRev);


// 5. Captialize first character 
// wecode -> Wecode 
// hello -> Hello

let str = "wecode"
let strArr = str.split(" ")
let strCap = "";
for(let val of strArr){
     strCap += val.charAt(0).toUpperCase().concat(val.slice(1))
  }
console.log(strCap);


// 6. String
// uppercase ->  lowercase 
// lowercase -> uppercase
// HeLlo -> hElLO
// WECodE -> wecODe

let strSmallCap1 = "HeLlo";
let strSmallCap2 = "";
for(let val of strSmallCap1){
   strSmallCap2 += val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase();
}
console.log(strSmallCap2)

// 7. Camelize
// Hello World -> helloWorld
// my name is Sajid -> myNameIsSajid
// Wecode Academy -> wecodeAcademy

let strSpace = "my name is Sajid";
let removeSpace = "";
for(let val of strSpace){
   if(val ===  " "){
      continue;
   }else{
      removeSpace += val;
   }
}
console.log(removeSpace)


//8. String me kitne space hai vo count krne hain.

let str1 = "my name is Sajid";
let count = 0;
for(let val of str1){
   if(val ===  " "){
      count++;
   }
}
console.log(count)


// 9. Using repeat function 
// 1111111111
// 222222222
// 33333333
// 4444444
// 555555
// 66666
// 7777
// 888
// 99
// 0

let print = 1;
for(let i=10; i>=1; i--){
   console.log(String(print).repeat(i))
   if(i === 2){
      print = 0
      continue;
   }
   print++;
}

// 10. "My name is Sajid Khan";
// input me ek word lena hai "is"
// ans: Sajid Khan

let userName = "My name is Sajid Khan";
let splitName = prompt("Enter 'is'")
let s = userName.split("My name " + splitName);
console.log(s.join(""))


// 14. Hello My name is Sajid KHan 
// input me ek word lena hai aur vo word string me hai to uski starting
// index btani hai. String and input dono prompt se lene hain 

let userName1 = prompt("Enter a single line statement");
let checkStr = prompt("Single line statement includes this word or not");
let strIndex = userName1.indexOf(checkStr)
strIndex > 0 ? console.log(`Single line statement includes this word '${checkStr}' in ${strIndex} index`) : console.log("Not includes")


// 15. ek string leni hai. agar usme string me $, _, number, a-z, A_Z 
// ke alawa koi aur character hai to use remove krna hai. Regex use ni krni hai 
// We%^%$Cod!@#e -> We$Code

let strin = "We%^%$Cod!@#e";
let string = "";
let alphabatSmall = "abcdefghijklmnopqrstuvwxyz"
let alphabatCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for(let val of strin){
    if(val === "$" || val === "_" || alphabatSmall.includes(val) || alphabatCap.includes(val)){
           string += val;
    }
}
console.log(string)

















/*

// .  Trigno, Apti, Math, Quant  Mathmetics  English, Tense, Active, Passive  English true JavaScript false Java 
// Turkey, India, Japan  Country Rajasthan  Biggest State  Delhi Capital 18 Adult 11 Minor default case Hello JavaScript

const input = "India";
switch(input.toLowerCase()){
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

//37. 1 to 50 print krvana hai Number odd hai to continue krna hai Even number and 40 < hai to print number krdo 
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

//38. Write a program to print Fibonacci series of n terms where n is input by user :

let a = 1;
let b = 1;
let c = 0;
for(let i=1; i<=200; i++){
// console.log(c)
a = b;
b = c;
c = a+b;
if(c > 200){
	break;
}
}
*/