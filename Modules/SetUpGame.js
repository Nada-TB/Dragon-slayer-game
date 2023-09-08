let levelBtn = document.querySelector('select[name="level"]');
let armorBtn = document.querySelector('select[name="armor"]');
let swordBtn = document.querySelector('select[name="sword"]');
let gameResult = document.getElementById("game");
let preparation = document.getElementById("preparation");

let choices = { level: "", armor: "", sword: "" };
// Select level event
levelBtn.addEventListener("change", function () {
  choices.level = levelBtn.value;
});

// select armor event
armorBtn.addEventListener("change", function () {
  choices.armor = armorBtn.value;

});
// select sword event
swordBtn.addEventListener("change", function () {
  choices.sword = swordBtn.value;
});

export{
    choices,
    armorBtn,
    levelBtn,
    swordBtn,
    gameResult,
    preparation
}