# Dragon Slayer Game

Developed an immersive fantasy game using JavaScript, where players assume the role of a knight battling a dragon. Key features include player choices for game level and equipment, and an attack mechanism with point allocation based on game level, player equipment, and dragon attributes.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [license](#license)

## Introduction

Led the development of Dragon Slayer, an immersive fantasy game, showcasing advanced JavaScript skills, modular coding practices, and dynamic gameplay mechanics. The project highlights a comprehensive understanding of game development principles, user experience design, and platform optimization.

## Demo

Check out the live demo [github page](https://nada-tb.github.io/Dragon-slayer-game/).

## Requirements
- An Integrated Development Environment (IDE) like Visual Studio Code or Sublime Text.
- A modern web browser (e.g., Google Chrome, Firefox, Edge).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Nada-TB/Dragon-slayer-game.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Dragon-slayer-game
    ```

3. Open the `index.html` file in your web browser.

## Usage

### Game Rules
The Dragon Slayer Game is a turn-based combat game where players, as knights, battle a dragon. The game consists of three main stages:

1. **Preparation**: Set up the game parameters and distribute health points.
2. **Gameplay**: Play turns where characters attack each other.
3. **End of Game**: Determine the winner when one character's health points reach zero.

### Preparation
The player controls the knight, **Luk Skriptwalker**, and selects the game settings:
- **Difficulty Level**: Easy, Normal, or Hard
- **Armor**: Copper, Iron, or Magic
- **Sword**: Wood, Steel, or Excalibur

**Initial Points**:
- In **Easy** mode: Dragon: 150-200 HP, Knight: 200-250 HP
- In **Normal** mode: Dragon: 200-250 HP, Knight: 200-250 HP
- In **Hard** mode: Dragon: 200-250 HP, Knight: 150-200 HP

### Gameplay
The game proceeds with turns as long as both characters are alive. Each turn involves the following steps:
1. Determine which character attacks.
2. Calculate damage points inflicted on the opponent.
3. Subtract the damage points from the opponent's health.
4. Display the turn number, action, and remaining health points of both characters.

**Dragon's Attack**:
- **Easy**: 10-20 damage points
- **Normal**: 20-30 damage points
- **Hard**: 20-30 damage points
  - Copper Armor: No damage reduction
  - Iron Armor: 25% damage reduction
  - Magic Armor: 50% damage reduction

**Knight's Attack**:
- **Easy**: 25-30 damage points
- **Normal**: 15-20 damage points
- **Hard**: 5-10 damage points
  - Wood Sword: 50% damage reduction
  - Steel Sword: No damage change
  - Excalibur: 50% damage increase

### End of Game
The game ends when either the knight or the dragon dies. The winner is declared, and the game stops. 

## Features

1. **Player Choices:**
   - Implemented form-based player choices for selecting game level and equipment (armor and sword).
   - Ensured intuitive selection process with radio inputs and error handling for submitted choices.

2. **Dynamic Gameplay:**
   - Engaged players in epic battles as a noble knight facing off against a fierce dragon adversary.
   - Implemented randomized allocation of attacker status and point allocation for each battle round.

3. **Attack Mechanism:**
   - Developed game logic to determine point allocation based on various parameters (game level, player equipment, dragon attributes).
   - Updated player and dragon points after each battle round based on the outcome of the attack.

## Technologies Used

- JavaScript (ES6+)
- CSS
- HTML
- Object-Oriented Programming (OOP) principles
- Responsive Design
- Online IDE (CodeSandbox)

## Project Structure

```plaintext
dragon-slayer-game/
│
├── index.html         # Main HTML file
├── style.css          # CSS styles
├── app.js             # Main JavaScript file handling game flow
├── modules/           # Directory for JavaScript modules
│   ├── game.js        # Module handling core game mechanics
│   ├── setupGame.js   # Module for setting up initial game parameters
│   ├── utilities.js   # Utility functions used across the application
│   └── player.js      # Module for defining player attributes and actions
└── README.md          # Project documentation

```

## Challenges and Learnings

- Translating Game Logic to Code:

Leveraged pseudo code to outline the game's logic and structure, providing a roadmap for development.
Successfully translated complex game logic into functional code, ensuring accurate gameplay mechanics and adherence to the planned structure.

- Code Organization for Readability:

Organized the codebase using modular JavaScript with classes and modules.
Employed clear and descriptive variable names, comments, and documentation to enhance code readability and maintainability.

- Game Loop and Real-Time Updates:

Developed a robust game loop to control the flow of the game and provide real-time updates to the game state.
Ensured a seamless gameplay experience with synchronized display of round results and game progression.

- Practical Development Environment:

Leveraged CodeSandbox as an online IDE to streamline development processes and overcome resource constraints effectively.

User-Friendly Interface Design:
Implemented error handling mechanisms for submitted choices to guide users effectively through the gameplay process.

Through these challenges, I gained valuable skills in translating complex logic into functional code, developing algorithms for game mechanics, and effectively planning and implementing projects from initial concept to execution.


## Future Improvements

- **Enhanced UI/UX Design:**
  - Improve game graphics and visual elements to create a more immersive and engaging gaming experience.
  - Implement animations, sound effects, and interactive elements to enhance user interaction and feedback.

- **Two-Player Mode:**
  - Introduce a multiplayer mode where one player controls the knight and another player controls the dragon.
  - Enable simultaneous gameplay interactions between both players, adding strategic depth and competitive dynamics.

- **Interactive Gameplay Features:**
  - Implement interactive elements during gameplay phases, such as decision-making prompts for players to strategize their moves.
  - Introduce mini-games or challenges within the main game loop to vary gameplay and maintain player engagement.

- **Real-Time Updates and Feedback:**
  - Provide real-time updates and feedback during gameplay phases, ensuring players are actively involved throughout the game session.
  - Enhance user interface elements to display dynamic information and game state changes promptly.

These improvements aim to elevate the Dragon Slayer game by enhancing its visual appeal, adding multiplayer capabilities, and increasing interactive elements to enrich the overall gaming experience.


## Contact

- GitHub: [Nada-TB](https://github.com/Nada-TB)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

---

