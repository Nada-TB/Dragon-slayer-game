import {game} from './modules/game.js';
import {checkObjectValues} from "./modules/utilities.js";
import { choices, preparation, gameResult } from "./modules/setUpGame.js";

let play= document.querySelector('button');

// click on play 
play.addEventListener("click",function(){
    if(checkObjectValues(choices)==true){
        preparation.classList.add('hide');
        gameResult.classList.remove('hide');
        game();
    }else{
        alert("set your choices to be able to play");
    }
    
})