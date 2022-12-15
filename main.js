//assigment=>1
/*<script>
      // Code One
      document.getElementById("el").style.color = "red";
    </script>
    */
/*
this will print null
because the code is excute line by line when we arrive at script the element won't creat .
*/
//assigment=>2
document.write("<h2>Elzero</h2>");
document.querySelector("h2").style= "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial";
//assigment=>3
console.log("%cElzero %c web %cschool", "color: red;font-size: 40px;font-weight:bold", "color:green;font-size: 40px;font-weight:bold","color: white;background:blue;font-size: 40px;font-weight:bold");
/*
Enter ctrl+shift+i to displayconsloe
*/
//assigment=>4
console.group("Group 1")
console.log("messageone");
console.log("messagetwo");
console.group("Group child")
console.log("messageone");
console.log("messagetwo");
console.group("Grand child  Group")
console.log("messageone");
console.log("messagetwo");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2")
console.log("messageone");
console.log("messagetwo");
console.groupEnd();
//assigment=>5
console.table(["Elzero","Ahmed","sameh","Gamal","Aya"]);
//assigment=>6
//first methode

console.log("Iam In Console");
document.write("Iam In Page");

//second methode
console.log("Iam In Console");
document.write("Iam In Page");
/*************************************************************************************************************************************************/
//10 to 17
//assigment-one
var numberOne=10;
var numberTwo=20;
console.log(numberOne.toString()+numberTwo.toString());
console.log(typeof( numberOne.toString()+numberTwo.toString()));
console.log(`${numberOne.toString()}${numberTwo.toString()}`);
console.log( typeof(`${numberOne.toString()}${numberTwo.toString()}`));
console.log(numberTwo+"\n"+numberOne);
console.log(`${numberTwo}\n${numberOne}`);
//assigment2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
//assigment3
console.log("\`I\'m In \n\\\\\n Love\\\\ \"\"\"\'\'\' \n\+\+ With \+\+ \n\\\"\"\"\\\"\"\"\n\"\"javasrpit\"\"\`\`");
//assigment4
let a = 21;
let b = 20;
let c= a ;
let d=b;
console.log("_"+c.toString() +("_"+a.toString()+ b.toString()+"_").repeat(3)+d.toString()+"_"); // _21_2021_2021_2021_20_

/******************************************************************************************************************************************************************* */
//18 to 22
//assigment one
console.log((10 * 20)  +  (15 % 3) + (190 + 10) - 400);
//assigment two
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + +`${num}`); // 6

// Soultion Three
console.log(num - `${-num}`); // 6

// Soultion Four
console.log(num + true + true + true); // 6

// Solution Five
console.log(-num++ + ++num + --num); // 6

// Solution Six
console.log((num * num * num * num) % (++num + num++)); // 6
//assigment three
let number = "10";

// Solution One
console.log(+number + +number); // 20

// Solution Two
console.log(Number(number) + Number(number)); // 20

// Solution Three
console.log(number - -number); // 20

// Solution Four
console.log((number * number) / (number >> true)); // 20
/******************************************************************************************************************************************************************** */
//22 to 30
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Number("1000000")); // 100000
console.log(Math.pow(10, 6)); // 100000
console.log(10 ** 6); // 100000
console.log(Math.sqrt(1e12)); // 100000
console.log(Math.floor(1e6 + 0.5)); // 100000
console.log(Math.ceil(1e6 - 0.5)); // 100000
console.log(Math.round(1e6 + 0.2)); // 100000
console.log(Number.parseInt("1000000 Ali")); // 100000
console.log(+"1000000.0000"); // 100000
console.log(Math.abs(-"1000000")); // 100000
// two
console.log(-Number.MIN_SAFE_INTEGER);
// three
console.log((Number.MIN_SAFE_INTEGER).length);
//four
let myVar = "100.56789 Views";
console.log(Number.parseInt(myVar)); // 100
console.log(Number.parseFloat(Number.parseFloat(myVar).toFixed(2))); // 100.57
//five
let mynum = 10;
console.log(Number.isInteger(mynum) + Number.isInteger(mynum)); // 2
//six
let flt = 10.4;
console.log(Math.floor(flt)); // 10
console.log(Math.ceil(Math.trunc(flt))); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Number.parseInt(flt)); // 10
//seven
console.log(Number.parseInt(Math.random() * 5));
//eight
let userName = "Elzero";
console.log(userName.charAt(false).toLocaleLowerCase()); // e
console.log(userName.slice(false,true).toLowerCase()); // e
console.log(userName.split("",1).toString().toLocaleLowerCase()); // e
console.log(userName.substring(0,1).toLocaleLowerCase()); // e
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName[0].toLocaleLowerCase().repeat(3)); // eee
//nine
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.includes(letterZ)); // True
console.log(word.startsWith((letterE.toLocaleUpperCase()))); // True
console.log(word.endsWith((letterO.toLocaleLowerCase()))); // True
