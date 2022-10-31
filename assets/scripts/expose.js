// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  let shootConfetti = false;
  const jsConfetti = new JSConfetti();

  let dropDown = document.querySelector('[name="horn"]');
  dropDown.addEventListener('change', (event) => {
    if (event.target.value == 'party-horn') {
      shootConfetti = true;
    }
    else {
      shootConfetti = false;
    }
    let image = document.querySelector('[alt="No image selected"]');
    image.src = "/assets/images/" + event.target.value + ".svg";
    let audio = document.getElementsByClassName('hidden')[0];
    audio.src = "/assets/audio/" + event.target.value + ".mp3";
  });

  let volumeSlider = document.getElementById('volume-controls');
  volumeSlider.addEventListener('change', (event) => {
    let image = document.querySelector('[alt="Volume level 2"]');
    if (event.target.value == 0){
      image.src = "/assets/icons/volume-level-0.svg";
    }
    else if (event.target.value < 33){
      image.src = "/assets/icons/volume-level-1.svg";
    }
    else if (event.target.value < 67){
      image.src = "/assets/icons/volume-level-2.svg";
    }
    else {
      image.src = "/assets/icons/volume-level-3.svg";
    }
    let audio = document.getElementsByClassName('hidden')[0];
    audio.volume = event.target.value / 100;
    console.log(audio.volume)
  });

  document.addEventListener('click', (event) => {
    if (event.target.tagName == "BUTTON") {
      let audio = document.getElementsByClassName('hidden')[0];
      audio.play();
      if (shootConfetti) {
        jsConfetti.addConfetti();
      }
    }
  })
}