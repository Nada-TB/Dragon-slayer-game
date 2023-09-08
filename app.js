import {game} from '/Dragon-slayer-game/Modules/Game.js';
import {checkObjectValues} from "/Dragon-slayer-game/Modules/Utilities.js";
import { choices } from "/Dragon-slayer-game/Modules/SetUpGame.js";

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