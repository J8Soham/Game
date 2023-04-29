const island = document.querySelector(".island");
const box = document.querySelector(".box");

const boxWidth = box.offsetWidth;
const boxHeight = box.offsetHeight;

const islandWidth = island.offsetWidth;
const islandHeight = island.offsetHeight;

let isla = {
  x: boxWidth / 2,
  y: boxHeight / 2,
  CurrentP: 4,
  cX: 0,
  cY: 0,
};

const positions = [
  { left: "0%", top: "0%" },
  { left: "25%", top: "0%" },
  { left: "50%", top: "0%" },
  { left: "0%", top: "25%" },
  { left: "25%", top: "25%" },
  { left: "50%", top: "25%" },
  { left: "0%", top: "50%" },
  { left: "25%", top: "50%" },
  { left: "50%", top: "50%" },
];

const allowedMoves = {
  0: [1, 3],
  1: [0, 2, 4],
  2: [1, 5],
  3: [0, 4, 6],
  4: [1, 3, 5, 7],
  5: [2, 4, 8],
  6: [3, 7],
  7: [4, 6, 8],
  8: [5, 7],
};

const duration = 10000;

let moveIsland = function () {
  let allowed = allowedMoves[isla.CurrentP];
  let curP = allowed[Math.floor(Math.random() * allowed.length)];

  island.style.left = positions[curP].left;
  island.style.top = positions[curP].top;
  isla.CurrentP = curP;

  const rect = island.getBoundingClientRect();
  isla.x = rect.left;
  isla.y = rect.top;
};

moveIsland();

setInterval(() => {
  moveIsland();
}, duration);
