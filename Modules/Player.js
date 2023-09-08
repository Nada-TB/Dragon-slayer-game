import {defineRandom} from 'Dragon-slayer-game/blob/main/Modules/Utilities.js'

class Player {
    constructor(identity) {
      (this.identity = identity),
        (this.points = 0),
        (this.level = null),
        (this.armor = null),
        (this.sword = null),
        (this.attacker = null);
    }
  
    calculatePoints() {
      switch (this.identity) {
        case "player":
          switch (this.level) {
            case "1":
              return defineRandom(200, 250);
              break;
            case "2":
              return defineRandom(200, 250);
              break;
            case "3":
              return defineRandom(150, 200);
              break;
          }
  
          break;
  
        case "dragon":
        case "1":
          return defineRandom(150, 200);
          break;
        case "2":
          return defineRandom(200, 250);
          break;
        case "3":
          return defineRandom(200, 250);
          break;
          break;
      }
    }
  
    calculateDammage() {
      switch (this.attacker) {
        case "dragon":
          switch (this.level) {
            case "1":
              return defineRandom(10, 20);
              break;
            case "2":
              return defineRandom(20, 30);
              break;
            case "3":
              return defineRandom(20, 30);
              break;
          }
  
          break;
  
        case "player":
          switch (this.level) {
            case "1":
              return defineRandom(25, 30);
              break;
            case "2":
              return defineRandom(15, 30);
              break;
            case "3":
              return defineRandom(5, 10);
              break;
          }
          break;
      }
    }
  
    definePenality() {
      switch (this.attacker) {
        case "dragon":
          switch (this.armor) {
            case "copper":
              return 100;
              break;
            case "iron":
              return 75;
              break;
            case "magic":
              return 50;
              break;
          }
          break;
  
        case "player":
          switch (this.sword) {
            case "wood":
              return 50;
              break;
            case "steel":
              return 100;
              break;
            case "excalibur":
              return 200;
              break;
          }
          break;
      }
    }
  
    updatePoints() {
      return (
        this.points - (this.calculateDammage() * this.definePenality()) / 100
      );
    }
  }
  

export default Player;