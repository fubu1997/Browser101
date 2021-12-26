const playBtn = document.querySelector('#play');
const stopBtn = document.querySelector('#stop');
const count = document.querySelector('#count');
const clock = document.querySelector('#clock');
const min = document.querySelector('#clock .min');
const sec = document.querySelector('#clock .sec');
let clockMin = min.textContent;
let clockSec = sec.textContent;
//----------------------ground--------------------//
const ground = document.querySelector('#ground');
bugImg = document.createElement('img');
bugImg.src = "/Practice09-Game/img/bug.png";
carrotImg = document.createElement('img');
carrotImg.src = "/Practice09-Game/img/carrot.png";

playBtn.addEventListener('click', () => {
  playBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');

  startClock = setInterval(clockCount, 1000);
  innerImg();
})

stopBtn.addEventListener('click', () => {
  stopLogic();
})

bugImg.addEventListener('click', () => {
  const loseContent = document.querySelector('#loseContent');
  const loseContentBtn = document.querySelector('#loseContent button');
  loseContent.classList.remove('hidden');
  stopLogic();
  loseContentBtn.addEventListener('click', () => {
    loseContent.classList.add('hidden');
  });
})

//-------------function-----------------
function stopLogic() {
  playBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');

  clearInterval(startClock);
  clockMin = 02;
  clockSec = 00;
  clock.innerHTML = `0${clockMin}:0${clockSec}`;
  ground.removeChild(bugImg);
  ground.removeChild(carrotImg);
}

function clockCount() {
  clockSec--;
  if(clockSec <= 0) {
    clockSec = 59;
    clockMin--;
    clock.innerHTML = `${clockMin<10?`0${clockMin}`:clockMin}:${clockSec<10?`0${clocksec}`:clockSec}`;
  } else {
    clock.innerHTML = `${clockMin<10?`0${clockMin}`:clockMin}:${clockSec<10?`0${clocksec}`:clockSec}`;
  }
}

function innerImg() {
  ground.appendChild(bugImg);
  ground.appendChild(carrotImg);
  bugImg.setAttribute("class", "bugImg");
  carrotImg.setAttribute("class", "carrotImg");
}

