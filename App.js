import {game} from './Game.js';
import {checkObjectValues} from "./Utilities.js";
import { choices } from "./SetupGame.js";

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