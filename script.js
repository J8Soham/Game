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

  };


const positions = [
    { left: "0%", top: "0%" },
    { left: "35%", top: "0%" },
    { left: "70%", top: "0%" },
    { left: "0%", top: "35%" },
    { left: "35%", top: "35%" },
    { left: "70%", top: "35%" },
    { left: "0%", top: "70%" },
    { left: "35%", top: "70%" },
    { left: "70%", top: "70%" }
];


let moveIsland = function() {
    let curP = isla.CurrentP
    while (curP == isla.CurrentP){
      curP = Math.floor(Math.random() * 9);
    }

    island.style.left = positions[curP].left;
    island.style.top = positions[curP].top;
    
    isla.CurrentP = curP;
    const rect = island.getBoundingClientRect();
    isla.x = rect.left;
    isla.y = rect.top;
  };
  


  function animate(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
  
    const elapsed = timestamp - startTime;
  
    isl.x = isl.x + ((elapsed / duration) * isl.cX);
    isl.x = isl.y + ((elapsed / duration) * isl.cY);
  
    island.style.left = isl.x + 'vw';
    island.style.top = isl.x + 'vh';
  
    const rect = island.getBoundingClientRect();
    const cornerX = rect.left;
    const cornerY = rect.top;
    console.log('Corner X:', cornerX, 'Corner Y:', cornerY);
    
    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  }

moveIsland();

setInterval(() => {
  moveIsland();
}, 3000);
