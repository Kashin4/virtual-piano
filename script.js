// ---------------------- Клавиши-and sounds------------------
const pianoKey = document.querySelectorAll(".piano-key");
const PIANO = document.querySelector(".piano");

const startSound = (event) => {
    event.target.classList.add ("active");
    event.target.classList.add('piano-key-active-pseudo');
};
const stopSound = (event) => {
    event.target.classList.remove ("active");  
    event.target.classList.remove('piano-key-active-pseudo');
    
};

const startCorrespondOver = (event) => {
    event.target.classList.add ("active");
    event.target.classList.add('piano-key-active-pseudo');
    pianoKey.forEach((elem)=> {
        elem.addEventListener('mousedown',playNote);
        elem.addEventListener("mouseover",startSound);
        elem.addEventListener("mouseout",stopSound);
        elem.addEventListener('mouseover',playNote);
    });
};

const stopCorrespondOver = () => {
    pianoKey.forEach((elem)=> {
        elem.classList.remove ("active");
        elem.classList.remove('piano-key-active-pseudo');
        elem.removeEventListener("mouseover",startSound);
        elem.removeEventListener("mouseout",stopSound);
        elem.removeEventListener('mouseover',playNote);
    });
};
PIANO.addEventListener("mousedown", startCorrespondOver);
document.addEventListener("mouseup", stopCorrespondOver);
//--------------Звуки-----
pianoKey.forEach((elem)=> {
    elem.addEventListener('mousedown',playNote);
    
});
 function playNote(elem) {
     let key = elem.target;
     let note = document.getElementById(key.dataset.note);
     note.currentTime = 0;
     note.play();
 }

 //------fullscreen-------

 let fullScreen = document.querySelector('.fullscreen');

 fullScreen.onclick = function () {
     if (document.fullscreenElement) {
         document.exitFullscreen();
     }
        else {
                document.documentElement.requestFullscreen();
        }
 }; 

//-------Notes-Letters---------

document.querySelector('.btn-letters').onclick = function() { 
    document.querySelector('.btn-letters').classList.add('btn-active');
    document.querySelector('.btn-notes').classList.remove('btn-active');
    pianoKey.forEach((elem)=> {
        elem.classList.add('piano-key-letter');
    });
  };

  document.querySelector('.btn-notes').onclick = function() {
    document.querySelector('.btn-notes').classList.add('btn-active');
    document.querySelector('.btn-letters').classList.remove('btn-active');
    pianoKey.forEach((elem)=> {
        elem.classList.remove('piano-key-letter');
    });
  };

//---------клавиатура------------
const pianoКeys = document.querySelectorAll('.piano-key');
window.addEventListener('keydown', (event) => {
    
    pianoКeys.forEach((item) => {
    if (!event.repeat) {
     if (event.code === `Key${item.dataset.letter}`) {
        item.classList.add('piano-key-active');
      playAudio(`assets/audio/${item.dataset.note}.mp3`); 
      
     }
   }});
  }
 );
 function playAudio(src) {
    const keySound= new Audio();
    keySound.src = src;
    keySound.currentTime = 0;
    keySound.play();
  }
window.addEventListener('keyup', () => {
  pianoКeys.forEach((item) => {
    item.classList.remove('piano-key-active');
  });
});

