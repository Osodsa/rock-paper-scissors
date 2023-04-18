import eradicate from "./eradicate";

const gameStateUpdate = (txt, el) => {
  /// fun to change div with class werdict text and delate array/nodelist
  const werdict = document.querySelector(".werdict");
  werdict.innerText = txt;
  eradicate(el);
};

export default gameStateUpdate;
