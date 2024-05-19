let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

// Start game by pressing any key:
// This initiates new game sequence: adding random color to the gamePattern array
$(document).keydown(function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});

const nextSequence = function () {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  addAnimation(randomChosenColour);
  playSound(randomChosenColour);
};

// Press button to store its colour in userClickedPattern array and compare it to gamePattern array to continue playing or ending the game (in case of clicking the incorrect button)
$(".btn").click(function () {
  const userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

// this function checks if the user clicked the correct sequence of buttons
const checkAnswer = function (index) {
  if (gamePattern[index] === userClickedPattern[index]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    const audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over"), 200;
    });
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
};

// Animation functions:
const addAnimation = function (randomChosenColor) {
  $("#" + randomChosenColor)
    .animate({ opacity: "0" })
    .animate({ opacity: "1" });
};

const animatePress = function (currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 200);
};

// Audio function:
const playSound = function (namee) {
  const audio = new Audio("./sounds/" + namee + ".mp3");
  audio.play();
};

const startOver = function () {
  level = 0;
  started = false;
  gamePattern = [];
};
