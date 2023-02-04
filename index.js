


// let fruits = ['apple','mango','banana','grapes'];




// Q1 Define a function called cleanNames that accepts 
// an array  of strings containing additional space 
// characters at the beginning and end. The cleanNames() 
// function should use the array map method  to return a
// new array full of trimmed names. For example:

// cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]) 
// should give
// ["avengers", "captain_america", "ironman", "black panther"]

// var arr = [" avengers", "   captain_america", "ironman   ", " black panther   "]
// var newarr=[]
// function clean(arr){


// for (var i=0;i<arr.length; i++){
//     newarr.push(arr[i].trim())
// }
// console.log(newarr)
// }
// clean(arr)


// ------------------------------------------- for loop ---------------------------------------



// let array = ['apple','mango','banana','grapes'];

// for(var i=0; i<array.length; i++){
//     document.write(array[i]+"<br>")
//     console.log(array[i]+"\n")
// }


// ----------------------------------------------for of loop -----------------------------------------------

// it terminates on the last element of the array we 
// cannot specify the iteration number
// it returns element of the array



// for(let fruit of fruits){
//     document.write(fruit+"<br>")
//     console.log(fruit+"\n")
// }

// for(let fruit of fruits){
//     document.write(fruit.toUpperCase()+"<br>")
//     console.log(fruit.toUpperCase()+"\n")
// }

// let fruit2 = []

// for(let fruit of fruits){
//     fruit2.push(fruit)
// }
// console.log(fruit2)



// ----------------------------------------------for in loop -----------------------------------------------

// it terminates on the last element of the array we 
// cannot specify the iteration number
// it returns index of the element of the array


// for(let fruit in fruits){
//     document.write(fruit+"<br>")
//     console.log(fruit+"\n")
// }

// for(let fruit in fruits){
//     document.write(fruit.toUpperCase()+"<br>")
//     console.log(fruit.toUpperCase()+"\n")
// }

// let fruit2 = []

// for(let fruit in fruits){
//     fruit2.push(fruit)
// }
// console.log(fruit2)



// -----------------------------array destructuring ----------------------------------------------------

// copy the elements of the array and store in other array

// let  [fruit1,fruit2] = fruits
// console.log(fruit1,fruit2)

// let val1=fruits[0]
// let val2=fruits[1]
// console.log(val1,val2)

// let newArray = fruits.slice(3)
// console.log(newArray)

// let  [fruit1,fruit2, ...newarr] = fruits
// console.log(fruit1,fruit2,newarr)

// -----------------------------objects----------------------------------------------------

// array is not sufficient for real data
// it has no index
// it has key value pairs
// it has reference type means it stores in memory like array
// it also called object literals bcz we use curely braces
// key = properties

// const person = {
//     name:"Abu Huraira",
//     age:22,
//     hobbies : ["sleeping","fashion"],
//     "phone number" : 431
// }

// console.log("name : "+person.name )
// console.log("age : "+person.age )
// console.log("Hobbies : "+person.hobbies[0] )

// how can add key value in existed object?

// 1
// person.gender = "male"
//2
// person["class"] = "middle"




// how can access value of the object?

// 1
// console.log(person.name)
// 2
// console.log(person["phone number"])

// add key value but the key name pass through the variable

// const key = "email"
// person[key] = "abuhurairah775@gmail.com"
// console.log(person)

// ----------------------------------- iteration in object -------------------------------------------
// how can iterate the object?

// 1 for in loop
// for(let key in person){
//     // console.log(key,":",person[key])
//     console.log(`${key} : ${person[key]}`)
// }

// 2 object.key
// console.log(Object.keys(person))

// let con = Array.isArray(Object.keys(person))
// console.log(typeof(Object.keys(person)))
// console.log(con)

// 3 for of loop
// for(let key of Object.keys(person)){
//     console.log(`${key} : ${person[key]}`)
// }


// -------------------------computed properties in object -------------------------------

// const key1 = "key value 1"
// const key2 = "key value 2"
// const key3 = "key value 3"


// const val1 = "value 1"
// const val2 = "value 2"
// const val3 = "value 3"

// const obj = {
//     [key1]:val1,
//     [key2]:val2,
//     [key3]:val3
// }

// let obj = {}
// obj[key1] = val1
// obj[key2] = val2
// obj[key3] = val3


// console.log(obj)


// -------------------------------spread operator in array ----------------------------------

// const array1 = [1,2,3]
// const array2 = [4,5,6]

// // const newArray = [...array1,...array2,7,8,9]
// // const newArray = [..."abc"] //"a","b","c"
// const newArray = [..."123"] //"1","2","3"
// //string is iterable but not integer 
// console.log(newArray)


// -------------------------------spread operator in object ----------------------------------
// spread operator is used to clone the values

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
//     key3 : "value3"
// }

// const obj2= {
//     key1 : "Changed",
//     key4 : "value4",
//     key5 : "value5",
//     key6 : "value6"
// }

// let n = 'key8'
// let newObj = {...obj2, ...obj1,key7:"Value7"}
// newObj[n]="value8"
// // let newObj = {..."abcdefghijklmnopqrstuvwxyz"}
// console.log(newObj)


// --------------------------------object destructuring ---------------------------------

// it means to separate the indeces of the array and the 
// properties of the object in the separate variables

// let data = {
//     name : "Abu Huraira",
//     clas : "Under Graduate",
//     age : 22,
//     city : "Karachi",
//     relegion : "Islam"
// };

// let {name,clas,...rest} = data;
// // for(let key in data){
// //     console.log(`${key} : ${data[key]}`)
// // }
// // console.log(rest)
// console.log(name,clas,rest)


// ************************************************************************************
//**************************** */ exercise ********************************************
// ************************************************************************************



// 1. Write a JavaScript program to list the properties of a JavaScript object.
//  Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

// var student = 
// {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// }
// for(let key in student){

//     console.log(student[key])
// }

// 2. Write a JavaScript program to delete the rollno property from the 
// following object. Also print the object before or after deleting the 
// property. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 }; 

// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// }

// console.log("Before deleting 'roll no' property")
// for(let key in student){
//     console.log(`${key} : ${student[key]}`)
// }

// delete student.rollno
// console.log("After deleting 'roll no' property")
// for(let key in student){
//     console.log(`${key} : ${student[key]}`)
// }

// 3. Write a JavaScript program to get the length of a JavaScript object.

// var objsize = Object.objsize(student);
// console.log('Size of the current object : '+objsize);

// 1
// let count = 0
// for(let key in student){
//  count++;
// }


// 2
// let count = 0
// for(let key of Object.keys(student)){
//  count++;
// }
// console.log(`The current length of the object is : ${count}`)


// 4. Write a JavaScript program to display the reading status 
// (i.e. display book name, author name and reading status) of the
//  following books. Go to the editor

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

//    for(let i=0; i<library.length; i++){
//        console.log(`Description ${i+1}:`)
//     for(let key in library[i]){
//         console.log(`${key} : ${library[i][key]}`)
//     }
    
//    }


// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************



// ----------------------- object inside the array --------------------------------
// it is very useful in real world application

// let array = [
//     {id : 1 , firstName : "Abu Huraira" , gender : 'male'},
//     {id : 2 , firstName : "ALi Niyaz" , gender : 'male'},
//     {id : 3 , firstName : "Imran Khan" , gender : 'male'},
//     {id : 4 , firstName : "Sikandar" , gender : 'male'},
// ];

// for(let i=0; i<array.length; i++){
//    console.log(`User information of the array index ${i+1}: `)
//    for(let key in array[i]){
//        console.log(`${key} : ${array[i][key]}`)
//    }
// }

// let count = 0;
// for(let i of array){
//     count++;
//     console.log(`Name ${count} : ${i.firstName}`)
// }

// -----------------destructuring in nested array --------------------------------


// let array = [
//     {id : 1 , firstName : "Abu Huraira" , gender : 'male'},
//     {id : 2 , firstName : "ALi Niyaz" , gender : 'male'},
//     {id : 3 , firstName : "Imran Khan" , gender : 'male'},
//     {id : 4 , firstName : "Sikandar" , gender : 'male'},
// ];

// const [user1,user2,user3] = array;
// // console.log(user1)
// for(let key in user1){
//     console.log(`${key} : ${user1[key]}`)
// }


// print the specific value of the object inside the array

// let [{firstName}, , {gender}] = array
// console.log(firstName)
// console.log(gender)

// ------------------------- function -------------------------------------------------
// it will not print untis is invoked 
// function says => DRY (Don't Repeat Yourself)

// console.log("This is console.log")

// function myFirstFunction(){
//     console.log("This is my first function")
// }
// myFirstFunction()

// function addNumbers(){
//    return 9+6
// }
// 1
// let sum = addNumbers()
// console.log(sum)
// 2
// console.log(addNumbers())

// function sumNum(a,b){ // 'a' and 'b' are parametrs
//     return a+b
// }

// let sum = sumNum(11,12) // '11' and '12' are arguments
// console.log(sum)

// 1. function
// input : string
// output : first character

// function string(a){
//     return a[0]
// }

// let print = string('fasdfas')
// console.log(print)

// 2. function
// input:Array, target number
// output: print the index of the target number


// function hard(array){
//     let targetNumber = 45;
//     let pos = 0;
//     for(let index of array){
//         pos++;
//         if(index === targetNumber){
//             console.log(`${targetNumber} is present in the array at the position ${pos}`)
//         }
//     }
// }


// const myArray = [1,2,3,5,8,7,6,5,69,9,8,65,45]
// hard(myArray)

// ----------------------------function expression ------------------------------------------
// the above examples are function declaration 

// function expression is also known as annonymous funtion 
// bcz this function has no name but stored in the variable 
// and that variable name is used as the function name

// 1
// const funtionName = function (){
//     console.log("This is function expression not funtion declaration,"+
//         " and it has no name but stored in the variable which is used as"+
//         " function name. This is also called anonymous function")
// }
// funtionName()

// // you can alsogive the name of the function
// // 2 but called by variable
// const funtionHere = function Here(){
//     console.log("This is function expression not funtion declaration,"+
//         " with the function name.")
// }

// funtionHere()

// function returnOne(){
//     return -1
// }

// console.log(returnOne())


// -----------------------------arrwo function -----------------------------------------
// the shortage of the function syantax
// 1 is the parameter is one no need to paranthesis
// 2 is the printing line is single then no need to write return and curley braces

// // 1. simple function
// const fun1 = function Name(string){
//     return string
// }
// console.log(fun1("Normal Function"))

// // convert Name() to arraow function
// // 1
// const fun2 = (string) =>{
//     return string
// }
// console.log(fun2('Arrow function 1'))
// // 2
// const fun3 = string => string

// console.log(fun3('Arrow function 2'))


// ------------------------------------hoisting --------------------------------------
// use function or variable before declaration

// hoisting is posible in function declaration not fun expression and arrow function

// functionDeclaration()

// function functionDeclaration(){
//     console.log("Function Declaration can be hoisted")
// }

// functionExpression()
// const functionExpression = function() {
//     console.log(
//     "function expression cannot be hoisted"
//     )    
// }

// arrowFunction()
// const arrowFunction = () => "arrow function cannot be hoisted too"

// ---------------------------function inside function -------------------------------

// const mainFun = function(){

//     function add(a,b){
//         console.log(a+b)
//     }

//     function mul(a,b){
//         console.log(a*b)
//     }

//     function string(string){
//         console.log(string)
//     }

//     console.log("Main Function")
//     add(4,4)
//     mul(4,6)
//     string("function inside function")
// }

// mainFun()

// ------------------------------------lexical scope ----------------------------------------

// // javascript first check the variable in its scope first called "lexical scope"

// let variable = "global variable"

// const myFun = function(){
//     variable = "Variable inside myFun()"
//     const insideFun = function(){
//         variable = "variable inside insideFun()"
//         console.log(variable)
//     }
    
//     insideFun()
// }

// myFun()

// ---------------------------block vs function scope ------------------------------------
// let and const are block scope
// var is function scope


// const myFun = function(){
//      a = "Variable inside myFun()"
// }

// myFun()
// console.log(a)

// const myFun = function(){
//     if(true){
//         var Name = "Abu Huraira"
//         console.log(Name)
//     }
//     console.log(Name)
// }
// myFun()

// -------------------------default parameters -------------------------------------------------
// when you dont pass arguments it shoud set value as default

// const myFun = function(a,b=0){
//     console.log(a+b)
// }
// myFun(4,6)


// --------------------------- rest parameters -----------------------------------------
// all  arguments are set to the parameter as array

// const myFun = function(a,...b){
//     console.log(`value of a : ${a}`)
//     console.log("value of b : ",b)
// }

// myFun(1,2,3,4,5,2)

// ------------------------------------exercise -------------------------------------------------
// create a function to add all arguments using rest parameter


// solution
// const addAll = function(a,...b){
//     var add = 0
//     console.log(a)
//     for(var index in b){
//        add = add + b[index]
//        console.log(b[index])
//     }
//     console.log(`Sum of all arguments is : ${a+add}`)
//     // console.log(typeof(a))

// }
// addAll(1,2,5)

// sum of array elements 
// function arrayfun(arr){
//     var add = 0;
//     for(let i=0; i<arr.length; i++){
//         add = add + arr[i]
//         console.log(arr[i])
//     }
//     console.log(add)
// }
// arrayfun([1,2,3])


// ---------------------- parameter destructuring -------------------------------------

// const person = {
//     Name : "Abu Huraira",
//     gender : 'male',
//     age : 22
// }
// // 1
// const Func = function(obj){
//     console.log(obj.Name)
//     console.log(obj.gender)
//     console.log(obj.age)
//     console.log(obj.status)
// }
// Func(person)

// // 2
// const Func = function({Name,gender,age,status}){
//     console.log(Name)
//     console.log(gender)
//     console.log(age)
//     console.log(status)
// }
// Func(person)


// ------------------------callback function ----------------------------------------
// // passing function as a argument

// const mainFun = function(callback){//callback arg is actually callback function
//     callback("Abu Huraira");
// }
// const callback = function(name){
//     console.log("This is call back function")
//     console.log(`My name is ${name}`)
// }

// mainFun(callback)

// ---------------- function returning function ---------------------------------------

// when a function returns a function
// // 1
// const mainFun = function(){
//     function newFunc(){
//         return("This is newFun() inside the mainFun()")
//     }
//     return newFunc;
// }

// const ans = mainFun()
// console.log(ans())

// // 2
// const mainFun = function(){
//     function newFunc(){
//         return("This is newFun() inside the mainFun()")
//     }
//     return newFunc();
// }

// const ans = mainFun()
// console.log(ans)


// -------------------------- array methods ------------------------------------------


// ---------------------- 1. forEach() array methods ---------------------------------------

// traverse the array and accept the element and index as arguments
// but it does not make new array 

let array = [1,2,4,5,6,7]

// function multiplyby2(){
//     for (let i =0; i<array.length;i++){
//       console.log(`${array[i]}*2 = ${array[i]*2} at index ${i}`)
//     }
// }
// multiplyby2(array)

// we can do the above code by foreach() method


// //1
// array.forEach(function(ele,ind){
//     console.log(`${ele}*2 = ${ele*2} at index ${ind}`)
// })
// console.log(array)

// // 2
// function myFun(number, index){
//     console.log(`${number}*2 = ${number*2} at index ${index}`)
// }
// array.forEach(myFun)

// array.forEach(function(number,index){
//     console.log(` number : ${number} at index ${index}`)
// }) 


let users = [
    {firstName : "Abu Huraira", age: 20},
    {firstName : "Kamal ", age: 10},
    {firstName : "Zubair", age: 20},
    {firstName : "Shabeer", age: 30},
    {firstName : "Daniyal", age: 40},
]

const obj = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3',
    'key4': 'value4'
}

// // with function declaration
// users.forEach(function(user){
//     console.log(`Name : ${user.firstName}`)
// })


// with arrow function
// users.forEach( user => console.log(`Name : ${user.firstName}`))



// //we can also use for of loop
// for(let user of users){
//     console.log(`Name : ${user.firstName}`)
// }


// ------------------- 2. map array method -----------------------------------------
// it makes the copy of the array
// use return in map method instead of console.log


// //1
// // function declaration
// let newVar  = array.map(function(number, index){
//     // it does not accept the console.log
//     return (`${number*number} : ${index}`)
// })
// console.log(array)
// console.log(newVar)


// // 2
// // arrow function
// let newVar = array.map(num =>{
//     return(num*2)
// })
// console.log(newVar)

// // 3
// // callback function
// function callback(number, index){
//     // it returns single argument
//     return (number*number)
// }
// let newVar = (array.map(callback))
// console.log(newVar)


// ---------------------------------------------------------------------------------
// exercise 

// make blueprint of the array "users" and save and print all firstName in 
// the new array 


// //1
// let arrow = elements => {
//         return (`First Name : ${elements.firstName}`)
// }
// console.log(users.map(arrow))


// // //2
// const newArr = users.map(ele=>{
//     return ele.firstName;
// })
// console.log(newArr)

// // //3
// const newArr = users.forEach(ele => {
//  console.log(`First Name : ${ele.firstName}`) 
// })


// --------------------------- 3.filter array method --------------------------------------
// same as map() but it returns true or false 
// and make new array when element lies on the condition 

// // 1
// // function declaration
// function isEven(numbers){
//     return numbers%2==0
// }
// function isOdd(numbers){
//     return numbers%2!=0;
// }

// // it accepts the first argument only 
// let newVar = array.filter(isEven,isOdd)
// console.log(array)
// console.log(newVar)

// // 2
// // function expression
// let isEven = function(numbers){
//     return numbers%2==0
// }
// let newVar = array.filter(isEven)
// console.log(newVar)


// // // 3
// // // arrow function 
// // let isEven = numbers => {
// //     return numbers%2==0
// // }
// // let newVar = array.filter(isEven)
// // console.log(newVar)


// // OR 
// const even = array.filter( ele => { return ele%2 == 0 })
// console.log(even)



// // //4
// let newVar = (array.filter(function(number,index){
//     return(number%2===0, index)
// }))
// console.log(newVar)

// // OR 
// // let newVar = (array.filter(function(number,index){
// //     return(number%2===0, index)
// // }))
// // console.log(newVar)

// ----------------------4. reduce array method --------------------------------

// it returns the sum of the array elements
// it has accumulator : first element of the array
// current value : maybe second element or the last element of the array

// let newVar = array.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue 
// })
// console.log(array)
// console.log(newVar)


// exercise
// sum all the ages from the array users

// //solution
// let SumOfAges = users.reduce((ele1,ele2)=>{
//     //use . with the current value not with accumulator
//     return (ele1 + ele2.age) },0) 
//     // 0 is actually default value of accumulator
//     // otherwise it takes the ages as string 
// console.log(SumOfAges)


// ----------------------------5. sort array methods -------------------------------------

// console.log(array.sort())// 120, 2, 4, 5, 6, 7 it is not sorted actually
// we will use callback function


// console.log(array.sort((a,b)=>a-b))  //2, 4, 5, 6, 7, 120 ascending order
// console.log(array.sort((a,b)=>b-a))  //120, 7, 6, 5, 4, 2 descending order


// ----------------------------- EXERCISES -------------------------------------------

// // 1. Write a JavaScript function to check
// //  whether an `input` is an array or not.


// //SOLUTION
// var var1 = "Abu Huraira"
// var var2= [1,2,3]

// const isArray = function(argument){
//     // if (toString(argument) === "[object undefined]")
//     if (toString.call(argument) === "[object Array]")
//         return true
//         return false
 
//     };

// console.log(isArray(var1))
// console.log(isArray(var2))
// // console.log(toString(var2))

// // 2. Write a JavaScript function to clone an array.
// // console.log(array_Clone([1, 2, 4, 0]));
// // console.log(array_Clone([1, 2, [4, 0]]));
// // [1, 2, 4, 0]
// // [1, 2, [4, 0]]

// //SOLUTION
// var arr1 = [1,2,4,0]
// var arr2 = [1,2,[4,0]]

// function clone(arg){
//     var newArr = [...arg]
//    console.log(newArr) 
// }
// clone(arr1)
// clone(arr2)


// // 3. Write a JavaScript function to get the first 
// // element of an array. Passing a parameter 'n' will 
// // return the first 'n' elements of the array.


// //SOLUTION

// var array = [[],4,5,6,]

// const myfun = function(n){
//    for(var i=0; i<array.length; i++){
//        if(i==0){
//            console.log(n[i])
//            break
//        }
//    }
// }
// myfun(array)

// // 4. Write a JavaScript function to get the last element 
// // of an array. Passing a parameter 'n' will return the last 
// // 'n' elements of the array. 


// //SOLUTION
// var array = [[],4,5,6,[]]

// const myfun = function(n){
  
//            console.log(n[n.length-1])

// }
// myfun(array)

// // 5. Write a simple JavaScript program to join
// // all elements of the following array into a string.


// // //SOLUTION
// var myColor = ["Red", "Green", "White", "Black"];

// function join(arg){
//     // var newArr = arg.join("  ")
//     var newArr = arg.join(" - ")
//     // var newArr = arg.join(" + ")
//     // var newArr = arg.join(" , ")
//     console.log(newArr)
// }
// join(myColor)



// // 6. Write a JavaScript program which accept a number
// //  as input and insert dashes (-) between each two even 
// //  numbers. For example if you accept 025468 the output 
// //  should be 0-254-6-8.

// // SOLUTION

// //take input number
// var input = window.prompt()
// //convert to string
// const str = input.toString()
// //make an array and put the 1st element in the newarray
// const newArr = [str[0]]


//     for(let i=1; i<str.length; i++){
//         if( (str[i-1] % 2 === 0) && (str[i] % 2 === 0 ) ){
//             newArr.push('-',str[i])
//         }
//         else{
//             newArr.push(str[i])
//         }
//     }
// console.log(newArr.join(""))


// // 7. Write a JavaScript program to sort the items of an array.
// // solution

// const array = [10,9,8,7,6,5,4,3,12,4,3,5]

// function sorting(){
//     return array.sort((a,b)=>a-b)   //ascending order
//     // return array.sort((a,b)=>a-b)   //descending order   
// }
// console.log(sorting())



// // 8. Write a JavaScript program to find the most 
// // frequent item of an array. 

// // Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// // Sample Output : a ( 5 times )

// // solution

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    
//     var count = 0;
//     var fre = 1;

// for(var i=0; i<arr1.length; i++){
    
//     for(var j=0; j<arr1.length; j++){

//         if(arr1[i] == arr1[j]){
//             count++;
//         }
//         if(count>fre){
//             fre = count;
//             item = arr1[i]
//         }
//     }
//     count = 0;
// }
// console.log(`${item} : ${fre} times`)


// // 9. Write a JavaScript program which accept a string
// //    as input and swap the case of each character. 
// //    For example if you input 'The Quick Brown Fox'
// //    the output should be 'tHE qUICK bROWN fOX'


// var str = window.prompt()
// console.log(str)
// var lower = 'abcdfghijklmnopqrstuvwxyz'
// var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// var result = []

// for(var i=0; i<str.length; i++){
//     for(var j=0; j<lower.length;j++){
//         if(str[i] === lower[j]){
//             result.push(lower[j].toUpperCase())
//         }
//         else if(str[i] === upper[j]){
//             result.push(upper[j].toLowerCase())
//         }
//         else if(str[i] === ' '){
//             result.push(' ')
//         }
//     }
// }
// console.log(result.join(''))


// // 10. Write a JavaScript program which prints the elements of 
// //     the following array. 
// //     Note : Use nested for loops.
// //     Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], 
// //     [7, 4, 28, 14], [3, 10, 26, 7]];
// //     Sample Output :
// //     "row 0"
// //     " 1"
// //     " 2"
// //     " 1"
// //     " 24"
// //     "row 1"
// //     -----
// //     -----


// // solution
//  var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27],[7, 4, 28, 14], [3, 10, 26, 7]];

//  for(var i=0; i<a.length; i++){
//      console.log(`ROW : ${i+1}`)
//      for(var j=0; j<a[i].length; j++){
//          console.log(a[i][j])
//      }
//  }


// 11. Write a JavaScript program to find the sum of squares of a numeric vector.


// SOLUTION
// //1
// const newArr = array.map( a=>{  return a*a })
// console.log(newArr)

// const squareSum = newArr.reduce((a,b)=>{
//     return a+b 
// })
// console.log(squareSum)

// // //2
// let sum = 0;

// function sumSquare (arr){
//     for(var i=0; i<array.length; i++){
//         sum += Math.pow(arr[i],2)
//     }
//     return sum;
// }
// console.log(sumSquare(array))


// // 12. Write a JavaScript program to compute the
// //  sum and product of an array of integers.


// // SOLUTION
// const sum = array.reduce((a,b) =>{ return a+b})
// console.log(sum)

// const product = array.reduce((a,b) =>{ return a*b})
// console.log(product)

// 13. Write a JavaScript program to add items in an blank 
// array and display the items.


// // // SOLUTION

// let arr = []
// const size = window.prompt("Enter size of the array")

// alert("Enter elements in the array")
// for(let i=0; i<size; i++){
//    var arrEle = window.prompt();
//    arr.push(arrEle)
// }
// alert("You enetered the elements")
// for(let i=0; i<size; i++){
//     console.log(`Element ${i} = ${arr[i]}`)
// }


// ----------------------- 6. find array method ------------------------------------

// it traverses the array elements and check the given condition 
// and prints the first element which fulfills the condition
// it accepts both return and console.log
// return displays the element which fullfils the condition
// and console returns the truth values


var animals = ['cat','dog','lion','sheep']

// // arrow function with console

// var newvar = animals.find((ani)=> {console.log(ani.length===3)} )

// // arrow function with returm

// var newvar = animals.find((ani)=> {return(ani.length===3)} )
// console.log(newvar)


// // function expression with return
// const fun = function(ele){
//     return ele.length == 4 //return elements
// }
// const anim =  animals.find((fun))
// console.log(anim)


// // function expression with console
// const fun = function(ele){
//     console.log(ele.length == 3) //true or false
// }
// const anim =  animals.find((fun))
// console.log(anim)

// // function declaration with return 
// function fun(ele){
//     return ele.length === 5
// }
// const ele = animals.find(fun)
// console.log(ele)


// // function declaration with console 
// function fun(ele){
//     console.log( ele.length === 5) 
// }
// const ele = animals.find(fun)
// console.log(ele)

// ------------------------- use of find ---------------------------------------------

// // print the info of the specific user 

// let customers = [
//     {user : 1 , name : "Ali" , email : "ali@gmail.com" , password : 11111},
//     {user : 2 , name : "Aiman" , email : "aiman@gmail.com" , password : 22222},
//     {user : 3 , name : "Aliyan" , email : "aliyan@gmail.com" , password : 32322},
//     {user : 4 , name : "Alishba" , email : "alishba@gmail.com" , password : 453453},
//     {user : 5 , name : "Abid" , email : "abid@gmail.com" , password : 345534},
//     {user : 6 , name : "Amna" , email : "amna@gmail.com" , password : 345543},
// ]

// const id = customers.find( id =>  id.name === 'Ali')
// console.log(id)

// ---------------------- 7. every array method ----------------------------------------
// //It returns the Boolean value when all elements fulfill the condition


// let arr1 = [2,4,6,8,12,14,16,18]
// let arr2 = [21,41,61,81,121,141,161,181]

// const even = arr1.every(even=>even%2==0)
// console.log(even)

// const odd = arr2.every(odd=>even%2!==0)
// console.log(odd)

// ---------------------------use of every method ----------------------------------------


// //check the price of all products less than 80000
// let products = [
//    { productName : "mobile" , price : 30000},
//    { productName : "Charger" , price : 1000},
//    { productName : "laptop" , price : 45000},
//    { productName : "Google pixel 6 pro" , price : 100000},
// ]

// const userCart = products.every(proPrice => {proPrice.price < 80000})
// console.log(userCart) // false 




// ---------------------- 8. some array method ----------------------------------------
// // //It returns the Boolean value when at least
// // //one elements fulfills the condition

// let arr1 = [2,3,416,18]
// let arr2 = [21,81,8]

// const even = arr1.some(even=>even%2==0)
// console.log(even)

// const odd = arr2.some(odd=>odd%2!==0)
// console.log(odd)



// ---------------------------use of some method ----------------------------------------


// //check the price of at least one products greater than 80000
// let products = [
//    { productName : "mobile" , price : 30000},
//    { productName : "Charger" , price : 1000},
//    { productName : "laptop" , price : 45000},
//    { productName : "Google pixel 6 pro" , price : 100000},
// ]

// const userCart = products.some(proPrice =>  proPrice.price > 80000)
// console.log(userCart) // true 


// // -------------------- 9 slice array method------------------------------------

// // it changes the original array
// //and copy the elements of the array 

// console.log(animals)
// const ani = animals.slice(1)
// console.log(ani)



// ------------------------ 10 splice array method --------------------------------------

// it changes the original array
// it deletes and insert the elements in the array 
// in the order start->delete->insert 



// //deletetion
// console.log(animals)
// const newanimal = animals.splice(2,1)   //it stores the deleted items
// console.log(animals)


// // insertion
// console.log(animals)
// const newanimal = animals.splice(1,1,'bear','polar bear','blue whale')   //it stores the deleted items
// console.log(animals)

// // ------------------------- 11 fill array method ---------------------------------
// // it changes the elements in the array or fill the 
// // array with specific value

// // console.log(array)
// // array.fill(2)
// // console.log(array)
// // array.fill(11,2,4)
// console.log(array)
// // array.fill(2)
// // console.log(array)


// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// ------------------------------ iterables ------------------------------------

// who accepts the loop 
// like array and strings sets and map are iterables but not object


// //1 string
// var str = "Abu Huraira"
// for(let char of str){
//     console.log(char)
// }

// // 2 array 
// for(let char of animals){
//     console.log(char)
// }


// //3 objects
// // console.log(obj)
// for(let item of obj){
//     console.log(item) //not iterable
// }

// ----------------------- array like objects------------------------------------------
// 1 which has length property 
// 2 and can access by index 
// like string->array-> array object 


// // //1 string 
// const str = "University"
// console.log(str.length)//10
// console.log(str[9])//y


// // //2 array 
// console.log(animals)
// console.log(animals.length)//4
// console.log(animals[3])


// // //3 array object
// console.log(users)
// console.log(users.length)//5
// console.log(users[3])


// ---------------------------- sets -------------------------------------------

// 1 it contains unique values
// 2 it stores data of any type 
// 3 cannot access element through index
// 4 two different arrays with same elements can be stored in set 
// 5 one defined array cannot be stored two times in a set  
// it has .add .has functions

// const set = new Set([3,2,1]);
// console.log(set)

// const sets = new Set()
// sets.add(animals)
// sets.add(array)
// sets.add([1,2,3])
// sets.add([1,2,3])// it can be added to set because it is new array in the memory 
// // console.log(sets)

// // // check the element in the set 

// // if (set.has(array)){
// //     console.log('present')
// // }
// // else{
// //     console.log('not present')
// // }


// // iteration by for of loop

// for(let set of sets){
//     console.log(set)
// }




// // ------------------------------ exercise -------------------------------------------


// // // 1 print the unique elements of the array 
// let arr = [1,1,1,2,3,3,4,4,5,6,0,7,7,7,7,7,7,7,9]

// // console.log(arr)
// const uniqueelements = new Set(arr)
// // console.log(uniqueelements)

// // 2 find the length of the set
// let count = 0;
// for(let number of newArr){
//     count = count + 1
// }
// console.log(`length of the set is ${count}`)


// --------------------------------- MAP -----------------------------------------------

// like object and iterable
// object has key in string or symbols 
// but in map we have key in any data type 
// it has methods .set .keys .get


// let obje = {
//     name: "android",
//     1 : "android 10" // 1 is also string in object
// }

// for(let ob in obje){
//     // console.log(ob)
//     console.log(typeof(ob))
// }


let mapp = new Map()
mapp.set('name' ,'abu huraira')//.set(add)
mapp.set(1 ,'cast')
mapp.set([] ,'array')
mapp.set({} ,'object literals')
// console.log(mapp)

// console.log(mapp.keys())//.key(print keys only)

// for(let key of mapp.keys()){
//     console.log(key, typeof key)
// }

// console.log(mapp.get('name'))//.get (get specific value)


// // we can also destructure the map 
// for(let key of mapp){
//     console.log(key) //it prints the key value in array
// }


// // // detrucuturing 

// for(let [key,value] of mapp){
//     console.log(key,value)
// }

// let newmap = new Map([
//     ['name','abu bakar'],
//     ['age',7],
//     ['class',10]
// ])
// console.log(newmap)

// -------------------------- exercise -----------------------------------

// // add key value pair for Object using map()

// let userInfo = {
//     name : 'haider',
//     class : "matric"
// }

// console.log(userInfo)

// let updateInfo = new Map()
// updateInfo.set(userInfo,{age:10 , gender : 'male'})
// console.log(updateInfo.get(userInfo).gender)


// --------------- cloning in object using .assign---------------------------

// let obj1 = {
//     key1:"value1",
//     key2:"value2",
// }

// let obj2 = obj1

// obj1.key3="value3" //this will also added to obj2 because they have same address im memory
// console.log(obj1)
// console.log(obj2)


// // 1 to avoid this using sparade operator
// let obj1 = {
//     key1:"value1",
//     key2:"value2",
// }

// let obj2 = {...obj1}

// obj1.key3="value3"
// console.log(obj1)
// console.log(obj2)

// // 2 we can also use object.assign method
// let obj1 = {
//     key1:"value1",
//     key2:"value2",
// }

// let obj2 = Object.assign({}, obj1)

// obj1.key3="value3"
// console.log(obj1)
// console.log(obj2)

// -----------------------optional chaining--------------------------------

// 1 protect the user to see the error on the screen 
// 2 if the error is occur it shows the "undefined" and executes the rest code
// 3 we use the ?. for optional chaining
// 4 if the value is undefined it will not executes the key of the undefined 


// let name = {
//     name : "huraira",
//     // address: {housenumber: 2222}
// }

// // console.log(name.address.housenumber) //error

// console.log(name?.address?.housenumber) //undefind after address undefined it will 
//                                         // not execute the housenumber


// -------------------------------- methods with this ----------------------------------------------

// // function inside object


// // 1
// let persons = {
//     firstname : 'abu huraira',
//     age : 22,
//     about : function(){
//         console.log(`person name is ${persons.firstname} and age is ${this.age}`)
//     }
// }

// // here this is actually our Object name "persons" 
// // this === persons 
// persons.about()


// // 2
// let persons = {
//     firstname : 'abu huraira',
//     age : 22,
//     about : function(){
//         console.log(this) //it will print our object
//     }
// }

// // here this is actually our Object name persons 
// persons.about()



// // 3
// function personInfo(){
//    console.log(`person name is ${this.firstname} and age is ${this.age}`)
 
// }

// let persons1 = {
//     firstname : 'abu huraira',
//     age : 22,
//     about : personInfo
// }

// let persons2 = {
//     firstname : 'abu bakar',
//     age : 18,
//     about : personInfo
// }

// let persons3 = {
//     firstname : 'sufyan',
//     age : 20,
//     about : personInfo
// }

// persons1.about()
// persons2.about()
// persons3.about()


// console.log(this)
// here this === window // both works same

// ------------------------------- call ----------------------------------------

// // 1 we can call the function through call 
// // 2 we can call the function for the other object which has not that function


// // 1
// function calling(){
//     console.log("hello world")
// }
// calling.call()


// // 2

// // we can give about to user2 using .call 
// let user1 = {
//     name : "user1",
//     age : 11,
//     about : function (){
//         console.log(this.name, this.age)
//     }
// }
// let user2 = {
//     name : "user2",
//     age : 22,
// }

// user1.about.call(user2)

// // 3 we can also pass args in call 

// // we can give about to user2 using .call 
// let user1 = {
//     name : "user1",
//     age : 11,
//     about : function (email, pass){
//         console.log(this.name, this.age, email, pass) // this will not come with arg/parameters
//     }
// }
// let user2 = {
//     name : "user2",
//     age : 22,
// }

// user1.about.call(user2,'abuhuraira@gmail.com','1121212')


// // // 4

// function about(email, pass){
//     console.log(this.name, this.age, email, pass) // this will not come with arg/parameters
// }

// let user1 = {
//     name : "user1",
//     age : 11,
// }
// let user2 = {
//     name : "user2",
//     age : 22,
// }

// about.call(user1,'abuhuraira@gmail.com','1121212')


// ----------------------- apply ----------------------------------


// // same as call but args are passed by array 

// function about(city){
//     console.log(this.firstname, this.age, city, )
// }

// let user1 = {
//     firstname : "ali",
//     age : 20
// }

// let user2 = {
//     firstname : "adil",
//     age : 22
// }

// about.apply(user1,["Karachi"])
// about.apply(user2,["Lahore"])

// ------------------------------ bind --------------------------------------

// same as the call but it makes the copy of the function 


// function about(city){
//     console.log(this.firstname, this.age,city)
// }

// let user1 = {
//     firstname : "ali",
//     age : 22
// }

// let user2 = {
//     firstname : "jamal",
//     age : 11
// }

// const userInfo1 = about.bind(user1,"karachi" ) // will not print bcs it makes the copy 
// userInfo1()

// const userInfo2 = about.bind(user2,"lahore" )// will not print bcs it makes the copy 
// userInfo2()







// let user1 = {
//     firstname : "ali",
//     age : 22,
//     about : function(){
//         console.log(this.firstname, this.age)
//     }
// }

// let user2 = {
//     firstname : "jamal",
//     age : 11
// }

// // user1.about()

// // store about in a vaiable 

// const myfunc =  user1.about
// myfunc() // print undefined undefined  
//          // bcs this will connect with myfun which has window function by default


// // we can recover the problem through .bind 
// const myfunc1 =  user1.about.bind(user1)
// const myfunc2 =  user1.about.bind(user2)

// myfunc1()
// myfunc2()

// --------------- arrow function and this ------------------------------

// // arrow fun has this keyword of previous Object

// let user1 = {
//     name : "adnan",
//     age : 22,
//     about : ()=>{
//         console.log(this.name, this.age)
//     }
// }
// user1.about() // undefined //bcs the obj of arrow fun is window
//               // so window.name === undefined


// // we can also write the function in shorthand


// let user1 = {
//     name : "adnan",
//     age : 22,
//     about (){
//         console.log(this.name, this.age)
//     }
// }
// user1.about()


// -------------------------------- exercise --------------------------------------

// create a function to create multiple objects

// function createUsers(firstname, lastname, age, email, address){

//     const users = {}
//     users.firstname = firstname,
//     users.lastname = lastname,
//     users.age = age,
//     users.email = email,
//     users.address = address,
//     users.about = function(){
//        console.log(`${this.lastname} is ${this.age} years old`)
//     }

//     return (users) ;

// }

// const data = createUsers('Abu','Huraira',22,'abuhuraira775@gmail.com','Karachi')
// console.log(data)
// data.about()


// ---------------- we can separately create methods ----------------------------


// // create the methods separately and connect with the Objects


// let userMethdos = {
//     about : function(){
//         console.log(`${this.lastname} is ${this.age} years old`)
//      },

//      is18 : function (){
//         console.log(18>=18)
//      }
// }
// function createUsers(firstname, lastname, age, email, address){

//     const users = {}
//     users.firstname = firstname;
//     users.lastname = lastname;
//     users.age = age;
//     users.email = email;
//     users.address = address;
//     users.about = userMethdos.about;
//     users.is18 = userMethdos.is18;

//     return users
// }

// const user1 = createUsers('Abu','Huraira',22,'abuhuraira775@gmail.com','Karachi')
// console.log(user1)
// user1.about()

// const user2 = createUsers('Ali','Kamal',18,'alikamal@gmail.com','Lahore')
// console.log(user2)
// user2.about()


// ---------------- 1. object.create object method -------------------------------

// let obj1 = {
//     key1 : 'value1'
// }

// let obj2 = {
//     key2 : 'value2'
// }

// // // console.log(obj2.key2) // value2
// // console.log(obj2.key1) // undefined


// // we want if the obj2 has not key2 than goto obj1 and prints the key1 

// // than use Object.create for and empty Object
// // and paranthesis should be filled with one parameter


// let obj3 = Object.create(obj1) // {}
// obj3.key3 = 'value3'
// // and we cannot recreate Object like this 👇

//         // obj3 = {
//         //     key3 : 'value3'
//         // }

// console.log(obj3.key3) // value3
// console.log(obj3.key1) // first check in obj3 and then goto obj1 and print "value1"





// -----------------------------------------------------------------------------------

// let obj1 = {
//     key1 : 'value1'
// }

// // console.log(obj1.__proto__)  

// let obj2 = Object.create(obj1)
// obj2.key2 = 'value2'

// // console.log(obj2) 
// // console.log(obj2.__proto__)  // print the obj 1

// // bacause it is the internal property

// // it will also print the [[prototype]] or __proto__


// --------------------- Object.create (again) ---------------------------------------


// // create the methods separately and connect with the Objects


// let userMethdos = {
//     about : function(){
//         console.log(`${this.lastname} is ${this.age} years old`)
//      },

//      is18 : function (){
//         console.log(18>=18)
//      }
// }
// function createUsers(firstname, lastname, age, email, address){

//     const users = Object.create(userMethdos)
//     users.firstname = firstname;
//     users.lastname = lastname;
//     users.age = age;
//     users.email = email;
//     users.address = address;
    
//     return users
// }

// const user1 = createUsers('Abu','Huraira',22,'abuhuraira775@gmail.com','Karachi')
// console.log(user1)
// user1.about()

// const user2 = createUsers('Ali','Kamal',18,'alikamal@gmail.com','Lahore')
// console.log(user2)
// user2.about()


// -------------------------- function as object -----------------------------------

// function hello(){
//     console.log('hello world')
// }

// console.log(typeof hello)
// console.log(hello.name) // .name is the property of func that
                        // tell the name of function

// // we can add property as Object

// hello.myOwnProperty = "Value given to function like object"
// console.log(hello.myOwnProperty)


// --------------------- prototype ----------------------------------------

// it is actually the property of function
// that give us empty Object
// and we can add key pair in that protoype
// it is specific with function only 
// means only function provide us prototype


// function hellofunction(){
//     console.log('hi world')
// }

// hellofunction()

// // check other data type has protype property or not 

// hellostring = 'hi world'

// helloarray = ['value']

// helloobj = {key1:'value'}

// if(hellostring.prototype){
//     console.log('string has protype')
// }

// else if(helloarray.prototype){
//     console.log('array has protype')
// }
// else if(hellofunction.prototype){
//     console.log('function has protype')
// }

// else if(helloobj.prototype){
//     console.log('object has protype')
// }

// else{
//     console.log('not present')
// }

// --------------------------------------------------------------------------------

// add properties using prototype


// 1


// function hellofunction(){
//     console.log('hi world')
// }

// hellofunction.prototype.fun = function(){
//     console.log('function in function using prototype') 
// }
// hellofunction.prototype.fun()

// // 2
// hellofunction.prototype.name = 'abu huraira'
// console.log(hellofunction.prototype.name)

// ----------------------------------------------------------------------------


// function createUsers(firstname, lastname, age, email, address){

//     const users = Object.create(createUsers.prototype)
//     users.firstname = firstname;
//     users.lastname = lastname;
//     users.age = age;
//     users.email = email;
//     users.address = address;
    
//     return users
// }


// createUsers.prototype.about = function (){
//     return (`${this.firstname} is ${this.age} years old.`)
// }
// createUsers.prototype.is18 = function (){
//     return (this.age>=18)
// }

// const user1 = createUsers('Hamid','Ali',22,'hamid@gmail.com','Karachi')
// console.log(user1)
// console.log(user1.about())
// console.log(user1.is18())



// ------------------------------ new keyword-----------------------------------

// 1 it creates empty object {}
// 2 it returns the Object {}
// 3 it links the function with prototype
// we dont need to use Object.create()

// function aboutuser(firstname,age){
//     this.firstName = firstname
//     this.age = age

// }

// const user = new aboutuser('ali',18)
// console.log( user.age)


// CreateUsers is constructor bcs it is creating an Object 
// write in capital letter 

// function CreateUsers(firstname, lastname, age, email, address){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.email = email;
//     this.address = address;
// }

// CreateUsers.prototype.about = function (){
//     console.log (`${this.firstname} is ${this.age} years old.`)
// }

// CreateUsers.prototype.is18 = function (){
//     console.log (this.age>=18)
// }

// const user1 = new CreateUsers('Hamid','Ali',22,'hamid@gmail.com','Karachi')
// console.log(user1)
// user1.about()
// user1.is18()



// ------------------------- hasownproperty --------------------------------
// print the keys of the function which are present in that function


// function CreateUsers(firstname, lastname, age, email, address){
    // this.firstname = firstname;
    // this.lastname = lastname;
    // this.age = age;
    // this.email = email;
    // this.address = address;
// }

// CreateUsers.prototype.about = function (){
//     console.log (`${this.firstname} is ${this.age} years old.`)
// }

// CreateUsers.prototype.is18 = function (){
//     console.log (this.age>=18)
// }

// const user1 = new CreateUsers('Hamid','Ali',22,'hamid@gmail.com','Karachi')

// // 1
// for(let key in user1) {  console.log(key) }//print all the keys of that object and function

// // 2
// console.log("----------------------------------------------")
// for(let key in user1){
//     if(user1.hasOwnProperty(key)){ //print all keys present only in functions
//         console.log(key)
//     }
// }


// --------------------------------------------------------------------------------


// // let numbers = [1,2,3,4,5]

// // we can also write the array like this 
// let numbers = new Array(1,2,3,4)
// console.log(Array.prototype.at)


// -------------------- class ---------------------------------------------------



// class CreateUsers{
//     constructor(firstname,lastname,age,email,address) { // it creates object and return by default
//         console.log("\nconstructor called")
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.email = email;
//         this.address = address;

//     }

    // all methods will go here 
//     about(){
//         console.log (`${this.firstname} is ${this.age} years old.`)
//     }

//     is18(){
//         console.log (this.age>=18)
//     }
//     sing(){
//         console.log("har pal yaha jee bhar jeo jo he sama kal ho na ho")
//     }
// }

// // // always call the constructor with new keyword

// const user1 = new CreateUsers('alibaba','husain',2200,'ali@gmail.com','karachi')
// // console.log(user1)
// // user1.about()
// // user1.is18()
// // user1.sing()


// // check the prototype of user1
// console.log(Object.getPrototypeOf(user1))


// ------------------------------ extends -----------------------------------

// class Animal {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     eat(){
//         console.log(`${this.name} is eating`)
//     }
//     isCute(){
//         console.log(true)
//     }
// }

// const obje = new Animal('tommy',12)
// console.log(obje)
// obje.eat()


// class Dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age)
//         this.speed = speed
//     }
//     run(){
//         console.log(`${this.name} is runnig with 100 meters per minute`)
//     }
// }
// const dog = new Dog('dee dee',1)
// console.log(dog)
// dog.eat()
// dog.run()


// --------------------------------- getter --------------------------------------

// // it make the function as the property of the obj 

// class Callname{
//     constructor(name){
//         this.name = name;
//     }

//     get about(){
//         return `${this.name} runs fast`
//     }

// }

// const obje = new Callname('ali')
// // console.log(obje)
// console.log(obje.about)
// --------------------------------- setter --------------------------------------

// it makes changes in the argiments passed

class Callname{
    constructor(name){
        this.name = name;
    }

    get about(){
        return `${this.name} runs fast`
    }
    setName(name){
        this.name = name
    }

}

const obje = new Callname('ali')
// console.log(obje)
console.log(obje.name)
obje.setName("babar")

// // same as the above
// obje.name = 'babar'

console.log(obje.name)
