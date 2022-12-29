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


var id = [5, 1, 3, 7];

console.log(id.sort);