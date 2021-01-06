// Chapter 1 Alerts Start

// var a = "Error! Please enter a valid password";
// alert(a);
// var b = "Welcome to Js Land...\nHappy codding";
// alert(b);
// var c = "Welcome to Js Land...";
// alert(c);
// var d = "Happy Coding!";
// alert(d);
// var e = "Hello.. I can run JS through my web browser's console";
// console.log(alert(e));

// Chapter 1 Alert end


// Chapter 2 Variable for strings

// var username = "Mshoaib";
// var myname ="Muhammad Shoaib";
// var titlemessage = "Hello world";
// alert(titlemessage);

// var studentname = "Ali";
// var studentage = "15 years old";
// var studenteducation = "Web and mobile app developer";

// alert(studentname);
// alert(studentage);
// alert(studenteducation);

// var f = "Pizza\nPizz\nPiz\nPi\nP";
// alert(f);

// var emailtext = "My email address is";
// var emailaddress = "example@example.com";
// alert(emailtext+" "+emailaddress);

// var book = "A smarter\n way to learn javascript " ;
// alert("I am trying to learn from the book" +" "+book);

// document.write("Yeah! I can  write Html content through Javascript ");

// var g = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(g);

// Chapter 2 end


// Chapter 3 Variable for number

// var age = "21";
// alert ("I am"+" "+age+" "+"years old");

// var i = 1;

// if(i == 1)
// {
//     x = i;
//     y="You have visited this site";
//     z="time";
//     alert(y+" "+x+" "+z);    
// }

// else 
// {
//     alert("refresh your page");
// }

// var birthyear = 1990;
// document.write("My birth year is" +" "+ birthyear +" "+"<br/>"+" "+"Data type of my declared variable is number<br/>");

// var mystore = "xyz clothing store";
// var visitorname = "Ali";
// var producttitle = "shoes";
// var productquantity = "10";
// document.write(visitorname +" "+ "ordered" +" "+productquantity +" "+producttitle +" "+ "on" +" "+ mystore);

// chapter 3 end


// Chapter 4 start

// document.write("<h2>Rules for Naming Js Varaible </h2><br/>")

// var g=10,f=20,h=30;
// document.write(g+""+f+""+h+""+"<br/>");

// 5 legal variable

// var $="lega";
// var _h="legal";
// var name="legal";
// var NAME ="legal";
// var _$s1="legal";

// 5 ilegal variable

// var var="ilegal";
// var alert = "ilegal";
// var 123 = "ilegal";
// var 1heu = "ilegal";
// var %h1="ilegal";


// var numbers ="numbers,";
// var $name = "$";
// var underscore = "_";
// var example = ".for example:$my_1stVariable";

// document.write("Variable names can only contain"+" "+numbers+" "+$name+" "+"and"+" "+underscore+" "+example+" "+"<br/>");
// document.write("variable name must begin with a letter,$ or .for example : $name, name or name <br/>");
// document.write("Variable names are case sensitive<br/>")
// document.write("Variable names should not be JS keywords")


// chapter 4 end



// Chapter 5 start
// For addition
// var a = +prompt("Enter first number for addition");
// var b = +prompt("Enter second number for addition");
// var c = a+b;
// document.write("Sum of first and second number is"+" "+c+""+"<br/>");


// for subtraction

// var a = +prompt("Enter first number for subtraction");
// var b = +prompt("Enter second number for subtraction");
// var c = a-b;
// document.write("Subtraction of first and second number is"+" "+c +""+"<br/>");

// for multiply

// var a = +prompt("Enter first number for multiplication");
// var b = +prompt("Enter second number for multiplication");
// var c = a*b;
// document.write("Multiplication of first and second number is"+" "+c +""+"<br/>");

// for Division


// var a = +prompt("Enter first number for Division");
// var b = +prompt("Enter second number for Division");
// var c = a/b;
// document.write("Division of first and second number is"+" "+c +""+"<br/>");

// Modulus

// var a = +prompt("Enter first number for modulus");
// var b = +prompt("Enter second number for modulus");
// var c = a%b;
// document.write("Modulus of first and second number is"+" "+c +""+"<br/>");



// var a ;
// document.write("Value after variable declaration is undefined <br/>");
// var a = 10;
// document.write("Value after initialization of variable is"+" "+a+" "+"<br/>");
// var a = ++a;
// document.write("Value after increment of variable is"+" "+a+" "+"<br/>");
// var a = a+7;
// document.write("Value after addition of 7 is"+" "+a+" "+"<br/>");
// var a=--a;
// document.write("Value after decremenmt of variable is"+" "+a+" "+"<br/>");
// var a = a%3;
// document.write("Value after reminder of variable is"+" "+a+" "+"<br/>");

// var oneticket=600;
// var groupofticket=oneticket*5;
// document.write("Total cost of buy 5 tickets to a movie is"+" "+groupofticket);


// document.write("Table of 4 <br/>");
// document.write("4x 1 = 4 <br/>");
// document.write("4x 2 = 8 <br/>");
// document.write("4x 3 = 12 <br/>");
// document.write("4x 4 = 16 <br/>");
// document.write("4x 5 = 20 <br/>");
// document.write("4x 6 = 24 <br/>");
// document.write("4x 7 = 28 <br/>");
// document.write("4x 8 = 32 <br/>");
// document.write("4x 9 = 36 <br/>");
// document.write("4x 10 = 40 ");

// var  Celsiustemperature = "°C";
// var Fahrenheit = "°F";
// var userinput=+prompt("Enter  celsius value for conversion");
// var userinput2=+prompt("Enter fahrenhiet value for conversion");
// var result = (userinput2-32)*5/9;
// var result2 =(userinput*9/5)+32;
// document.write(userinput+" "+Celsiustemperature+" "+"is"+" "+result2+" "+Fahrenheit+" "+"<br/>");
// document.write(userinput2+" "+Fahrenheit+" "+"is"+" "+result+" "+Celsiustemperature);

// Shoping cart
// var item1price = +prompt("Enter item1 price");
// var item2price = +prompt("Enter item2 price");
// var quantity = +prompt("Enter quantity for item 1");
// var quantity2 = +prompt("Enter quantity for item 2");
// var charges = 100;
// var multiply = item1price*quantity;
// var multiply2 = item2price*quantity2;
// var totalcost = (multiply+multiply2+charges);
// document.write("Price of item 1 is"+" "+item1price+" "+"<br/>");
// document.write("Price of item 2 is"+" "+item2price+" "+"<br/>");
// document.write("Quantity of item1 is"+" "+quantity+" "+"<br/>");
// document.write("Quantity of item2 is"+" "+quantity2+" "+"<br/>");
// document.write("Shiping charges"+" "+charges+" "+"<br/>");
// document.write("Total cost of your order is"+" "+totalcost);


// Marksheet

// var Totalmarks = +prompt("Enter student total marks");
// var Obtainmarks = +prompt("Enter student obtain marks");
// result = (Obtainmarks/Totalmarks)*100;
// document.write("Total Mark is"+" "+Totalmarks+" "+"<br/>");
// document.write("Obtain Mark is"+" "+Obtainmarks+" "+"<br/>");
// document.write("Your Percentage is"+" "+result+""+"%");


// Currency

// var dollar = +prompt("Enter Us dollar");
// var Riyal = +prompt ("Enter Saudi Riyal");
// var Total = (104.80*dollar)+(28*Riyal);
// document.write("<h1>Currency in PKR</h1><br/>");
// document.write("Your Dollar amount is" +" "+dollar+""+"$"+""+"<br/>");
// document.write("Your Riyal amount is" +" "+Riyal+" "+" ﷼‎"+" "+"<br/>");
// document.write("Total Currency in Pkr is"+" "+Total);


// Add Multiply and divide

// var number = 5;
// var final = (number+5)*10/2;
// document.write(final);


// Age Calculator

// var birthyear =+prompt("Enter you birthyear");
// var currentyear = 2021;
// var age= currentyear-birthyear;
// document.write("Current year is"+" "+currentyear+" "+"<br/>");
// document.write("Birth year is "+" "+birthyear+" "+"<br/>");
// document.write("Your age is"+" "+age);


// Radius of circle

// var radius = +prompt("Enter circle radius");
// var c = 2*3.142*radius;
// var a = 3.142*radius*2;
// document.write("Radius of circle is "+" "+radius+" "+"<br/>");
// document.write("circumference of circle is"+" "+c+" "+"<br/>");
// document.write("Area of circle is" +" "+a);

// The life time supply calculator


// var snack = prompt("Enter Your favourite snack name");
// var yourage = +prompt("Enter your age");
// var maxage = +prompt("Enter your max age");
// var perday = +prompt("enter estimated amount of snack pr day");
// var snackresult = (maxage-yourage)*perday;   
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack:"+" "+snack+""+"<br/>");
// document.write("Current age"+" "+yourage+""+"<br/>");
// document.write("Estimated max age is" +" "+maxage+" "+"<br/>");
// document.write("Amount of snack perday is" +" "+perday+""+"<br/>");
// document.write("You will need"+" "+snackresult+" "+snack+" "+"to last day until you ripe old age of"+" "+maxage);


// chapter 5 end


// Chapter 06 Start
// Answer 01
// var a = +prompt("Enter Number");
// var b = ++a;
// var c = ++a;
// var d = --a;
// var e = --a;
// document.write("The value of a is"+" "+a +" "+"<br/>");
// document.write("The value of ++a is"+" "+b +" "+"<br/>");
// document.write("The value of a++ is"+" "+c +" "+"<br/>");
// document.write("The value of --a is"+" "+d +" "+"<br/>");
// document.write("The value of a-- is"+" "+e +" "+"<br/>");
// Answer end

// Answer 02
// var a=2;
// var b=1;
// document.write("a is"+" "+a+""+"<br/>");
// document.write("b is"+" "+b +" "+ "<br/>");
// var c= --a - --b;
// var d = ++b;
// var e = b--;
// var result = c+d+e;
// document.write("result" +" "+result);
//Answer end


// Answer 03
// var username= prompt("Enter your name");
// alert("Hello"+" "+username);
// Answer end

// Answer 04
// var number = +prompt("Enter table number");
// if(number == number)
// {
//     for(i=1; i<=10; i++)
//     {
//         result=i*number;
//         document.write(number+" "+"*"+" "+i+" "+"="+" "+result+" "+"<br/>");

//     }
// }

// else
// {
//     alert("error");
// }


// Chapter 06 end

// Chapter 9 to 11

// Answer 1

// var cityname = prompt("enter your city name");
// if (cityname == "karachi")
// {
//     alert("Welcome to city of lights");
// }
// else
// {
//     alert("Please enter valid name");
// }


// Answer No 2
// var gender = prompt("enter your gender");

// if(gender == "male")
// {
//     alert("Good Morning sir");
// }

// else if(gender == "female" )
// {
//      alert("Good Morning Mam");
// }

// else
// {
//     alert("Please enter gender");
// }


// Answer No 3
// var color = prompt("Please enter color");
// document.write("<th>SignalColor</th>"+" "+ "<th>Message</th>"+" "+"<br/>");
// document.write("Red"+" "+ "Must stop" +" "+"<br/>"+" "+"Yellow"+""+"Ready to move"+" "+"<br/>"+" "+"Green"+" "+"move now");


// Answer No 4
// var fuel = +prompt("Enter your fuel litres");
// if (fuel <= 0.25)
// {
//     alert("refil your fuel");
// }

// else
// {
//     alert("you can drive");
// }


// Answer No 5

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}


if ("car" < "cat") {
    alert("car is smaller than cat");
}



// Chapter 9 to 11 end