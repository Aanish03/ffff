// let number= parseFloat(12.8238292)


function fn1() {
  var date = document.getElementById("text").value;
  var datew = date.length;

  let element = document.getElementById("result");
  element.innerText = datew;
}

function fn2() {
  let space = document.getElementById("text").value;
  let space2 = space.split(" ").length - 1;
  let space3 = document.getElementById("space");
  space3.innerText = space2;
}
// while (datew == +1) {

// }

let space = document.getElementById("text").value;
let space2 = space.split(" ").length - 1;
let space3 = document.getElementById("space");






function fn3() {

   
  
  
  var input = document.getElementById("text").value ;
  let inputl = input.length 

  let inputarry = function (str) {
    return [...str];
  };
 var x = inputl 
  var inputarr5 = inputarry(input );

  var inputarr50 = inputarr5[inputarr5.length -1]


  
 

// console.log(inputarr50)

  let strplane = `aaauere nsi mi egestas erat orci nonummy nec dignissim bibendum duis cras, lacus varius torquent sociosqu porta hac. Vel hymenaeos est condimentum. Ligula facilisis tortor sit vulputate. Sem viverra vehicula aptent, et mollis Litora scelerisque cum accumsan elit lacinia neque eu ac laoreet aliquet diam nascetur. Fringilla nostra tristique neque. Eu ultricies dis venenatis litora. Volutpat vulputate orci justo auctor ullamcorper dapibus mi sociosqu duis dapibus, posuere a pharetra ligula ultrices. Nam hendrerit erat diam felis commodo venenatis Turpis molestie luctus mauris libero eleifend sem`;
  
  
  let getarry = function (str) {
    return [...str];
  };


  let v = inputl 
  const qq = getarry(strplane);
  var qq2 = qq[inputarr5.length];
  
  if (inputl < 1 ) {

    
  }
  else{

    var newqq = qq[inputl-1]
  }
  



  var qq3 = qq2 
  
  let element2 = document.getElementById("plane2");
  element2.innerHTML = qq3;
  
 
 

if (inputarr50 == newqq) {
  document.getElementById("text").style.backgroundColor = "rgb(100, 224, 224)"
  

  var acurracy = acurracy +1 
  
}

 else{
  document.getElementById("text").style.backgroundColor = "red"
  var acurracy = -1
}  
if (acurracy ==  1) {

  var avg =[]
  avg.push(inputl)
  
}
 else {
  
}





 var worng = inputl - avg 
 
console.log(worng)
console.log(avg)




}

  






document.getElementById("result").value = "0";
document.getElementById("text").value = "";
function clear1() {
  fn1();
  fn2();
}

var intervalId = window.setInterval(function () {
  fn1();
  fn2();
  fn3();
  
  clear1();
}, 1);
// console.log(number.toFixed(3))



















var x;
var startstop = 0;

function startStop() {
  /* Toggle StartStop */

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = "Start";
    startstop = 0;
    stop();
  }
}

function start() {
  x = setInterval(timer, 10);
} /* Start */

function stop() {
  clearInterval(x);
} /* Stop */

var milisec = 0;
var sec = 0; /* holds incrementing value */
var min = 0;
var hour = 0;

/* Contains and outputs returned value of  function checkTime */

/* Output variable End */

function timer() {
  /* Main Timer */

  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;
  }

  document.getElementById("milisec").innerHTML = miliSecOut;
  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;
  document.getElementById("hour").innerHTML = hourOut;

  var hh = minOut;
}


/* Adds 0 when value is <10 */

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {
  /*Reset*/

  milisec = 0;
  sec = 0;
  min = 0;
  hour = 0;

  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
}
