function celTofar(celcuis) {
  let farhrenheit = (9 * celcuis) / 5 + 32;
  return farhrenheit;
}
document.getElementById("convert").onclick = function () {
  let celcuis = parseFloat(document.getElementById("13").value);

  if (document.getElementById("13").value == "") {
    document.getElementById("14").innerHTML = " ";
    

    alert("please enter some value");
  } else {
    document.getElementById("14").innerHTML = celTofar(celcuis);

  }
};


document.getElementById("344").onclick = function () {
    let grade1 = parseFloat(document.getElementById("122").value);
    let grade2 = parseFloat(document.getElementById("123").value);
    let absence = parseFloat(document.getElementById("124").value);

    let totalClasses= 20;
    

    if(grade1 == "" || grade2 == "" || absence == ""){
        alert('all fiels are neccasry');
    }else{
        let avarage = (grade1+grade2)/2;
        let presence = (totalClasses - absence)/totalClasses;
        document.getElementById("125").innerHTML = avarage;
        console.log(avarage);
        console.log(presence);
        let result;
        if (avarage < 0.65 && presence <0.7 ){
            result = "the student isfaielfd dur to insufficent gradess"; 

        }else if(avarage < 0.65){
            result = "the student is failed due to insufficent grades" ;
        }else if(presence < 0.7){
            result = "the student is detained due to not attending the classes" ;
        }else{
            result = "the student has been approved";

        }
        document.getElementById("322").innerHTML = result;
    }
    

};



// var sales = [

//     {
//         'student': 'Jason Gomes',
//         'date': '10/06/2018',
//         'amount': 34.99,
//         'refundRequested': null
        
//     },

//     {
//         'student': 'Carlos Blue',
//         'date': '10/06/2018',
//         'amount': 29.99,
//         'refundRequested': null
        
//     },

//     {
//         'student': 'Martin Heyes',
//         'date': '11/06/2018',
//         'amount': 39.99,
//         'refundRequested': '13/06/2018'
        
//     },

//     {
//         'student': 'Isabella Hopkins',
//         'date': '11/06/2018',
//         'amount': 29.99,
//         'refundRequested': null
        
//     },

//     {
//         'student': 'Andrew Walt',
//         'date': '12/06/2018',
//         'amount': 34.99,
//         'refundRequested': null
        
//     }

// ];



let orderDate = new Date("2020-02-26").getTime();
let deliveryDate = new Date("2020-03-26").getTime();

let leadTime = Math.floor(deliveryDate-orderDate) / 86400000;

console.log(leadTime);
document.getElementById("date").innerHTML = leadTime;

// jquery has been start

$("#btn99").click(function(){
  $(".example").hide();
  $("#btn99").hide();

});
$("#btn991").click(function(){
  $(".example").show();
  
  $("#btn991").hide();

});


function add(){
  let name = document.getElementById("name").value;
  if(name == ""){
    document.getElementById("eror").innerHTML = "please enter value";


  }else{
    let aditya = document.getElementById("name").value;
    document.getElementById("box").innerHTML = aditya;

    
  }
}


///



function add1(){
  // let newELement = document.createElement('inout');
  // document.getElementById('inout1').appendChild(newELement);
  let arrary = document.createElement('inout1').value;
  console.log(arrary);
 arrary=document.getElementById('inout');
  arrary.appendChild(arrary);


document.getElementById('inout').innerHTML = arrary;
}

document.getElementById('ghg').onclick = aditya;

// arrow function
// An arrow function return undefined
const empty =() =>{

};

// if else in const array function
let a;


// const simple = () =>
//   a>15 ? 15:a;

// this program will not run if you not pass the refrence value// in our case its a

const simple = (a) =>
  a>15 ? 15:a;

simple(16);
simple(15);

// maximum number in an const arrow funtion

const max = (a,b) => {
  if(a>b){
    console.log(a);

  }else{
    console.log(b);
  }
}

// Easy array filtering and mapping

const arr = [2,3,5,2,4,3,2];

// const sum = (arr) => {
//   arr.reduce;
// }

const sum = arr.reduce((a, b) => a + b);


const materials = ['Hydrogen','Helium','Lithium','Beryllium'];

console.log(materials.map(materials => materials.length));


const arrow = (a) => {
  return a+100;

}

arrow(13); // calling the function 113 output without calling the funvtion the function is not going to excute the task


const summ = (a,b) =>{
  const chuck = 65;
  return chuck + a + b; //<-- example of block scope ;

}

sum(35,73); // 173
// arrow funtion is better than convention method and not make each time funtion


//rrow function expressions should only be used for non-method functions because they do not have their own this.

class C{
  a = 8;
  constructor(){
    this.method = this.method.bound(this);
  }
  method(){
    console.log(this.a);

  }
}

// const arow function dont havbe thier own arogument 

const argument = [1,2,4];
const arir =()=> argument[0];

arir(); // its return 1'

// const arrow function cannot be use  as construtor
// it will throw an error when it gets called new see the below

const foot = () =>{

}
// error foot is not a constructor
const foo = new foot();

console.log("prototype in foo",foot);

// line break before arrow;
// const func = (a,b,c)
//  => 1; we cannot declare like that it will throw an error;

const func = (a,b,c) => 1; 
func(2,34,44);// output is 1;

//For the purpose of formatting, you may put the line break after the arrow or use parentheses/braces around the function body,

const dun = (a,b,c) =>
1;
dun(2,3,4);

const dum2 = (a,b,c) => (1);
dum2(3,4,2);

const dunc1 = (a,b,c) => {
  if(a>c && a>b){
    a=b+c;

  }else{
    return 2;
  }
  


}

dunc1();;// return undefinded because we are not intialize the a,b,c first declare then use 


const max4 = (a,b) => a>b?a:b;



// const sum4 = arr.reduce((a,b) =>a+b);

// higher order function in javascript 
const arr4 = [5,4,3,4,4];
// map funciton is used to transformed in an array
// transorm an array mean each and every value of the array has to be trancform to binary double triple using map function
const maper = [5,4,3,4,4];
function double(x){
  return x*2;

}
function triple(x){
  return x*3;

}

const outpu  =  maper.map(double);
const outpue  =  maper.map(double);
console.log(outpu);
console.log(outpue);

// binary conversion

function binary (x){
  return x.toString(2);

}

const outpute = maper.map(binary);
console.log(outpute);

// filter function is used to filter the value in an array

const arrya = [3,4,2,4,5];

// filter odd number;
function  isOdd(x){
  return x%2!=0; // check the other statment if u want so like greater than even odd less than



}
const output3 = arrya.filter(isOdd)
console.log(output3);


// reduce function reading ;











function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");


var radiobutton = document.getElementById('product');

for(var ar =0; a<radioItems.length; ar++){
  radioItems[a].onchange = function(){
    for(var b=0; b<radioItems.length; b++){
      if(radioItems[b].checked){
        var selectedRadio = radioItems[b].value;
        
      }
    }
  }
}
