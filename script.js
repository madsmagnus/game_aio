"use strict";
window.addEventListener("load", ready);

/// SET GLOBAL VARIABLES
let points = 1;
let position_roll2 = 3;
let position_roll1 = 4;


  //////////////
 /// LEVELS ///
//////////////

/// BEGIN LEVEL1
function level1() {
  console.log("LEVEL1 STARTED");

  /// CHANGE LEVEL TEXT
  document.querySelector("#level_explain").textContent = "NZXT H7";

  /// RUN POSITION ROLL
  positionRoll();

  /// PLACE GAME ELEMENTS
  document.querySelector("#game_correct1").classList.add("position" + position_roll2);
  document.querySelector("#game_incorrect1").classList.add("position" + position_roll1);

  /// APPLY SLIDE ANIMATION TO GAME ELEMENTS
  document.querySelector("#game_correct1").classList.add("slide" + position_roll2);
  document.querySelector("#game_incorrect1").classList.add("slide" + position_roll1);

  /// ADD EVENT LISTENERS TO GAME ELEMENTS
  document.querySelector("#game_correct1").addEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect1").addEventListener("click", gameOver1);
}

/// BEGIN LEVEL2
function level2() {
  console.log("LEVEL2 STARTED");

  /// CHANGE LEVEL TEXT
  document.querySelector("#level_explain").textContent = "Fractal North";

  /// FADE_OUT APPLIED TO LAST LEVEL ELEMENTS
  document.querySelector("#correct_sprite1").classList.add("fade_out");
  document.querySelector("#incorrect_sprite1").classList.add("fade_out");

  /// YEET LEVEL1 STUFF
  document.querySelector("#correct_sprite1").addEventListener("animationend", yeet2);

  /// RUN POSITION ROLL
  positionRoll();

  /// PLACE GAME ELEMENTS
  document.querySelector("#game_correct2").classList.add("position" + position_roll2);
  document.querySelector("#game_incorrect2").classList.add("position" + position_roll1);

  /// APPLY SLIDE ANIMATION TO GAME ELEMENTS
  document.querySelector("#game_correct2").classList.add("slide" + position_roll2);
  document.querySelector("#game_incorrect2").classList.add("slide" + position_roll1);

  /// ADD EVENT LISTENERS TO GAME ELEMENTS
  document.querySelector("#game_correct2").addEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect2").addEventListener("click", gameOver2);
}

/// BEGIN LEVEL3
function level3() {
  console.log("LEVEL3 STARTED");

  /// CHANGE LEVEL TEXT
  document.querySelector("#level_explain").textContent = "Corsair 4000D";

  /// FADE_OUT APPLIED TO LAST LEVEL ELEMENTS
  document.querySelector("#correct_sprite2").classList.add("fade_out");
  document.querySelector("#incorrect_sprite2").classList.add("fade_out");

  /// YEET LEVEL2 STUFF
  document.querySelector("#correct_sprite2").addEventListener("animationend", yeet3);

  positionRoll();

  /// PLACE GAME ELEMENTS
  document.querySelector("#game_correct3").classList.add("position" + position_roll2);
  document.querySelector("#game_incorrect3").classList.add("position" + position_roll1);
  /// APPLY SLIDE ANIMATION TO GAME ELEMENTS
  document.querySelector("#game_correct3").classList.add("slide" + position_roll2);
  document.querySelector("#game_incorrect3").classList.add("slide" + position_roll1);
  // Registrer click
  document.querySelector("#game_correct3").addEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect3").addEventListener("click", gameOver3);
}

/// BEGIN LEVEL4
function level4() {
  console.log("LEVEL4 STARTED");

  /// CHANGE LEVEL TEXT
  document.querySelector("#level_explain").textContent = "Hyte Y60";

  /// FADE_OUT APPLIED TO LAST LEVEL ELEMENTS
  document.querySelector("#correct_sprite3").classList.add("fade_out");
  document.querySelector("#incorrect_sprite3").classList.add("fade_out");

  /// YEET LEVEL3 STUFF
  document.querySelector("#correct_sprite3").addEventListener("animationend", yeet4);

  /// RUN POSITION ROLL
  positionRoll();

  /// PLACE GAME ELEMENTS
  document.querySelector("#game_correct4").classList.add("position" + position_roll2);
  document.querySelector("#game_incorrect4").classList.add("position" + position_roll1);

  /// APPLY SLIDE ANIMATION TO GAME ELEMENTS
  document.querySelector("#game_correct4").classList.add("slide" + position_roll2);
  document.querySelector("#game_incorrect4").classList.add("slide" + position_roll1);

  /// ADD EVENT LISTENERS TO GAME ELEMENTS
  document.querySelector("#game_correct4").addEventListener("click", clickCorrect);
  document.querySelector("#game_incorrect4").addEventListener("click", gameOver4);
}

/// BEGIN LEVEL5
function level5() {
  console.log("LEVEL5 STARTED");

  /// CHANGE LEVEL TEXT
  document.querySelector("#level_explain").textContent = "Fractal Torrent";

  /// FADE_OUT APPLIED TO LAST LEVEL ELEMENTS
  document.querySelector("#correct_sprite4").classList.add("fade_out");
  document.querySelector("#incorrect_sprite4").classList.add("fade_out");

  /// YEET LEVEL4 STUFF
  document.querySelector("#correct_sprite4").addEventListener("animationend", yeet5);

  /// RUN POSITION ROLL
  positionRoll();

  /// PLACE GAME ELEMENTS
  document.querySelector("#game_correct5").classList.add("position" + position_roll2);
  document.querySelector("#game_incorrect5").classList.add("position" + position_roll1);

  /// APPLY SLIDE ANIMATION TO GAME ELEMENTS
  document.querySelector("#game_correct5").classList.add("slide" + position_roll2);
  document.querySelector("#game_incorrect5").classList.add("slide" + position_roll1);

  /// ADD EVENT LISTENERS TO GAME ELEMENTS
  document.querySelector("#game_correct5").addEventListener("click", gameWin);
  document.querySelector("#game_incorrect5").addEventListener("click", gameOver5);
}

  ////////////////////
 /// GAME ENDINGS ///
////////////////////

/// DISPLAY GAME WIN
function gameWin() {
  console.log("GAME WIN");
  document.querySelector("#game_win").classList.remove("hidden");
  document.querySelector("#game_win").classList.add("fade_in");
}

/// DISPLAY GAME OVER1
function gameOver1() {
  console.log("GAME OVER: LEVEL1");
  document.querySelector("#game_over_title").textContent = "Game Over: Level 1";
  document.querySelector("#game_over_text").textContent = "Hvis man har pladsen, kan man lige s?? godt udnytte hele arealet. Prisforskellen er ikke v??rd at spare p??";
  document.getElementById("game_over_img").innerHTML = "<img src='img\\game_over1.png'>";
  document.querySelector("#game_over").classList.remove("hidden");
  stop();
}

/// DISPLAY GAME OVER2
function gameOver2() {
  console.log("GAME OVER: LEVEL2");
  document.querySelector("#game_over_title").textContent = "Game Over: Level 2";
  document.querySelector("#game_over_text").textContent =
    "Selv om man kan f?? en st??rre radiator, s?? er det altid foretrukkent at have den monteret i toppen. Desuden s?? er k??lefladen p?? en 280x140x28 n??rmest det samme som 360x120x28 (1098cm?? vs 1210cm??)";
  document.getElementById("game_over_img").innerHTML = "<img src='img\\game_over2.png'>";
  document.querySelector("#game_over").classList.remove("hidden");
  stop();
}

/// DISPLAY GAME OVER3
function gameOver3() {
  console.log("GAME OVER: LEVEL3");
  document.querySelector("#game_over_title").textContent = "Game Over: Level 3";
  document.querySelector("#game_over_text").textContent =
    "Selv om man kan f?? en st??rre radiator, s?? er det altid foretrukkent at have den monteret i toppen. Desuden s?? er k??lefladen p?? en 280x140x28 n??rmest det samme som 360x120x28 (1098cm?? vs 1210cm??)";
  document.getElementById("game_over_img").innerHTML = "<img src='img\\game_over3.png'>";
  document.querySelector("#game_over").classList.remove("hidden");
  stop();
}

/// DISPLAY GAME OVER4
function gameOver4() {
  console.log("GAME OVER: LEVEL4");
  document.querySelector("#game_over_title").textContent = "Game Over: Level 4";
  document.querySelector("#game_over_text").textContent = "Hellere udnytte pladsen til det yderste, n??r prisen ofte er meget t??t.";
  document.getElementById("game_over_img").innerHTML = "<img src='img\\game_over4.png'>";
  document.querySelector("#game_over").classList.remove("hidden");
  stop();
}

/// DISPLAY GAME OVER5
function gameOver5() {
  console.log("GAME OVER: LEVEL5");
  document.querySelector("#game_over_title").textContent = "Game Over: Level 5";
  document.querySelector("#game_over_text").textContent =
    "En radiator monteret i bunden, og derved pumpen som det h??jeste punkt, vil uden tvivl betyde en v??sentligt kortere levetid for en AIO. Luften vil samle sig i pumpen, som vil ??del??gge den.";
  document.getElementById("game_over_img").innerHTML = "<img src='img\\game_over5.png'>";
  document.querySelector("#game_over").classList.remove("hidden");
  stop();
}

  /////////////////////
 /// FUNCTIONALITY ///
/////////////////////

/// INITIALIZE
function ready() {
  console.log("JS LOADED");
  document.querySelector("#level_counter").textContent = "Level " + points + "/5";
  document.querySelector("#btn_start").addEventListener("click", clearMenu);
}

/// CLEAR WIN/GAMEOVER/START
function clearMenu() {
  /// REMOVE GAME START/ENDINGS
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_win").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");

  /// GO TO LEVEL1
  level1()
}

/// ROLL RANDOM POSITION_ROLL1 & 2
function positionRoll() {
  position_roll1 = Math.floor(Math.random() * 2) + 1;
  if (position_roll1 == 1) {
    position_roll2 = 2;
  } else {
    position_roll2 = 1;
  }
  console.log("POSITION REROLL: CORRECT AIO = " + position_roll1);
}

//  LEVEL COMPLETE
function clickCorrect() {
  console.log("LEVEL" + points + " COMPLETE");
  /// REMOVE EVENTLISTENENER TO AVOID MULTIPLE CLICKS
  document.querySelector("#game_correct1").removeEventListener("click", clickCorrect);
  document.querySelector("#game_correct2").removeEventListener("click", clickCorrect);
  document.querySelector("#game_correct3").removeEventListener("click", clickCorrect);
  document.querySelector("#game_correct4").removeEventListener("click", clickCorrect);
  document.querySelector("#game_correct5").removeEventListener("click", gameWin);
  document.querySelector("#game_incorrect1").removeEventListener("click", gameOver1);
  document.querySelector("#game_incorrect2").removeEventListener("click", gameOver2);
  document.querySelector("#game_incorrect3").removeEventListener("click", gameOver3);
  document.querySelector("#game_incorrect4").removeEventListener("click", gameOver4);
  document.querySelector("#game_incorrect5").removeEventListener("click", gameOver5);

  /// ADD 1 POINT TO POINTS
  points++;

  /// UPDATE LEVEL COUNTER TEXT
  document.querySelector("#level_counter").textContent = "Level " + points + "/5";

  /// GO TO LEVEL FUNCTION BASED ON POINTS
  eval("level" + points + "()");
}

/// RESET ANIMATIONS BEFORE GAME RESET
function resetAnimation() {
  /// STOP ANIMATIONS ON LEVEL1
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

  /// STOP ANIMATIONS ON LEVEL2
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
  document.querySelector("#correct_sprite2").classList.remove("fade_out");
  document.querySelector("#incorrect_sprite2").classList.remove("fade_out");

  /// STOP ANIMATIONS ON LEVEL3
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
  document.querySelector("#correct_sprite3").classList.remove("fade_out");
  document.querySelector("#incorrect_sprite3").classList.remove("fade_out");

  /// STOP ANIMATIONS ON LEVEL4
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
  document.querySelector("#correct_sprite4").classList.remove("fade_out");
  document.querySelector("#incorrect_sprite4").classList.remove("fade_out");

  /// STOP ANIMATIONS ON LEVEL5
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
  document.querySelector("#correct_sprite5").classList.remove("fade_out");
  document.querySelector("#incorrect_sprite5").classList.remove("fade_out");

  /// REMOVE CLICK LISTENERS
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
  document.querySelector("#game_correct3").removeEventListener("click", gameWin);
}

/// REMOVE POSITION1+2 AND APPLY POSITION3 ON LEVEL1 ELEMENTS
function yeet2() {
  console.log("OLD ELEMENTS YEETED1");

  document.querySelector("#game_correct1").classList.remove("position1");
  document.querySelector("#game_correct1").classList.remove("position2");
  document.querySelector("#game_correct1").classList.add("position3");
  document.querySelector("#game_incorrect1").classList.remove("position1");
  document.querySelector("#game_incorrect1").classList.remove("position2");
  document.querySelector("#game_incorrect1").classList.add("position3");
}

/// REMOVE POSITION 1+2 AND APPLY POSITION3 ON LEVEL2 ELEMENTS
function yeet3() {
  console.log("OLD ELEMENTS YEETED2");
  document.querySelector("#game_correct2").classList.remove("position1");
  document.querySelector("#game_correct2").classList.remove("position2");
  document.querySelector("#game_correct2").classList.add("position3");
  document.querySelector("#game_incorrect2").classList.remove("position1");
  document.querySelector("#game_incorrect2").classList.remove("position2");
  document.querySelector("#game_incorrect2").classList.add("position3");
}

/// REMOVE POSITION 1+2 AND APPLY POSITION 3 ON LEVEL3 ELEMENTS
function yeet4() {
  console.log("OLD ELEMENTS YEETED3");
  document.querySelector("#game_correct3").classList.remove("position1");
  document.querySelector("#game_correct3").classList.remove("position2");
  document.querySelector("#game_correct3").classList.add("position3");
  document.querySelector("#game_incorrect3").classList.remove("position1");
  document.querySelector("#game_incorrect3").classList.remove("position2");
  document.querySelector("#game_incorrect3").classList.add("position3");
}

/// REMOVE POSITION 1+2 AND APPLY POSITION 3 ON LEVEL4 ELEMENTS
function yeet5() {
  console.log("OLD ELEMENTS YEETED4");
  document.querySelector("#game_correct4").classList.remove("position1");
  document.querySelector("#game_correct4").classList.remove("position2");
  document.querySelector("#game_correct4").classList.add("position3");
  document.querySelector("#game_incorrect4").classList.remove("position1");
  document.querySelector("#game_incorrect4").classList.remove("position2");
  document.querySelector("#game_incorrect4").classList.add("position3");
}
