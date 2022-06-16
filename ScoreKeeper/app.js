const p1 = {
  score: 0,
  button: document.querySelector("#p1button"),
  display: document.querySelector("#p1disp"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2button"),
  display: document.querySelector("#p2disp"),
};

const resetbutton = document.querySelector("#reset");
let winscore = 3;
let isGameover = false;
const winscoreselect = document.querySelector("#playto");

function updateScores(player, opponent) {
  if (!isGameover) {
    player.score += 1;
    if (player.score === winscore) {
      isGameover = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

winscoreselect.addEventListener("change", function () {
  winscore = parseInt(this.value);
  reset();
});

resetbutton.addEventListener("click", reset);

function reset() {
  isGameover = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
