const defineRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

const defineAttacker = () => {
    let choice = defineRandom(0, 20);
    if (choice < 10) {
      return "player";
    } else {
      return "dragon";
    }
  };
  const checkObjectValues = (object) => {
    let check = Object.values(object).every((elt) => {
      return elt != "";
    });
    return check;
  };
  
export{
    defineAttacker,
    defineRandom,
    checkObjectValues
}