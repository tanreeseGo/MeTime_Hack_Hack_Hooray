const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav .main-nav');
    const navLinks = document.querySelectorAll('nav .main-nav .link')
    // toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) { 
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
            }
            
        })
    });

    
}
navSlide();


// audio player 1------------------------
const audioPlayer1 = document.querySelector(".audio-player-1");
const audio1 = new Audio(
  "nature.mp3"
);


console.dir(audio1);

audio1.addEventListener(
  "loadeddata",
  () => {
    audioPlayer1.querySelector(".time-1 .length-1").textContent = getTimeCodeFromNum(
      audio1.duration
    );
    audio1.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline1 = audioPlayer1.querySelector(".timeline-1");
timeline1.addEventListener("click", e => {
  const timelineWidth1 = window.getComputedStyle(timeline1).width;
  const timeToSeek1 = e.offsetX / parseInt(timelineWidth1) * audio1.duration;
  audio1.currentTime = timeToSeek1;
}, false);

//click volume slider to change volume
const volumeSlider1 = audioPlayer1.querySelector(".controls-1 .volume-slider-1");
volumeSlider1.addEventListener('click', e => {
  const sliderWidth1 = window.getComputedStyle(volumeSlider1).width;
  const newVolume1 = e.offsetX / parseInt(sliderWidth1);
  audio1.volume = newVolume1;
  audioPlayer1.querySelector(".controls-1 .volume-percentage-1").style.width = newVolume1 * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar1 = audioPlayer1.querySelector(".progress-1");
  progressBar1.style.width = audio1.currentTime / audio1.duration * 100 + "%";
  audioPlayer1.querySelector(".time-1 .current-1").textContent = getTimeCodeFromNum(
    audio1.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn1 = audioPlayer1.querySelector(".controls-1 .toggle-play-1");
playBtn1.addEventListener(
  "click",
  () => {
    if (audio1.paused) {
      playBtn1.classList.remove("play-1");
      playBtn1.classList.add("pause");
      audio1.play();
    } else {
      playBtn1.classList.remove("pause");
      playBtn1.classList.add("play-1");
      audio1.pause();
    }
  },
  false
);

audioPlayer1.querySelector(".volume-button-1").addEventListener("click", () => {
  const volumeEl1 = audioPlayer1.querySelector(".volume-container-1 .volume-1");
  audio1.muted = !audio1.muted;
  if (audio1.muted) {
    volumeEl1.classList.remove("icono-volumeMedium-1");
    volumeEl1.classList.add("icono-volumeMute-1");
  } else {
    volumeEl1.classList.add("icono-volumeMedium-1");
    volumeEl1.classList.remove("icono-volumeMute-1");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}




function myFunction() {
  var current = new Date();
  const timeNow = current.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  var x = document.getElementById("myTime").value;
  var clickmenow = document.querySelector('#playtime')
  var y = moment(x, 'HH:mm A').format('h:mm A')
  console.log(x)
  console.log('------------------------------------------------------')
  console.log(y)
  console.log(x.replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3"))
  console.log(timeNow)
  if (y === timeNow) {
    clickmenow.addEventListener('click', function(){
      navigator.vibrate([
        500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500,500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500,500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500,500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500,500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500,500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500,500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500, 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 
        450, 110, 200, 110, 170, 40, 500,
      ]);
    });
    
  } else {
    console.log("DOING NOTHING!")
  }
}



// audio player 2 ----------------------------------------------


const audioPlayer2 = document.querySelector(".audio-player-2");
const audio2 = new Audio(
  "nature.mp3"
);


console.dir(audio2);

audio2.addEventListener(
  "loadeddata",
  () => {
    audioPlayer2.querySelector(".time-2 .length-2").textContent = getTimeCodeFromNum(
      audio2.duration
    );
    audio2.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline2 = audioPlayer2.querySelector(".timeline-2");
timeline2.addEventListener("click", e => {
  const timelineWidth2 = window.getComputedStyle(timeline2).width;
  const timeToSeek2 = e.offsetX / parseInt(timelineWidth2) * audio2.duration;
  audio.currentTime = timeToSeek2;
}, false);

//click volume slider to change volume
const volumeSlider2 = audioPlayer2.querySelector(".controls-2 .volume-slider-2");
volumeSlider2.addEventListener('click', e => {
  const sliderWidth2 = window.getComputedStyle(volumeSlider2).width;
  const newVolume2 = e.offsetX / parseInt(sliderWidth2);
  audio2.volume = newVolume2;
  audioPlayer2.querySelector(".controls-2 .volume-percentage-2").style.width = newVolume2 * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar2 = audioPlayer2.querySelector(".progress-2");
  progressBar2.style.width = audio2.currentTime / audio2.duration * 100 + "%";
  audioPlayer2.querySelector(".time-2 .current-2").textContent = getTimeCodeFromNum(
    audio2.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn2 = audioPlayer2.querySelector(".controls-2 .toggle-play-2");
playBtn2.addEventListener(
  "click",
  () => {
    if (audio2.paused) {
      playBtn2.classList.remove("play-2");
      playBtn2.classList.add("pause");
      audio2.play();
    } else {
      playBtn2.classList.remove("pause");
      playBtn2.classList.add("play-2");
      audio2.pause();
    }
  },
  false
);

audioPlayer2.querySelector(".volume-button-2").addEventListener("click", () => {
  const volumeEl2 = audioPlayer2.querySelector(".volume-container-2 .volume-2");
  audio2.muted = !audio2.muted;
  if (audio2.muted) {
    volumeEl2.classList.remove("icono-volumeMedium-2");
    volumeEl2.classList.add("icono-volumeMute-2");
  } else {
    volumeEl2.classList.add("icono-volumeMedium-2");
    volumeEl2.classList.remove("icono-volumeMute-2");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

// audio player 3 ---------------------------


const audioPlayer3 = document.querySelector(".audio-player-3");
const audio3 = new Audio(
  "nature.mp3"
);


console.dir(audio3);

audio3.addEventListener(
  "loadeddata",
  () => {
    audioPlayer3.querySelector(".time-3 .length-3").textContent = getTimeCodeFromNum(
      audio3.duration
    );
    audio3.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline3 = audioPlayer3.querySelector(".timeline-3");
timeline3.addEventListener("click", e => {
  const timelineWidth3 = window.getComputedStyle(timeline3).width;
  const timeToSeek3 = e.offsetX / parseInt(timelineWidth3) * audio3.duration;
  audio3.currentTime = timeToSeek3;
}, false);

//click volume slider to change volume
const volumeSlider3 = audioPlayer3.querySelector(".controls-3 .volume-slider-3");
volumeSlider3.addEventListener('click', e => {
  const sliderWidth3 = window.getComputedStyle(volumeSlider3).width;
  const newVolume3 = e.offsetX / parseInt(sliderWidth3);
  audio3.volume = newVolume3;
  audioPlayer3.querySelector(".controls-3 .volume-percentage-3").style.width = newVolume3 * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar3 = audioPlayer3.querySelector(".progress-3");
  progressBar3.style.width = audio3.currentTime / audio3.duration * 100 + "%";
  audioPlayer3.querySelector(".time-3 .current-3").textContent = getTimeCodeFromNum(
    audio3.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn3 = audioPlayer3.querySelector(".controls-3 .toggle-play-3");
playBtn3.addEventListener(
  "click",
  () => {
    if (audio3.paused) {
      playBtn3.classList.remove("play-3");
      playBtn3.classList.add("pause");
      audio3.play();
    } else {
      playBtn3.classList.remove("pause");
      playBtn3.classList.add("play-3");
      audio3.pause();
    }
  },
  false
);

audioPlayer3.querySelector(".volume-button-3").addEventListener("click", () => {
  const volumeEl3 = audioPlayer.querySelector(".volume-container-3 .volume-3");
  audio3.muted = !audio3.muted;
  if (audio3.muted) {
    volumeEl3.classList.remove("icono-volumeMedium-3");
    volumeEl3.classList.add("icono-volumeMute-3");
  } else {
    volumeEl3.classList.add("icono-volumeMedium-3");
    volumeEl3.classList.remove("icono-volumeMute-3");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}
