// my JavaScript

function goLeft() {
  //alert("you went left person");

  pickFeeling -= 1;

  if (pickFeeling < 0) {
    pickFeeling = 7;
  }

  setEverything(pickFeeling);
}

function goRight() {
  //alert("you went right person");

  pickFeeling += 1;

  if (pickFeeling >= feeling.length) {
    pickFeeling = 0;
  }

  setEverything(pickFeeling);

}

var feeling = ["Angry", "Bored", "Confused", "Nuetral", "Sad", "Happy", "Surprised", "Tired"];

var pickFeeling = Math.floor( Math.random() * 8 );

setEverything(pickFeeling);



function setEverything(fNum) {

  wordSpan = document.getElementById("span_text");
  thePic = document.getElementById("image_face");
  
  wordSpan.innerHTML = feeling[fNum];
  if (fNum == 0) {
    thePic.src ="https://github.com/24cteahan/tehan_project_1_images/blob/main/angry.png?raw=true"
  }
  if (fNum == 1) {
    thePic.src ="https://github.com/24cteahan/teahan_project_1_images/blob/main/bored.png?raw=true"
  }
  if (fNum == 2) {
    thePic.src ="https://github.com/24cteahan/teahan_project_1_images/blob/main/confused.png?raw=true"
  }
  if (fNum == 3) {
    thePic.src ="https://github.com/24cteahan/teahan_project_1_images/blob/main/nuetral.png?raw=true"
  }
  if (fNum == 4) {
    thePic.src ="https://github.com/24cteahan/teahan_project_1_images/blob/main/sad.png?raw=true"
  }
  if (fNum == 5) {
    thePic.src ="https://github.com/24cteahan/teahan_project_1_images/blob/main/smile.png?raw=true"
  }
  if (fNum == 6) {
    thePic.src ="https://github.com/24cteahan/teahan_project_1_images/blob/main/surprised.png?raw=true"
  }
  if (fNum == 7) {
    thePic.src ="https://github.com/24cteahan/teahan_project_1_images/blob/main/tired.png?raw=true"
  }
}


leftArrow = document.getElementById("arrowL");
leftArrow.addEventListener("click", goLeft);

rightArrow = document.getElementById("arrowR");
rightArrow.addEventListener("click", goRight);

var theDate = new Date();

var dow = theDate.getDay

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

var dayOfWeekSentence = "Today is " + day + " and I feel:";

document.getElementById("dayofweek").innerHTML = dayOfWeekSentence;

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("usr_time").innerHTML = d.toLocaleTimeString();
}