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

playBtn.addEventListener('click', () => {
  playBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');

  startClock = setInterval(clockCount, 1000);
})


stopBtn.addEventListener('click', () => {
  playBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');

  clearInterval(startClock);
  clockMin = 02;
  clockSec = 00;
  clock.innerHTML = `0${clockMin}:0${clockSec}`;
})


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




bugImg = document.createElement('img');
bugImg.src = "/Practice09-Game/img/bug.png";

carrotImg = document.createElement('img');
carrotImg.src = "/Practice09-Game/img/carrot.png";

function innerImg() {
  ground.appendChild(bugImg);
  ground.appendChild(carrotImg);
  bugImg.style.transform = 'translate(120px, 400px)';
  carrotImg.style.transform = 'translate(120px, 200px)';
}

innerImg();