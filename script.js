let bubble_container = document.querySelector(".bubble-container");
let score = document.querySelector("#score");
let timer = document.querySelector("#timer");
let number = document.querySelector("#number");
let game_over = document.querySelector(".game-over");
let restart_game = document.querySelector(".game-over button");
let parent = document.querySelector(".parent");

for (let i = 1; i <= 78; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble_container.appendChild(bubble);
}

  let bubbles = document.querySelectorAll(".bubble");
  function create_bubbles() {
    bubbles.forEach(function (bubble) {
      let random = Math.floor(Math.random() * 9 + 1);
      bubble.textContent = random;
    });
  }
  create_bubbles();

  function start_timer() {
    let time = 60;
    let interval = setInterval(function () {
      if(time > 0){
        time--;
        timer.textContent = time;
      }
      else{
        clearInterval(interval);
        parent.style.display = "none";
        game_over.style.display = "flex";
      }
    }, 1000);
  }
  start_timer();

  function generate_random() {
    let random = Math.floor(Math.random() * 9 + 1);
    number.textContent = random;
    console.log(random);
  }
  generate_random();

  bubble_container.addEventListener("click", function (dets) {
    if (dets.target.className === "bubble") {
      if (dets.target.textContent === number.textContent) {
        generate_random();
        create_bubbles();
        score.textContent = Number(score.textContent) + 10;
      } else {
        generate_random();
        score.textContent = Number(score.textContent) - 10;
        create_bubbles();
      }
    }
  });

restart_game.addEventListener("click", function () {
  parent.style.display = "block";
  game_over.style.display = "none";
  score.textContent = 0;
  start_timer();
});