"use strict";
window.addEventListener("load", ready);

// Point og liv nulstillet ved opstart
let points = 1;
// Math to roll which correct/incorrect spawns
let position_roll2 = 3;
let position_roll1 = Math.floor(Math.random() * 2) + 1;
if (position_roll1 == 1) {
  position_roll2 = 2;
} else {
  position_roll2 = 1;
}

console.log("Correct equals " + position_roll1);
console.log("Incorrect equals " + position_roll2);

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", level1);
}

function level1() {
  console.log("Level 1 started");
  // Initiate Level counter
  document.querySelector("#level_counter").textContent = "Level " + points;

  //Remove start/win/loss overlay
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_win").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");

  // Placer game elements
  document.querySelector("#game_correct1").classList.add("position" + position_roll2);
  document.querySelector("#game_incorrect1").classList.add("position" + position_roll1);

  // Start animationer på game elements
  document.querySelector("#game_correct1").classList.add("slide" + position_roll2);
  document.querySelector("#game_incorrect1").classList.add("slide" + position_roll1);

  // Registrer click
  document.querySelector("#game_correct1").addEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect1").addEventListener("click", gameOver1);
}

//  Add 1 point
function clickCorrect() {
  console.log("Correct AIO clicked");
  // Forhindre gentagne clicks
  document.querySelector("#game_correct1").removeEventListener("click", clickCorrect);
  document.querySelector("#game_correct2").removeEventListener("click", clickCorrect);
  document.querySelector("#game_correct3").removeEventListener("click", clickCorrect);
  document.querySelector("#game_correct4").removeEventListener("click", clickCorrect);
  document.querySelector("#game_correct5").removeEventListener("click", clickWin);
  document.querySelector("#game_incorrect1").removeEventListener("click", gameOver1);
  document.querySelector("#game_incorrect2").removeEventListener("click", gameOver2);
  document.querySelector("#game_incorrect3").removeEventListener("click", gameOver3);
  document.querySelector("#game_incorrect4").removeEventListener("click", gameOver4);
  document.querySelector("#game_incorrect5").removeEventListener("click", gameOver5);
  points++;
  document.querySelector("#level_counter").textContent = "Level " + points;
  eval("level" + points + "()");
}

//function levelDecider() {}

// sæt forsvind-animation på sprite
//document.querySelector("img").classList.add("fade_out");

// når forsvind-animation er færdig: coinGone
//document.addEventListener("animationend", levelDecider);

function level2() {
  console.log("Level 2 started");
  // Fade animation på
  document.querySelector("#correct_sprite1").classList.add("fade_out");
  document.querySelector("#incorrect_sprite1").classList.add("fade_out");

  document.querySelector("#correct_sprite1").addEventListener("animationend", yeet2);

  positionRoll();

  // Placer game elements
  document.querySelector("#game_correct2").classList.add("position" + position_roll2);
  document.querySelector("#game_incorrect2").classList.add("position" + position_roll1);
  // Start animationer på game elements
  document.querySelector("#game_correct2").classList.add("slide" + position_roll2);
  document.querySelector("#game_incorrect2").classList.add("slide" + position_roll1);
  // Registrer click
  document.querySelector("#game_correct2").addEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect2").addEventListener("click", gameOver2);
}

function level3() {
  console.log("Level 3 started");
  // Fade animation på
  document.querySelector("#correct_sprite2").classList.add("fade_out");
  document.querySelector("#incorrect_sprite2").classList.add("fade_out");

  document.querySelector("#correct_sprite2").addEventListener("animationend", yeet3);

  positionRoll();

  // Placer game elements
  document.querySelector("#game_correct3").classList.add("position" + position_roll2);
  document.querySelector("#game_incorrect3").classList.add("position" + position_roll1);
  // Start animationer på game elements
  document.querySelector("#game_correct3").classList.add("slide" + position_roll2);
  document.querySelector("#game_incorrect3").classList.add("slide" + position_roll1);
  // Registrer click
  document.querySelector("#game_correct3").addEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect3").addEventListener("click", gameOver3);
}

function level4() {
  console.log("Level 4 started");
  // Fade animation på hold
  document.querySelector("#game_correct3").classList.add("fade_out");
  document.querySelector("#game_incorrect3").classList.add("fade_out");

  document.querySelector("#correct_sprite3").addEventListener("animationend", yeet4);

  positionRoll();

  // Placer game elements
  document.querySelector("#game_correct4").classList.add("position" + position_roll2);
  document.querySelector("#game_incorrect4").classList.add("position" + position_roll1);
  // Start animationer på game elements
  document.querySelector("#game_correct4").classList.add("slide" + position_roll2);
  document.querySelector("#game_incorrect4").classList.add("slide" + position_roll1);
  // Registrer click
  document.querySelector("#game_correct4").addEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect4").addEventListener("click", gameOver4);
  // når forsvind-animation er færdig: coinGone
  //document.querySelector("#game_correct1").addEventListener("animationend", coinGone);
}

function level5() {
  console.log("Level 5 started");
  // Fade animation på hold
  document.querySelector("#game_correct4").classList.add("fade_out");
  document.querySelector("#game_incorrect4").classList.add("fade_out");

  document.querySelector("#correct_sprite4").addEventListener("animationend", yeet5);

  positionRoll();

  // Placer game elements
  document.querySelector("#game_correct5").classList.add("position" + position_roll2);
  document.querySelector("#game_incorrect5").classList.add("position" + position_roll1);
  // Start animationer på game elements
  document.querySelector("#game_correct5").classList.add("slide" + position_roll2);
  document.querySelector("#game_incorrect5").classList.add("slide" + position_roll1);
  // Registrer click
  document.querySelector("#game_correct5").addEventListener("click", clickWin);
  document.querySelector("#game_incorrect5").addEventListener("click", gameOver5);
  // når forsvind-animation er færdig: coinGone
  //document.querySelector("#game_correct1").addEventListener("animationend", coinGone);
}

// Spil afslutninger

function gameComplete() {
  console.log("Game Complete");
  document.querySelector("#game_complete").classList.remove("hidden");
  stop();
}

function gameOver1() {
  console.log("Game over: Level 1");
  document.querySelector("#game_over_title").textContent = "Game Over: Level 1";
  document.querySelector("#game_over_text").textContent = "This is the reason why you failed this level";
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#btn_over_reset").addEventListener("click", resetVars);
  stop();
}
function gameOver2() {
  console.log("Game over: Level 2");
  document.querySelector("#game_over_title").textContent = "Game Over: Level 2";
  document.querySelector("#game_over_text").textContent = "This is the reason why you failed this level";
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#btn_over_reset").addEventListener("click", resetVars);
  stop();
}

function gameOver3() {
  console.log("Game over: Level 3");
  document.querySelector("#game_over_title").textContent = "Game Over: Level 3";
  document.querySelector("#game_over_text").textContent = "This is the reason why you failed this level";
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#btn_over_reset").addEventListener("click", resetVars);
  stop();
}

function gameOver4() {
  console.log("Game over: Level 4");
  document.querySelector("#game_over_title").textContent = "Game Over: Level 4";
  document.querySelector("#game_over_text").textContent = "This is the reason why you failed this level";
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#btn_over_reset").addEventListener("click", resetVars);
  stop();
}

function gameOver5() {
  console.log("Game over: Level 5");
  document.querySelector("#game_over_title").textContent = "Game Over: Level 5";
  document.querySelector("#game_over_text").textContent = "This is the reason why you failed this level";
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#btn_over_reset").addEventListener("click", resetVars);
  stop();
}

function clickWin() {
  console.log("Game Win!");
  document.querySelector("#game_win").classList.remove("hidden");
  document.querySelector("#btn_win_reset").addEventListener("click", resetVars);
}

//  Functionalitet

function positionRoll() {
  position_roll1 = Math.floor(Math.random() * 2) + 1;
  if (position_roll1 == 1) {
    position_roll2 = 2;
  } else {
    position_roll2 = 1;
  }
  console.log("Correct equals " + position_roll1);
  console.log("Incorrect equals " + position_roll2);
}

function resetAnimation() {
  // Stop animationer level1
  document.querySelector("#game_correct1").classList.remove("position1");
  document.querySelector("#game_correct1").classList.remove("position2");
  document.querySelector("#game_correct1").classList.remove("position3");
  document.querySelector("#game_incorrect1").classList.remove("position1");
  document.querySelector("#game_incorrect1").classList.remove("position2");
  document.querySelector("#game_incorrect1").classList.remove("position3");
  document.querySelector("#game_correct1").classList.remove("slide1");
  document.querySelector("#game_correct1").classList.remove("slide2");
  document.querySelector("#game_incorrect1").classList.remove("slide1");
  document.querySelector("#game_incorrect1").classList.remove("slide2");
  document.querySelector("#correct_sprite1").classList.remove("fade_out");
  document.querySelector("#incorrect_sprite1").classList.remove("fade_out");

  // Stop animationer level2
  document.querySelector("#game_correct2").classList.remove("position1");
  document.querySelector("#game_correct2").classList.remove("position2");
  document.querySelector("#game_correct2").classList.remove("position3");
  document.querySelector("#game_incorrect2").classList.remove("position1");
  document.querySelector("#game_incorrect2").classList.remove("position2");
  document.querySelector("#game_incorrect2").classList.remove("position3");
  document.querySelector("#game_correct2").classList.remove("slide1");
  document.querySelector("#game_correct2").classList.remove("slide2");
  document.querySelector("#game_incorrect2").classList.remove("slide1");
  document.querySelector("#game_incorrect2").classList.remove("slide2");

  // Stop animationer level3
  document.querySelector("#game_correct3").classList.remove("position1");
  document.querySelector("#game_correct3").classList.remove("position2");
  document.querySelector("#game_correct3").classList.remove("position3");
  document.querySelector("#game_incorrect3").classList.remove("position1");
  document.querySelector("#game_incorrect3").classList.remove("position2");
  document.querySelector("#game_incorrect3").classList.remove("position3");
  document.querySelector("#game_correct3").classList.remove("slide1");
  document.querySelector("#game_correct3").classList.remove("slide2");
  document.querySelector("#game_incorrect3").classList.remove("slide1");
  document.querySelector("#game_incorrect3").classList.remove("slide2");

  // Stop animationer level4
  document.querySelector("#game_correct4").classList.remove("position1");
  document.querySelector("#game_correct4").classList.remove("position2");
  document.querySelector("#game_correct4").classList.remove("position3");
  document.querySelector("#game_incorrect4").classList.remove("position1");
  document.querySelector("#game_incorrect4").classList.remove("position2");
  document.querySelector("#game_incorrect4").classList.remove("position3");
  document.querySelector("#game_correct4").classList.remove("slide1");
  document.querySelector("#game_correct4").classList.remove("slide2");
  document.querySelector("#game_incorrect4").classList.remove("slide1");
  document.querySelector("#game_incorrect4").classList.remove("slide2");

  // Stop animationer level5
  document.querySelector("#game_correct5").classList.remove("position1");
  document.querySelector("#game_correct5").classList.remove("position2");
  document.querySelector("#game_correct5").classList.remove("position3");
  document.querySelector("#game_incorrect5").classList.remove("position1");
  document.querySelector("#game_incorrect5").classList.remove("position2");
  document.querySelector("#game_incorrect5").classList.remove("position3");
  document.querySelector("#game_correct5").classList.remove("slide1");
  document.querySelector("#game_correct5").classList.remove("slide2");
  document.querySelector("#game_incorrect5").classList.remove("slide1");
  document.querySelector("#game_incorrect5").classList.remove("slide2");

  // Fjern click
  document.querySelector("#game_correct1").removeEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect1").removeEventListener("click", gameOver1);
  document.querySelector("#game_correct2").removeEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect2").removeEventListener("click", gameOver2);
  document.querySelector("#game_correct3").removeEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect3").removeEventListener("click", gameOver3);
  document.querySelector("#game_correct3").removeEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect3").removeEventListener("click", gameOver4);
  document.querySelector("#game_correct3").removeEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect3").removeEventListener("click", gameOver5);
  document.querySelector("#game_correct3").removeEventListener("click", clickWin);
}

// Fjern positioner og yeet fra level 1
function yeet2() {
  console.log("LEVEL1 ELEMENTS GO YEET");

  document.querySelector("#game_correct1").classList.remove("position1");
  document.querySelector("#game_correct1").classList.remove("position2");
  document.querySelector("#game_correct1").classList.add("position3");
  document.querySelector("#game_incorrect1").classList.remove("position1");
  document.querySelector("#game_incorrect1").classList.remove("position2");
  document.querySelector("#game_incorrect1").classList.add("position3");
}

// Fjern positioner og yeet fra level 2
function yeet3() {
  console.log("LEVEL2 ELEMENTS GO YEET");
  document.querySelector("#game_correct2").classList.remove("position1");
  document.querySelector("#game_correct2").classList.remove("position2");
  document.querySelector("#game_correct2").classList.add("position3");
  document.querySelector("#game_incorrect2").classList.remove("position1");
  document.querySelector("#game_incorrect2").classList.remove("position2");
  document.querySelector("#game_incorrect2").classList.add("position3");
}

// Fjern positioner og yeet: level 3
// document.querySelector("#game_correct3").classList.remove("position1");
// document.querySelector("#game_correct3").classList.remove("position2");
// document.querySelector("#game_correct3").classList.add("position3");
// document.querySelector("#game_incorrect3").classList.remove("position1");
// document.querySelector("#game_incorrect3").classList.remove("position2");
// document.querySelector("#game_incorrect3").classList.add("position3");

function resetVars() {
  points = 1;
  resetAnimation();
  positionRoll();
  document.querySelector("#btn_start").removeEventListener("click", resetVars);
  document.querySelector("#btn_win_reset").removeEventListener("click", resetVars);
  document.querySelector("#btn_over_reset").removeEventListener("click", resetVars);
  level1();
}
