# Simon Game Challenge

## Source

This project is a half-way challenge from [this brilliant Udemy course](https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=LEADERSALE24A). The game concept is not my original idea, the solution steps and the starting html and css files has been provided in the course.  
However, significant portions of the JavaScript code were written independently. The task wasn't easy, but with some advice concerning final steps I have managed to finish this project.

![](https://github.com/NullishKoala/Portfolio/blob/master/Simon%20Game%20Challenge/Simon%20Game.png)

## Challenges

Looking back, I've overcomplicated things creating an object to store some properties and methods. Using simple array have proven to work better here.
Another challenging part was using JQuery. It has been my first time implementing it, so I have spend some extra time diging in documentation. Note for the future: writing psuedocode and explicit comments helps coming back to the project after having a break. I'm happy to have come to this conclusion sooner then later.

## Technologies used:

- HTML,
- CSS,
- JS,
- JQuery.

## How to play?

To start playing, simply refresh the page, which initializes the game at level 1 with a randomly selected square highlighted and accompanied by a sound. The objective is for the player to click on the highlighted square. If correct, the player progresses to the next level. Each subsequent level increases the length of the sequence of randomly chosen squares. A single mistake ends the game.

## Gameplay Mechanics

1. The game starts upon detecting a keydown event.
2. Upon initiation, the game checks if it's already active. If not, it sets up the game:

- Changes the title header
- Initializes the game variables (player's pattern array, game level)
- Selects a random square, highlights it, and plays a corresponding sound effect
- Records the chosen square's color in the game pattern array

3. User interaction:

- Player clicks on a square, triggering:
  - Highlight effect
  - Sound effect

4. Comparison of player's input with the game's pattern

- If the user's input does not match the game's pattern, the game ends:
  - Plays a 'wrong' sound effect
  - Flashes the screen
  - Initiates a restart function, resetting the game
- If the user's input matches the game's pattern and both arrays are of equal length:
  - Initiates a timeout function to select the next element in the game's sequence
  - Increases the game level
  - Returns to step 3 for the next round of user interaction

## Conclusion

The Simon Game Challenge provides a simple yet engaging experience for players while offering learning opportunities for JavaScript and jQuery implementation. This README is a guide for both players and developers, detailing the game mechanics and underlying code structure.
