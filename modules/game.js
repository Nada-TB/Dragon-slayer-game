import Player from './player.js';
import {defineAttacker} from './utilities.js';
import {choices,armorBtn,levelBtn,swordBtn,preparation,gameResult} from './setUpGame.js';

export const game =()=>{
    let turn=0;
    let player= new Player("player");
    let dragon= new Player('dragon');
    for (const key in choices) {
        dragon[key]=choices[key];
        player[key]=choices[key];
    }
    // assign points at the beginning of the game
    dragon.points=dragon.calculatePoints();
    player.points=player.calculatePoints();
    document.getElementById('level').textContent=choices.level;
    let repeat=setInterval(()=>{
        //set the condition that end the game
        if (player.points <= 0 || dragon.points <= 0) {
            clearInterval(repeat);
            document.getElementById("gameOver").textContent="Game Over the winner is: " + choices.attacker;
            //reset the game
            armorBtn.value="";
            levelBtn.value="";
            swordBtn.value="";
            for(const key in choices){
              choices[key]="";
            }
            preparation.style.display="flex";
            gameResult.classList.add('hide');
          }
        let attacker= defineAttacker();
        player.attacker=attacker;
        dragon.attacker=attacker;
        choices.attacker=attacker;
        let dammagePoints=player.calculateDammage();
        let penality=player.definePenality();
        turn++;
        switch(attacker){
            case "dragon":
                player.points=player.updatePoints();
            break;

            case "player":
                dragon.points=dragon.updatePoints();
            break;
        }
        document.getElementById("playerPoints").textContent=player.points;
        document.getElementById("dragonPoints").textContent=dragon.points;
        document.getElementById('attacker').textContent=attacker;
        document.getElementById('victim').textContent=attacker=='dragon' ? 'player' : 'dragon';
        document.getElementById('turn').textContent=turn;
        document.getElementById('dammagePoints').textContent=dammagePoints;
        document.getElementById('penality').textContent=`${penality} %`;
        document.getElementById('updatePlayerPoints').textContent=player.points;
        document.getElementById('updateDragonPoints').textContent=dragon.points;
    },1000);
}


