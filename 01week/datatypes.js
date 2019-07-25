function displaydate(){
    const Mydate = new Date();
    console.log(Mydate)
}

displaydate();

function numberToString(){
    let myNumber=13
    console.log(myNumber)
    let myString= myNumber.toString();
    console.log("myString")
    
}

numberToString();

function stringToNum(){
   let cats=14
   console.log(cats)
   let num =parseInt("cats") 
}

stringToNum();

function addTwo(number){
return number + 2
}

addTwo(8);


function returnTypeof(thing) {
 return typeof thing ;
}

returnTypeof(true);

function returnTypeof(thing) {
 return typeof thing ;
}
 
let chicken= undefined;

returnTypeof(chicken);


function returnTypeof(thing) {
if (thing === null){
return null;
  }else{
    return typeof thing;
  }
}

returnTypeof(null);

function returnTypeof(thing) {
if (thing === null){
return null;
  }else if (Number.isNaN(thing) === true) {
    return NaN;
  } else{
    return typeof thing;
  }
}

returnTypeof(NaN);


