const newExcuse = document.querySelector("#newExcuse");
const GenerarExcusa = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excusaAleatoria = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  return excusaAleatoria;
};

window.onload = function() {
  document.getElementById("excuse").innerHTML = GenerarExcusa();
};
newExcuse.addEventListener("click", () => {
  document.getElementById("excuse").innerHTML = GenerarExcusa();
});
